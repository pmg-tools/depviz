package main

import (
	"encoding/json"
	"moul.io/depviz/pkg/repo"
	"os"
	"sync"

	"github.com/pkg/errors"
	"github.com/spf13/cobra"
	"github.com/spf13/pflag"
	"github.com/spf13/viper"
	"go.uber.org/zap"
)

type pullOptions struct {
	// pull
	GithubToken string `mapstructure:"github-token"`
	GitlabToken string `mapstructure:"gitlab-token"`
	// includeExternalDeps bool

	Targets repo.Targets `mapstructure:"targets"`
}

func (opts pullOptions) String() string {
	out, _ := json.Marshal(opts)
	return string(out)
}

type pullCommand struct {
	opts pullOptions
}

func (cmd *pullCommand) LoadDefaultOptions() error {
	if err := viper.Unmarshal(&cmd.opts); err != nil {
		return err
	}
	return nil
}

func (cmd *pullCommand) ParseFlags(flags *pflag.FlagSet) {
	flags.StringVarP(&cmd.opts.GithubToken, "github-token", "", "", "GitHub Token with 'issues' access")
	flags.StringVarP(&cmd.opts.GitlabToken, "gitlab-token", "", "", "GitLab Token with 'issues' access")
	viper.BindPFlags(flags)
}

func (cmd *pullCommand) NewCobraCommand(dc map[string]DepvizCommand) *cobra.Command {
	cc := &cobra.Command{
		Use: "pull",
		RunE: func(_ *cobra.Command, args []string) error {
			opts := cmd.opts
			var err error
			if opts.Targets, err = repo.ParseTargets(args); err != nil {
				return errors.Wrap(err, "invalid targets")
			}
			return pullAndCompute(&opts)
		},
	}
	cmd.ParseFlags(cc.Flags())
	return cc
}

func pullAndCompute(opts *pullOptions) error {
	if os.Getenv("DEPVIZ_NOPULL") != "1" {
		if err := pull(opts); err != nil {
			return errors.Wrap(err, "failed to pull")
		}
	}
	if err := compute(opts); err != nil {
		return errors.Wrap(err, "failed to compute")
	}
	return nil
}

func pull(opts *pullOptions) error {
	// FIXME: handle the special '@me' target
	zap.L().Debug("pull", zap.Stringer("opts", *opts))

	var (
		wg        sync.WaitGroup
		allIssues []*repo.Issue
		out       = make(chan []*repo.Issue, 100)
	)

	targets := opts.Targets.UniqueProjects()

	// parallel fetches
	wg.Add(len(targets))
	for _, target := range targets {
		switch target.Driver() {
		case repo.GithubDriver:
			go repo.GithubPull(target, &wg, opts.GithubToken, db, out)
		case repo.GitlabDriver:
			go repo.GitlabPull(target, &wg, opts.GitlabToken, db, out)
		default:
			panic("should not happen")
		}
	}
	wg.Wait()
	close(out)
	for issues := range out {
		allIssues = append(allIssues, issues...)
	}

	// save
	for _, issue := range allIssues {
		if err := db.Save(issue).Error; err != nil {
			return err
		}
	}
	return nil
}
