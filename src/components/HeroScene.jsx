function Sparkle({ className = "" }) {
  return (
    <svg
      className={className}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12.5 0C12.5 8.5 8.5 12.5 0 12.5C8.5 12.5 12.5 16.5 12.5 25C12.5 16.5 16.5 12.5 25 12.5C16.5 12.5 12.5 8.5 12.5 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function HeroScene() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[510px] select-none"
      role="img"
      aria-label="A sculptural purple orbit floating above a code editor, connecting design and engineering"
    >
      <div className="absolute inset-[3%] overflow-hidden rounded-[36px] border border-[#e4dfee] bg-[#eeeaf5]">
        <svg
          className="absolute inset-0 size-full opacity-40"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="38"
              height="38"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 38 0 L 0 0 0 38"
                fill="none"
                stroke="#d6cee5"
                strokeWidth=".65"
              />
            </pattern>
            <radialGradient id="hero-glow">
              <stop offset="0" stopColor="#fff" stopOpacity=".95" />
              <stop offset="1" stopColor="#eeeaf5" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
          <rect width="100%" height="100%" fill="url(#hero-glow)" />
        </svg>
        <div className="absolute left-7 top-6 flex items-center gap-2 text-[9px] font-medium uppercase tracking-[.19em] text-[#93879f]">
          <span className="size-1.5 rounded-full bg-[#a392b8]" /> A little
          logic. A lot of possibility.
        </div>
        <div className="absolute bottom-5 left-7 font-mono text-[9px] tracking-[.12em] text-[#998ba9]">
          DESIGNED TO MAKE A DIFFERENCE
        </div>
      </div>

      <div className="absolute inset-x-[8%] top-[3%] h-[72%] motion-safe:animate-float">
        <svg
          className="size-full overflow-visible"
          viewBox="0 0 420 350"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="orbit-main"
              x1="110"
              y1="60"
              x2="308"
              y2="257"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#d4c4ff" />
              <stop offset=".2" stopColor="#b79aef" />
              <stop offset=".45" stopColor="#8a62d0" />
              <stop offset=".72" stopColor="#64409d" />
              <stop offset="1" stopColor="#392458" />
            </linearGradient>
            <linearGradient
              id="orbit-inner"
              x1="179"
              y1="90"
              x2="235"
              y2="271"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7652b4" />
              <stop offset=".3" stopColor="#a58ad5" />
              <stop offset=".75" stopColor="#e3d6ff" />
              <stop offset="1" stopColor="#bba1e8" />
            </linearGradient>
            <linearGradient
              id="orbit-edge"
              x1="126"
              y1="64"
              x2="284"
              y2="232"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f2eaff" />
              <stop offset=".5" stopColor="#cdb7ef" />
              <stop offset="1" stopColor="#8c6ab8" />
            </linearGradient>
            <linearGradient
              id="orbit-cross"
              x1="275"
              y1="60"
              x2="112"
              y2="240"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#d9c8f5" />
              <stop offset=".25" stopColor="#bea2ec" />
              <stop offset=".65" stopColor="#9271bf" />
              <stop offset="1" stopColor="#67448f" />
            </linearGradient>
            <radialGradient id="orbit-shadow">
              <stop stopColor="#7c579e" stopOpacity=".27" />
              <stop offset="1" stopColor="#7c579e" stopOpacity="0" />
            </radialGradient>
            <filter
              id="orbit-depth"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="4"
                dy="12"
                stdDeviation="10"
                floodColor="#67408e"
                floodOpacity=".2"
              />
            </filter>
          </defs>
          <ellipse
            cx="215"
            cy="297"
            rx="126"
            ry="23"
            fill="url(#orbit-shadow)"
          />
          <ellipse
            cx="214"
            cy="163"
            rx="160"
            ry="112"
            transform="rotate(-26 214 163)"
            stroke="#c5b7d9"
            strokeWidth=".7"
            strokeDasharray="3 5"
          />
          <g filter="url(#orbit-depth)">
            <ellipse
              cx="212"
              cy="158"
              rx="112"
              ry="56"
              transform="rotate(-47 212 158)"
              stroke="url(#orbit-cross)"
              strokeWidth="35"
            />
            <ellipse
              cx="212"
              cy="158"
              rx="112"
              ry="56"
              transform="rotate(44 212 158)"
              stroke="url(#orbit-main)"
              strokeWidth="46"
            />
            <ellipse
              cx="212"
              cy="154"
              rx="112"
              ry="56"
              transform="rotate(44 212 154)"
              stroke="url(#orbit-inner)"
              strokeWidth="27"
            />
            <ellipse
              cx="212"
              cy="148"
              rx="112"
              ry="56"
              transform="rotate(44 212 148)"
              stroke="url(#orbit-edge)"
              strokeWidth="4"
              opacity=".8"
            />
            <path
              d="M144.2 230.7C99.1 210.2 112.2 153.3 169.8 99.4C227.4 45.5 286.4 22.2 308.7 55.3"
              stroke="url(#orbit-cross)"
              strokeWidth="35"
              strokeLinecap="round"
            />
            <path
              d="M144.2 223.7C99.1 203.2 112.2 146.3 169.8 92.4C227.4 38.5 286.4 15.2 308.7 48.3"
              stroke="#e5d6fb"
              strokeOpacity=".55"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
          <circle cx="328" cy="201" r="6" fill="#c7b2e9" />
          <circle cx="81" cy="136" r="3.5" fill="#9d7ecc" />
        </svg>
      </div>

      <div className="absolute -left-[1%] top-[28%] flex -rotate-6 items-center gap-2.5 rounded-xl border border-[#e9e4ed] bg-[#fffefa] px-3.5 py-3 shadow-[0_8px_25px_-10px_#5a426e40] motion-safe:animate-float-delayed">
        <span className="grid size-7 place-items-center rounded-lg bg-[#f0eaf8] font-mono text-sm font-bold text-[#8460b8]">
          &lt;/&gt;
        </span>
        <span className="text-[11px] font-semibold tracking-tight text-[#42394d]">
          Built with intention.
        </span>
      </div>

      <div className="absolute bottom-[9%] left-[14%] right-[-1%] rotate-[-3deg] overflow-hidden rounded-2xl border border-white/15 bg-[#27232e] shadow-[0_20px_45px_-12px_#3f2b6260] transition-transform duration-500 hover:rotate-0">
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-3">
          <div className="flex gap-1.5">
            <span className="size-1.5 rounded-full bg-[#b77882]" />
            <span className="size-1.5 rounded-full bg-[#c7ae7e]" />
            <span className="size-1.5 rounded-full bg-[#8cae91]" />
          </div>
          <span className="font-mono text-[9px] tracking-wide text-[#a59bae]">
            a-little-about-me.js
          </span>
          <span className="font-mono text-[9px] text-[#a59bae]">JS</span>
        </div>
        <div className="space-y-1 px-5 py-5 font-mono text-[clamp(10px,2.5vw,12px)] leading-[1.7] sm:text-[12px]">
          <div>
            <span className="mr-5 text-[#645b6e]">1</span>
            <span className="text-[#c0a1e9]">const</span>{" "}
            <span className="text-[#ede8f4]">developer</span>{" "}
            <span className="text-[#afa2bb]">= {"{"}</span>
          </div>
          <div>
            <span className="mr-5 text-[#645b6e]">2</span>
            <span className="pl-4 text-[#d8cfe3]">focus:</span>{" "}
            <span className="text-[#bbd2a2]">'Meaningful experiences'</span>
            <span className="text-[#afa2bb]">,</span>
          </div>
          <div>
            <span className="mr-5 text-[#645b6e]">3</span>
            <span className="pl-4 text-[#d8cfe3]">mindset:</span>{" "}
            <span className="text-[#bbd2a2]">'Always building'</span>
            <span className="text-[#afa2bb]">,</span>
          </div>
          <div>
            <span className="mr-5 text-[#645b6e]">4</span>
            <span className="pl-4 text-[#d8cfe3]">possibilities:</span>{" "}
            <span className="text-[#e6b988]">Infinity</span>
          </div>
          <div>
            <span className="mr-5 text-[#645b6e]">5</span>
            <span className="text-[#afa2bb]">{"}"}</span>
            <span className="ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 bg-[#b993e3] motion-safe:animate-pulse" />
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/7 px-5 py-2 font-mono text-[8px] text-[#958a9f]">
          <span className="flex items-center gap-1.5">
            <span className="size-1 rounded-full bg-[#b5cd99]" /> All systems
            creative
          </span>
          <span>UTF-8 · JavaScript</span>
        </div>
      </div>
      <Sparkle className="absolute right-[8%] top-[16%] text-[#9878be]" />
      <Sparkle className="absolute bottom-[6%] left-[4%] size-5 text-[#a993bd]" />
      <div className="absolute right-[-3%] top-[45%] flex rotate-6 items-center gap-2 rounded-full border border-[#e2d9eb] bg-[#fffefa] px-3 py-2 text-[10px] font-medium text-[#736080] shadow-sm">
        <span className="size-1.5 rounded-full bg-[#9aab7d]" /> Always curious
      </div>
    </div>
  );
}
