import React from "react"

function Icon({ color, width }: { color: string; width: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 128 128"
      fill={color}
    >
      <path
        fillRule="evenodd"
        d="M30.371 58.25L86.324 2.297c3.258-3.066 8.238-3.066 11.305 0s3.066 8.047 0 11.305L47.234 63.997l50.395 50.395c3.066 3.066 3.066 8.238 0 11.305-3.066 3.066-8.047 3.066-11.305 0L30.371 69.552c-3.066-3.066-3.066-8.047 0-11.305z"
      ></path>
    </svg>
  )
}

export default Icon
