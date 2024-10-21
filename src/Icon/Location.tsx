import React from "react";

export default function Location() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36px"
        height="36px"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="0" fill="currentColor">
          <animate
            fill="freeze"
            attributeName="r"
            begin="0.525s"
            dur="0.15s"
            values="0;4"
          />
        </circle>
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path
            stroke-dasharray="56"
            stroke-dashoffset="56"
            d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8Z"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.45s"
              values="56;0"
            />
          </path>
          <path
            stroke-dasharray="4"
            stroke-dashoffset="4"
            d="M12 4v0M20 12h0M12 20v0M4 12h0"
            opacity="0"
          >
            <animate
              fill="freeze"
              attributeName="d"
              begin="0.75s"
              dur="0.15s"
              values="M12 4v0M20 12h0M12 20v0M4 12h0;M12 4v-2M20 12h2M12 20v2M4 12h-2"
            />
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.75s"
              dur="0.15s"
              values="4;0"
            />
            <set fill="freeze" attributeName="opacity" begin="0.75s" to="1" />
            <animateTransform
              attributeName="transform"
              dur="22.5s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </path>
        </g>
      </svg>
    </div>
  );
}
