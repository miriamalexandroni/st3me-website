interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 48, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo Biserica Sfânta Treime"
      className={className}
    >
      {/* Outer decorative circle */}
      <circle cx="50" cy="50" r="46" stroke="#C9922A" strokeWidth="1.5" />

      {/* Cross — vertical bar rises from book spine */}
      <line x1="50" y1="12" x2="50" y2="44" stroke="#C9922A" strokeWidth="3" strokeLinecap="round" />
      {/* Cross — horizontal bar */}
      <line x1="36" y1="23" x2="64" y2="23" stroke="#C9922A" strokeWidth="3" strokeLinecap="round" />

      {/* Open Bible — left page */}
      <path
        d="M50 74 L11 66 L11 38 L50 46 Z"
        stroke="#C9922A"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="#C9922A"
        fillOpacity="0.08"
      />
      {/* Open Bible — right page */}
      <path
        d="M50 74 L89 66 L89 38 L50 46 Z"
        stroke="#C9922A"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="#C9922A"
        fillOpacity="0.08"
      />
      {/* Bible spine */}
      <line x1="50" y1="46" x2="50" y2="74" stroke="#C9922A" strokeWidth="2" strokeLinecap="round" />

      {/* Text lines on left page — suggest printed scripture */}
      <line x1="18" y1="52" x2="44" y2="55" stroke="#C9922A" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
      <line x1="18" y1="58" x2="44" y2="61" stroke="#C9922A" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />

      {/* Text lines on right page */}
      <line x1="56" y1="55" x2="82" y2="52" stroke="#C9922A" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
      <line x1="56" y1="61" x2="82" y2="58" stroke="#C9922A" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
    </svg>
  );
}
