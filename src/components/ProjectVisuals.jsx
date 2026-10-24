import { useId } from "react";

export function OrbitVisual() {
  const id = useId().replaceAll(":", "");
  return (
    <div
      className="relative aspect-[1.52] w-full overflow-hidden rounded-2xl bg-[#252138]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 600 395" className="h-full w-full" fill="none">
        <defs>
          <radialGradient id={`${id}-glow`} cx=".72" cy=".12" r=".85">
            <stop stopColor="#7660b5" stopOpacity=".62" />
            <stop offset="1" stopColor="#211e30" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id={`${id}-panel`}
            x1="100"
            y1="30"
            x2="500"
            y2="340"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#24222f" />
            <stop offset="1" stopColor="#17161f" />
          </linearGradient>
          <filter
            id={`${id}-shadow`}
            x="-30%"
            y="-30%"
            width="160%"
            height="180%"
          >
            <feDropShadow dx="0" dy="20" stdDeviation="17" floodOpacity=".35" />
          </filter>
        </defs>
        <rect width="600" height="395" fill={`url(#${id}-glow)`} />
        <circle cx="442" cy="65" r="179" stroke="#b5a2ef" strokeOpacity=".09" />
        <circle cx="442" cy="65" r="222" stroke="#b5a2ef" strokeOpacity=".07" />
        <g transform="rotate(-3 300 200)" filter={`url(#${id}-shadow)`}>
          <rect
            x="40"
            y="55"
            width="520"
            height="300"
            rx="10"
            fill={`url(#${id}-panel)`}
            stroke="#a99acb"
            strokeOpacity=".2"
          />
          <path d="M40 85H560" stroke="#ffffff" strokeOpacity=".07" />
          <circle cx="55" cy="70" r="3" fill="#b3a6c9" fillOpacity=".65" />
          <circle cx="66" cy="70" r="3" fill="#b3a6c9" fillOpacity=".35" />
          <circle cx="77" cy="70" r="3" fill="#b3a6c9" fillOpacity=".2" />
          <rect
            x="250"
            y="63"
            width="101"
            height="13"
            rx="4"
            fill="#ffffff"
            fillOpacity=".035"
          />
          <text
            x="281"
            y="72"
            fill="#9c96ad"
            fontSize="6"
            fontFamily="sans-serif"
          >
            app.orbit.so
          </text>
          <path d="M151 85V355" stroke="#ffffff" strokeOpacity=".06" />
          <circle cx="62" cy="108" r="8" stroke="#af93ff" strokeWidth="2" />
          <ellipse
            cx="62"
            cy="108"
            rx="12"
            ry="4"
            stroke="#af93ff"
            transform="rotate(-35 62 108)"
          />
          <text
            x="80"
            y="113"
            fill="#f4efff"
            fontSize="16"
            fontWeight="600"
            fontFamily="sans-serif"
            letterSpacing="-.8"
          >
            orbit
          </text>
          <text
            x="56"
            y="143"
            fill="#666174"
            fontSize="6"
            fontFamily="sans-serif"
            letterSpacing="1.2"
          >
            WORKSPACE
          </text>
          {[
            ["Overview", 160],
            ["My tasks", 184],
            ["Projects", 208],
            ["Messages", 232],
            ["Analytics", 256],
          ].map(([label, y], index) => (
            <g key={label}>
              {index === 2 && (
                <rect
                  x="49"
                  y={y - 13}
                  width="94"
                  height="23"
                  rx="4"
                  fill="#b598ff"
                  fillOpacity=".12"
                />
              )}
              <rect
                x="58"
                y={y - 6}
                width="7"
                height="7"
                rx="2"
                stroke={index === 2 ? "#b89aff" : "#716b83"}
                strokeWidth=".8"
              />
              <text
                x="75"
                y={y}
                fill={index === 2 ? "#d4bfff" : "#9790a8"}
                fontSize="8"
                fontFamily="sans-serif"
              >
                {label}
              </text>
            </g>
          ))}
          <circle cx="62" cy="329" r="9" fill="#b8a5d0" />
          <text
            x="58"
            y="332"
            fill="#292331"
            fontSize="7"
            fontFamily="sans-serif"
            fontWeight="600"
          >
            MK
          </text>
          <text
            x="78"
            y="328"
            fill="#d6d0df"
            fontSize="7"
            fontFamily="sans-serif"
          >
            MekahTheDev's workspace
          </text>
          <text
            x="78"
            y="338"
            fill="#716a81"
            fontSize="6"
            fontFamily="sans-serif"
          >
            Personal account
          </text>
          <text
            x="171"
            y="109"
            fill="#8d859f"
            fontSize="7"
            fontFamily="sans-serif"
          >
            Workspace / Projects
          </text>
          <text
            x="171"
            y="136"
            fill="#f4f1fa"
            fontSize="19"
            fontWeight="600"
            fontFamily="sans-serif"
            letterSpacing="-.7"
          >
            Make room for great work.
          </text>
          <text
            x="171"
            y="151"
            fill="#847c96"
            fontSize="7"
            fontFamily="sans-serif"
          >
            Your ideas. Your team. All moving in the same direction.
          </text>
          <rect x="463" y="119" width="76" height="24" rx="5" fill="#bba1f1" />
          <text
            x="477"
            y="134"
            fill="#292035"
            fontSize="8"
            fontFamily="sans-serif"
            fontWeight="600"
          >
            + New project
          </text>
          {[
            ["Active projects", "12", "#bba1f1"],
            ["Tasks completed", "86", "#9bc9ac"],
            ["Team members", "08", "#dac091"],
          ].map(([label, count, color], index) => (
            <g key={label} transform={`translate(${171 + index * 125}, 170)`}>
              <rect
                width="117"
                height="59"
                rx="6"
                fill="#ffffff"
                fillOpacity=".025"
                stroke="#ffffff"
                strokeOpacity=".07"
              />
              <text
                x="11"
                y="18"
                fill="#8d859e"
                fontSize="7"
                fontFamily="sans-serif"
              >
                {label}
              </text>
              <text
                x="11"
                y="45"
                fill="#eeebf5"
                fontSize="22"
                fontFamily="sans-serif"
                fontWeight="500"
              >
                {count}
              </text>
              <path
                d="M66 44L73 39L81 42L89 31L98 34L105 24"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
          ))}
          <text
            x="171"
            y="249"
            fill="#e4deed"
            fontSize="9"
            fontFamily="sans-serif"
            fontWeight="500"
          >
            Project board
          </text>
          <text
            x="486"
            y="249"
            fill="#857b98"
            fontSize="7"
            fontFamily="sans-serif"
          >
            View all ↗
          </text>
          {[
            {
              title: "To do",
              tag: "DESIGN",
              color: "#c6a7ec",
              task: "Explore a fresh direction",
              count: "4",
            },
            {
              title: "In progress",
              tag: "DEVELOPMENT",
              color: "#d2b07e",
              task: "Build something better",
              count: "3",
            },
            {
              title: "Completed",
              tag: "RESEARCH",
              color: "#8bbba2",
              task: "Understand the problem",
              count: "8",
            },
          ].map((column, index) => (
            <g
              key={column.title}
              transform={`translate(${171 + index * 125}, 264)`}
            >
              <circle cx="3" cy="0" r="2" fill={column.color} />
              <text
                x="10"
                y="3"
                fill="#a59bb5"
                fontSize="7"
                fontFamily="sans-serif"
              >
                {column.title}
              </text>
              <text
                x="107"
                y="3"
                fill="#766b87"
                fontSize="7"
                fontFamily="sans-serif"
              >
                {column.count}
              </text>
              <rect
                y="13"
                width="117"
                height="58"
                rx="5"
                fill="#2c2837"
                stroke="#ffffff"
                strokeOpacity=".045"
              />
              <rect
                x="9"
                y="22"
                width="57"
                height="11"
                rx="3"
                fill={column.color}
                fillOpacity=".1"
              />
              <text
                x="13"
                y="29.5"
                fill={column.color}
                fontSize="4.8"
                fontFamily="sans-serif"
                letterSpacing=".4"
              >
                {column.tag}
              </text>
              <text
                x="9"
                y="46"
                fill="#d3c9e1"
                fontSize="6.5"
                fontFamily="sans-serif"
              >
                {column.task}
              </text>
              <circle
                cx="14"
                cy="59"
                r="5"
                fill={column.color}
                fillOpacity=".7"
              />
              <circle cx="22" cy="59" r="5" fill="#9c8db2" stroke="#2c2837" />
              <text
                x="94"
                y="61"
                fill="#82778f"
                fontSize="5.5"
                fontFamily="sans-serif"
              >
                •••
              </text>
            </g>
          ))}
        </g>
        <rect x="418" y="27" width="140" height="26" rx="13" fill="#ded3f6" />
        <circle cx="432" cy="40" r="3" fill="#786397" />
        <text
          x="442"
          y="43"
          fill="#514263"
          fontSize="8"
          fontFamily="sans-serif"
          letterSpacing=".2"
        >
          A little less busywork.
        </text>
      </svg>
    </div>
  );
}

