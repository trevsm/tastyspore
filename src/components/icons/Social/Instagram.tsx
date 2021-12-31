import React from "react"

function Icon({ color, width }: { color: string; width: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 100 99.98"
      width={width}
      height={width}
    >
      <g data-name="Layer 2">
        <g fill={color} data-name="Layer 1-2">
          <path d="M99.87 34.8c-.08-5.12-.15-10.26-1.73-15.29C94.93 9.35 85.29 1.31 74.71.41 66.54-.29 58.34.15 50 0c-7.21.15-14.57-.18-21.93.23C17.07.85 8.76 5.67 3.45 15.5c-3 5.56-3 11.68-3.21 17.66C-.1 42.9 0 52.66.07 62.41c0 5.34 0 10.75 1.29 15.94C4 89.22 10.84 96.09 21.67 98.79c5.15 1.28 10.46 1.13 15.71 1.16 11.55 0 23.1.17 34.65-.27 11.81-.45 21.59-7.19 25.69-17.93 2.08-5.43 2.06-11.11 2.15-16.75q.26-15.1 0-30.2zm-9.49 39.65a17.66 17.66 0 01-15.38 16c-8.7 1.15-17.46 1-26.2 1-7 0-14-.08-20.93-.57-5.08-.36-9.82-1.74-13.47-5.74a18.23 18.23 0 01-4.5-8.88 68.69 68.69 0 01-1-13.12q-.15-13.1 0-26.2a89.19 89.19 0 01.74-12c1.28-8.73 7.71-14.77 16.9-15.56 14.51-1.25 29-.79 43.56-.31 3.59.12 7.26.49 10.53 2.22 5.76 3 8.91 7.89 9.73 14.37 1 8.12.84 16.26.7 24.41.13 8.1.27 16.25-.68 24.38z"></path>
          <path d="M82.56 23.11a5.88 5.88 0 01-5.76 6h-.15A6 6 0 0170.78 23a5.92 5.92 0 016-5.69 5.69 5.69 0 015.78 5.6zm-32.62 1.23a25.66 25.66 0 00-25.75 25.59 25.67 25.67 0 0025.59 25.75 25.67 25.67 0 0025.75-25.59v-.75a25.62 25.62 0 00-25.59-25zM50 67a17 17 0 01-16.87-16.91 16.81 16.81 0 0116.35-17.26 16.81 16.81 0 0117.26 16.34v.82A16.91 16.91 0 0150.05 67z"></path>
        </g>
      </g>
    </svg>
  )
}

export default Icon
