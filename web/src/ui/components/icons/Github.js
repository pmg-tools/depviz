import React from 'react'

const GithubIcon = () => (
  <svg width="26px" height="25px" viewBox="0 0 26 25" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <rect x="0" y="0" width="478" height="255" rx="15" />
      <filter x="-4.8%" y="-7.5%" width="109.6%" height="118.0%" filterUnits="objectBoundingBox">
        <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
        <feOffset dx="0" dy="4" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
        <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
        <feColorMatrix values="0 0 0 0 0.219607843   0 0 0 0 0.231372549   0 0 0 0 0.384313725  0 0 0 0.15 0" type="matrix" in="shadowBlurOuter1" />
      </filter>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-389.000000, -22.000000)">
        <g>
          <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-github-1" />
          <use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-github-1" />
        </g>
        <g transform="translate(62.000000, 21.000000)" fill="#DFE0EB" fillRule="nonzero">
          <g className="icon-github" transform="translate(327.000000, 1.000000)">
            <path d="M8.69637097,20.1299634 C8.69637097,20.2333531 8.57580645,20.3160648 8.42379032,20.3160648 C8.25080645,20.3315732 8.13024194,20.2488615 8.13024194,20.1299634 C8.13024194,20.0265738 8.25080645,19.9438621 8.40282258,19.9438621 C8.56008065,19.9283536 8.69637097,20.0110654 8.69637097,20.1299634 Z M7.06612903,19.8973367 C7.02943548,20.0007264 7.13427419,20.1196245 7.29153226,20.1506414 C7.42782258,20.2023362 7.58508065,20.1506414 7.61653226,20.0472517 C7.64798387,19.9438621 7.5483871,19.824964 7.39112903,19.7784387 C7.25483871,19.7422523 7.10282258,19.7939471 7.06612903,19.8973367 Z M9.38306452,19.8094555 C9.23104839,19.8456419 9.12620968,19.9438621 9.14193548,20.0627602 C9.15766129,20.1661498 9.29395161,20.2333531 9.45120968,20.1971667 C9.60322581,20.1609803 9.70806452,20.0627602 9.69233871,19.9593705 C9.6766129,19.8611504 9.53508065,19.7939471 9.38306452,19.8094555 Z M12.8322581,0 C5.56169355,0 0,5.44346469 0,12.6135364 C0,18.3464921 3.65887097,23.2523307 8.88508065,24.9789377 C9.55604839,25.0978358 9.79193548,24.6894467 9.79193548,24.3534303 C9.79193548,24.0329225 9.77620968,22.2649596 9.77620968,21.1793683 C9.77620968,21.1793683 6.10685484,21.9547906 5.33629032,19.6388626 C5.33629032,19.6388626 4.73870968,18.1345433 3.87903226,17.7468322 C3.87903226,17.7468322 2.67862903,16.9352235 3.96290323,16.9507319 C3.96290323,16.9507319 5.26814516,17.0541216 5.98629032,18.2844583 C7.13427419,20.2798784 9.05806452,19.7060659 9.80766129,19.3648801 C9.92822581,18.5377629 10.2689516,17.9639504 10.646371,17.6227646 C7.71612903,17.3022567 4.75967742,16.8835287 4.75967742,11.9104868 C4.75967742,10.4888793 5.15806452,9.77549072 5.99677419,8.86566186 C5.86048387,8.52964553 5.41491935,7.14422431 6.13306452,5.35558349 C7.22862903,5.01956715 9.75,6.75134367 9.75,6.75134367 C10.7983871,6.46185267 11.9254032,6.31193769 13.0419355,6.31193769 C14.1584677,6.31193769 15.2854839,6.46185267 16.333871,6.75134367 C16.333871,6.75134367 18.8552419,5.01439767 19.9508065,5.35558349 C20.6689516,7.1493938 20.2233871,8.52964553 20.0870968,8.86566186 C20.9258065,9.7806602 21.4395161,10.4940487 21.4395161,11.9104868 C21.4395161,16.8990371 18.3520161,17.2970872 15.4217742,17.6227646 C15.9040323,18.0311537 16.3129032,18.806576 16.3129032,20.0214043 C16.3129032,21.7635198 16.2971774,23.9191938 16.2971774,24.3430914 C16.2971774,24.6791077 16.5383065,25.0874968 17.2040323,24.9685987 C22.4459677,23.2523307 26,18.3464921 26,12.6135364 C26,5.44346469 20.1028226,0 12.8322581,0 Z M5.09516129,17.8295439 C5.02701613,17.8812387 5.04274194,18.0001368 5.13185484,18.098357 C5.21572581,18.1810687 5.33629032,18.2172551 5.40443548,18.1500518 C5.47258065,18.098357 5.45685484,17.9794589 5.36774194,17.8812387 C5.28387097,17.798527 5.16330645,17.7623406 5.09516129,17.8295439 Z M4.52903226,17.4108158 C4.49233871,17.4780191 4.54475806,17.5607308 4.64959677,17.6124256 C4.73346774,17.6641205 4.83830645,17.648612 4.875,17.5762393 C4.91169355,17.509036 4.85927419,17.4263243 4.75443548,17.3746295 C4.64959677,17.3436126 4.56572581,17.359121 4.52903226,17.4108158 Z M6.22741935,19.2511515 C6.14354839,19.3183547 6.175,19.4734392 6.29556452,19.5716594 C6.41612903,19.6905575 6.56814516,19.7060659 6.63629032,19.6233542 C6.70443548,19.5561509 6.67298387,19.4010665 6.56814516,19.3028463 C6.45282258,19.1839482 6.29556452,19.1684398 6.22741935,19.2511515 Z M5.62983871,18.4912376 C5.54596774,18.5429324 5.54596774,18.677339 5.62983871,18.796237 C5.71370968,18.9151351 5.85524194,18.96683 5.9233871,18.9151351 C6.00725806,18.8479319 6.00725806,18.7135253 5.9233871,18.5946272 C5.85,18.4757292 5.71370968,18.4240343 5.62983871,18.4912376 Z" id="path-github-1" />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export default GithubIcon