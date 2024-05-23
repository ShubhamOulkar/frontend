import * as React from "react";
const SVGComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 64 64"
    xmlSpace="preserve"
    {...props}
  >
    <path
      fill="currentColor"
      stroke="red"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M16 24h22M16 34h22M16 44h22M16 54h22"
    />
    <path
      fill="currentColor"
      stroke="green"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M12 24H8m4 10H8m4 10H8m4 10H8"
    />
    <path
      fill="none"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M14 8H1v55h44V8H32"
    />
    <path
      fill="blue"
      stroke="#000"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M27 5V1h-8v4h-4l-2 8h20l-2-8zm28-4v53l4 8 4-8V1zm0 10h8"
    />
  </svg>
);
export default SVGComponent;
