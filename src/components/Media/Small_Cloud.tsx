import React from "react"

function Icon({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-name="Layer 1"
      viewBox="0 0 153 81"
    >
      <g data-name="Layer 2">
        <g data-name="Layer 1-2">
          <image
            width="153"
            height="81"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAABRCAYAAADB5wRjAAAACXBIWXMAAAsSAAALEgHS3X78AAAMgklEQVR4Xu2da1fbyBJFt3gTIA4JgbyTm9z7///UrLkzSSaZyYuEl+ZD9XGX2y1LNraRoc9aWgJbFhbaOlVd3WpVdV1TVLRIbbRtsOqqqqrSjxM3NNUAdbny5qrqNv4/HVhrGFxaa0lVu+XKrQtwc9CtgizApWUdc+oNYDP87mGTPFyXwDlwEZZLvV9gm123BrIA2BoG0yawBewAu2G9jQEn0CQBdgH8An4Cp2F9hkFXYLuGVh4y515yrm3gHrAHDIAD4D4G21bYTp+Ri11iQJ0CX4CvYf0d+MEobFcFtOm00pA599rAANrFoDoEHgKPgUdhOcAcTW4mycV+YnB9Aj6G5TPwN/ANg+0XBtsVxdU6ayVbl8691rDQuAPsY871GHgSlqfh98Pw/hZ2zGm4vMDc6hsG1kfgD+BP4D3wV3j9C+Z2Z8BlVVWlYdBBK+dkSXjcwkLjAHOrE+A58BID7AQD7D4G4ibNOdk55mZfMPf6gEH2O/D/sLzHYPuGudolxdFatYpOJsC2sbzrIRGu58CrsD4O7+1jYVQtzKbWpVqWA2K4PcLg1X4UbrWPnyzZ0aas+0k3Wv9bKchcDraFAXaEAfUaeIM52DMMsEHYRmDkAJM8aDuYO+5jDqjlHuMNB1gwaAlUOv4qWZpUu+Wqqiq59kK+a5NWBjIH2CZ2wh9igL0F/otB9gwDb8BoazJXH0tVExsRvgSiRfmcbzRIcwUtqfetuWWd2IpuO64hXGTqfwG4pYT6lYDM/dM3sBM+wELkawywd5iLHWGtyF3a3SuVtquJJ9cXc32NLbfPa4HmHCsH1CYR/C0sVUi/UyoBNrH+V1XVwksyKwEZEbBtLHQ9Bl4A/yGGyWNigj/pn9+m1EX8um1/U4OWuJaHapvxgvJuWPaIoLXlmWn97x9i/e8XcF5V1UJLMr2HLAmTSvSfYGApBzsiFlx9Yn4d6fNpySNV7dY1rtXZ+AmycPkQrZxwL6wPwlo/+xyxKYSn9b+/wvKBJZdkeg1ZJg87xAB7hYXK55ireQebB2CS9rOO7T+nFLIa+FVVVaMzuOPycKmX4j6WDjwEHoRFZRiBpwaNd7JUNeP1vw9YSeYPGkoyiwCt15ARr/Jt7Ap+jLnXGwy0E+yELAIwqQ00n1yrU/0KqNN8x7mXLhx1ge0TYXqMObNKMIOw3COGTTVEfPKfSt/L1/9OiGWZpZVkegtZQ2vyKQbXK8zRDsN7uSLrPNUEmk+uz4ndThfEE1zDCGAqIu9i7nSInfRjDIInxO6wAdG9lKMp4e/aulTLUg659JJMbyFj3MUeYZA9I1by91g8YFIONH8Sf2LJ9CkG2wWxNqXP63j2se9/jB2TPy51g90nwqURJAJrUivXy4PmGw5LLcn0ErJw1euK3ycC9iKs1eGtf/6iAZM8aIJFJYLvxBacWm7DIULJZ44wqF4Sc8snjLqX6nxNrtX1mGti/jepJOO379yA6aLeQebC5Ab2j1ant654tSR3mK4ONi/pb21g3+EA+04/MMC+Yon0TwxAnbRNt+0LLK98h0EmwA6IYUwO3bV80iTveJNKMlM3YLqqd5AF+TCprqMXLDcPmyQPmi6EY8zNNBZN49DATtg9DKQXWC/F/7A63zNGhyKlta95HZ//zrl9dm7ATKs+Qpa6mDq/VQ9TmGxqui9LqeM+wED7wmhZQDnPADuGdxhgbzHgjogtvbZk/rry4b6pAXOGubAaMT7kz6ReQZZpUerEqcXlC6435WJeFeO54w+ik51jJ7MK773GusHeMtoN5nPLRR9TDrSaCNgP7AJRyFf3UzWrm/UKMuJJU4KsMWLpwMObdjGvipifDbAT8z2sr7ALYw27WN4w6mAKkcvOLT1o/n+t7qdPYfkaXlMpZrUhS1xMNaSH2ME/wJrzfQMM8mHzCeYKcrB1DLIXWOi/ScAkn6P5Boy6oD5igze/E7udZnKzG4csqYKn4/SPMNAUJm8y2Z+kNGweYVf9FnbS1oj3HOTyyps6njR0qh55gl0UHzDQFPpncrMbgSyABbGJvk50MHWtaJy+r4n1zcW80rC5huWVp+E9DYJUgXVZOVibfARRHqyS0XssbF7LzZYKmXMtXfkqDG4THUzDePpUsugif7IgusN5eE+Ve38zS1+OxTuxRrocMyc3WwpkGbhyw1rUj/eEWEt6Fl7zLco+y4Om47wK7/nKfd8uFp2bhbjZQiFL8i3985uGtejGDYVJ9eX5ULkK8lX1deJVXyVL37QwN5s7ZA351gYxqdf9kemwFt0VpNbkIbGbpS91sa4SSOmJ6PP3X5ibzQ2ylnxrh+hcgssXWXXzxwERrF2a569YFa3ad57kZu8ZdTOlAa26NmQd860DDKIjYsvxmPFhLTuM3iThu1mKFq/Uzfwd+X9i9TN/Y/NlfjejuhZkroDq4crlW35gnkA7ZPKwFiX5BbDlyruZxr35aPMZC5vnVceO85kgc+6lsNg2jPgR8a5sjc7cY/7DWoquL+9m6nmRQTzEegK+MsV4s6khc+7lk3lV6DVlQFO+tY+BpZGZixrWUnQ96RwrN/M3tuwzZWG8M2RJOWITA0UtRV+hbxpGnMu3Clz9lDcSdaArQmlY0iZw1iVkdoIsCY/KuwY0z6TTNoy45Fv9l863INP51mCFfwj3AtASMjtBxugf7DKTziKGERctV2nUOsAAGxD7XzuFzFbIXA6m+Kzh0K+BN4zPpKOYXfKt1VdqLgMMND9UvDVkToTMAaa6ybxn0inqt3yKJMiUCnUOmW1OVjE6fGXeM+kU9VtzCZmNkAUX80W5R5iLvSGGyWPmM5NOUX/lQ+Y9YpHdj4tbmxQys5AltTANKU5bkbr/cZ4z6RT1T2lVQf3Pil5q2DWq6U1Pr7/38RWWgz0mJn8FsNstbzh+oIPKU62DSccgczUxJfsaSPiSWKZQkl8AuxvybqbhWirKtt7c0+RkPhfTpHNPGQes5GB3Q2kDYI/RWqjysiwLOch8LnafOPPMCQZcX29NK1qsPBfqAVDIlOE0fnCopC6maQL80Bx/O30B7O7I52VqABwwOuNjY1RL6fMJv0KlxoANWI27hooWI5+XaXBEp7xsEmR7xJ531UW2KIDdVc2clw0hS2pjfniHH0NUkv27rZnysvRFn49pIKLmF+3UhVB0azVzXuYhS5N+f1t96TYqghnzshSy3A78yIoC2N1WW162TiYvW4ORfMz3UXWywqI7J4VM38XkOWl1MiX96ghNQ2XR3Vaal+1ijOTGEQ4lcCpiuJQV6q6idIRrUZFCpgxJOVk2b88l/hvEG3V1Z1EJlUVS6mYyJA25H4t4KWTagXain4uLFUlp/q6Qqag3VpRNqUtBK4AV5ZTm72phZmupJZkvmlZT5+8FsqJZlObvuZkBhiqQFc0in5cJNA9YgaxoLvL5ewraSDUihUxzgepBTldhmWqO0KI7I+9oyscm1skEkp4SdhYWPYl2+NQwCnB3Td58ZECeBzDAtKwBlcoYG8mO/FNovxEfErpDfMJGWtrw1FbJuqjfqpN17n2/eMj0pGI91xNGmRgyIMi0kwviQ9E/YpPR7ob37jP6sAMRmwKX/UMtKnDOrjZQckrh8Uu6TfoMTEW5U2yi4o/EKT7PyDy60DuZHsz+HZuA9jcMqgvM1TQv1Q6j44c8bGOWyWRwrgvnXVYXUHJK4UlDn4dW2yi6KYXSk/A+Y0b0GzZx8Rfi89dHIavruq6qKoVsM/z+d9iRnzUx7UbwTVk/bdRYEugkmGaB866rKyg5pfDo4akXjOZYdbLND8y9TomPwv6EsfIBg+xzeP8Sw6qGfE72E5sSqA4f+AT8jgGmefb9kGyBtkXsZkjnJ8tJgE0LZ1F3UHLKwZN7Sq9/kq+g+k6ETa99Iz4S20+/PvwOlZ+IpaoqhT31S+0yOmbI/+7zMz/sY+wOFsYlp1LTdxo4i7qDklMOnh/hdw9p7m/osdFnYX0a1v71S+CqruvhwySqdLafZJTsBtGlNPxHjtUUKnOw5IARzH4kbhucRaYuoOTUBE8KqLbV3/FuKcf0iw/ZwzApjUEGQ9Aghi2FMOVNaetSrwvCLuPQujhZcbNxTQNKTik8SubTupcPm751eZUs2m4MLikL2cgGETifqKctwVlal94xp4GzqDsoOaXwTGo01Mkihxxu1za9OnSALFUC3fDlCUuTPKDTwFk0HSg5pfD4pWn7TkDlNDVkk9QA4CTNAmeRaVpQcroWPF01V8hm1QxwFkUtBZTrqBeQFd1u/Qs5KQ+fbptaqgAAAABJRU5ErkJggg=="
            style={{ isolation: "isolate" }}
            opacity="0.1"
          ></image>
          <path
            fill="#fff"
            d="M145.18 68.68S139 12.14 115.11 13.3s-27 15.54-27 15.54S75.38 4 60.51 5.17 37.92 28.84 37.92 28.84L19.57 36.9C7.22 42.33 3.12 61.34 6.23 68.68s130.65 6.59 138.95 0z"
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Icon