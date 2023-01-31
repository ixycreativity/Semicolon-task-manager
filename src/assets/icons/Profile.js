import * as React from "react";
const SvgProfile = (props) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.995 25.291c-7.189 0-13.329 1.133-13.329 5.667 0 4.535 6.102 5.708 13.329 5.708 7.188 0 13.328-1.132 13.328-5.667s-6.1-5.708-13.328-5.708Z"
      fill="#3754DB"
    />
    <path
      opacity={0.4}
      d="M19.995 20.973a8.789 8.789 0 0 0 8.82-8.82 8.789 8.789 0 0 0-8.82-8.82 8.79 8.79 0 0 0-8.82 8.82 8.79 8.79 0 0 0 8.82 8.82Z"
      fill="#3754DB"
    />
  </svg>
);
export default SvgProfile;