export function FormaVisual() {
  const id = useId().replaceAll(":", "");
  return (
    <div
      className="relative aspect-[1.52] w-full overflow-hidden rounded-2xl bg-[#e0e7dc]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 600 395" className="h-full w-full" fill="none">
        <defs>
          <linearGradient
            id={`${id}-sage`}
            x1="0"
            y1="0"
            x2="600"
            y2="395"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#d7e2d4" />
            <stop offset="1" stopColor="#edf0e6" />
          </linearGradient>
          <linearGradient
            id={`${id}-wood`}
            x1="360"
            y1="150"
            x2="476"
            y2="255"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#d0ad80" />
            <stop offset=".5" stopColor="#a4845e" />
            <stop offset="1" stopColor="#745a3d" />
          </linearGradient>
          <linearGradient
            id={`${id}-chair`}
            x1="373"
            y1="147"
            x2="457"
            y2="246"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f0e5ce" />
            <stop offset="1" stopColor="#b3a78b" />
          </linearGradient>
          <linearGradient
            id={`${id}-wall`}
            x1="331"
            y1="140"
            x2="516"
            y2="270"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e8e4d9" />
            <stop offset="1" stopColor="#d2d1bf" />
          </linearGradient>
          <filter
            id={`${id}-shadow`}
            x="-30%"
            y="-30%"
            width="160%"
            height="180%"
          >
            <feDropShadow
              dx="0"
              dy="18"
              stdDeviation="17"
              floodColor="#4c5b42"
              floodOpacity=".19"
            />
          </filter>
          <filter id={`${id}-blur`}>
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        <rect width="600" height="395" fill={`url(#${id}-sage)`} />
        <circle cx="58" cy="301" r="175" stroke="#6d8669" strokeOpacity=".08" />
        <circle cx="58" cy="301" r="207" stroke="#6d8669" strokeOpacity=".07" />
        <g transform="rotate(3 300 200)" filter={`url(#${id}-shadow)`}>
          <rect x="43" y="48" width="514" height="306" rx="8" fill="#f8f7f1" />
          <path d="M43 74H557" stroke="#e8e8df" />
          <circle cx="57" cy="61" r="2.5" fill="#b8bfae" />
          <circle cx="66" cy="61" r="2.5" fill="#ced3c5" />
          <circle cx="75" cy="61" r="2.5" fill="#dce0d5" />
          <text
            x="282"
            y="64"
            fill="#919787"
            fontSize="6"
            fontFamily="sans-serif"
          >
            forma.studio
          </text>
          <text
            x="65"
            y="103"
            fill="#424d39"
            fontSize="23"
            fontFamily="Georgia, serif"
            letterSpacing="-1.6"
          >
            forma.
          </text>
          <text
            x="337"
            y="98"
            fill="#7a8171"
            fontSize="7"
            fontFamily="sans-serif"
          >
            Collection
          </text>
          <text
            x="400"
            y="98"
            fill="#7a8171"
            fontSize="7"
            fontFamily="sans-serif"
          >
            Our story
          </text>
          <text
            x="457"
            y="98"
            fill="#7a8171"
            fontSize="7"
            fontFamily="sans-serif"
          >
            Journal
          </text>
          <path
            d="M526 92H533L535 100H524L526 92ZM527 92V90C527 87 532 87 532 90V92"
            stroke="#606b55"
            strokeWidth=".9"
          />
          <path d="M64 116H536" stroke="#e4e6db" />
          <text
            x="68"
            y="146"
            fill="#949b83"
            fontSize="5.8"
            fontFamily="sans-serif"
            letterSpacing="1.7"
          >
            CONSIDERED DESIGN. EVERYDAY LIVING.
          </text>
          <text
            x="65"
            y="178"
            fill="#404c36"
            fontSize="29"
            fontFamily="Georgia, serif"
            letterSpacing="-1"
          >
            Objects for
          </text>
          <text
            x="65"
            y="210"
            fill="#404c36"
            fontSize="29"
            fontFamily="Georgia, serif"
            fontStyle="italic"
            letterSpacing="-1"
          >
            a slower life.
          </text>
          <text
            x="68"
            y="231"
            fill="#929783"
            fontSize="7"
            fontFamily="sans-serif"
          >
            Thoughtfully made. Beautifully simple.
          </text>
          <text
            x="68"
            y="242"
            fill="#929783"
            fontSize="7"
            fontFamily="sans-serif"
          >
            Furniture that feels like home.
          </text>
          <rect x="67" y="258" width="107" height="25" rx="1" fill="#677450" />
          <text
            x="78"
            y="273"
            fill="#f8f8f0"
            fontSize="6.5"
            fontFamily="sans-serif"
          >
            Explore the collection
          </text>
          <path
            d="M157 268L162 273L157 278M153 273H162"
            stroke="#f8f8f0"
            strokeWidth=".7"
          />
          <rect
            x="310"
            y="131"
            width="226"
            height="158"
            fill={`url(#${id}-wall)`}
          />
          <path d="M310 252H536V289H310Z" fill="#dad9cb" />
          <path d="M472 131V252" stroke="#c5c9b9" strokeWidth=".5" />
          <path d="M310 253L373 271H536" stroke="#d2d1c2" strokeWidth=".6" />
          <ellipse
            cx="415"
            cy="269"
            rx="62"
            ry="8"
            fill="#677258"
            fillOpacity=".2"
            filter={`url(#${id}-blur)`}
          />
          <path
            d="M379 218L372 268M440 219L452 269"
            stroke={`url(#${id}-wood)`}
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M391 222L397 261M430 222L425 260"
            stroke="#94764e"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M376 184L380 230M449 183L442 231"
            stroke={`url(#${id}-wood)`}
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M378 174Q378 157 394 155L431 153Q446 153 448 168L448 206Q431 213 381 209Z"
            fill={`url(#${id}-chair)`}
          />
          <path
            d="M381 166Q413 156 442 164"
            stroke="#fff9e7"
            strokeOpacity=".4"
            strokeWidth="1.2"
          />
          <path
            d="M378 208Q410 200 449 206L454 222Q416 234 376 225Z"
            fill="#cfc3aa"
          />
          <path d="M376 225Q418 231 454 222" stroke="#a69a80" strokeWidth="3" />
          <path
            d="M370 197Q377 193 387 197M439 193Q448 190 455 194"
            stroke={`url(#${id}-wood)`}
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path d="M490 165V265" stroke="#686e56" strokeWidth="2" />
          <ellipse cx="490" cy="266" rx="15" ry="2" fill="#6c715a" />
          <path
            d="M470 169L478 140H502L511 169Q490 177 470 169Z"
            fill="#f7f0db"
          />
          <ellipse cx="490" cy="168" rx="20" ry="4" fill="#d6d0b8" />
          <text
            x="318"
            y="281"
            fill="#757c65"
            fontSize="5"
            fontFamily="sans-serif"
            letterSpacing=".4"
          >
            THE EVERYDAY COLLECTION — 01
          </text>
          <path d="M65 305H536" stroke="#e3e5db" />
          <text
            x="68"
            y="328"
            fill="#626d54"
            fontSize="9"
            fontFamily="Georgia, serif"
            fontStyle="italic"
          >
            Less, but better.
          </text>
          <text
            x="251"
            y="327"
            fill="#9ca18e"
            fontSize="5.5"
            fontFamily="sans-serif"
            letterSpacing=".6"
          >
            NATURAL MATERIALS
          </text>
          <text
            x="370"
            y="327"
            fill="#9ca18e"
            fontSize="5.5"
            fontFamily="sans-serif"
            letterSpacing=".6"
          >
            TIMELESS BY DESIGN
          </text>
          <text
            x="484"
            y="327"
            fill="#9ca18e"
            fontSize="5.5"
            fontFamily="sans-serif"
            letterSpacing=".6"
          >
            MADE TO LAST
          </text>
        </g>
        <g transform="translate(49 325) rotate(-7)">
          <rect
            width="112"
            height="29"
            rx="2"
            fill="#f9faf5"
            stroke="#ccd5bf"
            strokeWidth=".6"
          />
          <path
            d="M13 15L16 18L22 11"
            stroke="#748263"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="30"
            y="17.5"
            fill="#647155"
            fontSize="7"
            fontFamily="sans-serif"
          >
            Made with intention.
          </text>
        </g>
      </svg>
    </div>
  );
}
