import { SVGProps } from "react";

const IconStopMic = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <rect x="9" y="9" width="6" height="6"></rect>
    </svg>
  );
};

export default IconStopMic;