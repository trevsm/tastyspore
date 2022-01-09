import React from "react"

function Icon({ color, width }: { color: string; width: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="0 0 32 32"
      width={width}
      height={width}
    >
      <path
        fill={color}
        d="M26 16.978V25a3.003 3.003 0 01-3 3h-2a3.003 3.003 0 01-3-3v-2a1.001 1.001 0 00-1-1h-2a1.001 1.001 0 00-1 1v2a3.003 3.003 0 01-3 3H9a3.003 3.003 0 01-3-3v-8.022a2.981 2.981 0 011.158-2.368l8.228-6.4a1.001 1.001 0 011.228 0l8.228 6.4A2.982 2.982 0 0126 16.978zm3.608-2.772L17.772 5.143a3.001 3.001 0 00-3.661.01L2.423 14.21a1 1 0 001.225 1.582l11.688-9.057a1.002 1.002 0 011.22-.004l11.836 9.064a1 1 0 001.216-1.588z"
      ></path>
    </svg>
  )
}

export default Icon
