export default function FlickerSpinner({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 42 42"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      style={{ "--on": "#F5F5F5", "--off": "#404040", "--dur": "0.600s" }}
    >
      <title>Loading</title>
      <style>{`
        circle { fill: var(--off); }
        circle.on { fill: var(--on); }
        @media (prefers-reduced-motion: reduce) { circle { animation: none !important; } }
      `}</style>
      <circle cx="3" cy="3" r="2" />
      <circle cx="9" cy="3" r="2" />
      <circle cx="15" cy="3" r="2" />
      <circle cx="21" cy="3" r="2" />
      <circle cx="27" cy="3" r="2" />
      <circle cx="33" cy="3" r="2" />
      <circle cx="39" cy="3" r="2" />
      <circle cx="3" cy="9" r="2" />
      <circle cx="9" cy="9" r="2" />
      <circle cx="15" cy="9" r="2" />
      <circle cx="21" cy="9" r="2" />
      <circle cx="27" cy="9" r="2" />
      <circle cx="33" cy="9" r="2" />
      <circle className="on" cx="33" cy="9" r="2" />
      <circle cx="39" cy="9" r="2" />
      <circle cx="3" cy="15" r="2" />
      <circle cx="9" cy="15" r="2" />
      <circle cx="15" cy="15" r="2" />
      <circle cx="21" cy="15" r="2" />
      <circle cx="27" cy="15" r="2" />
      <circle className="on" cx="27" cy="15" r="2" />
      <circle cx="33" cy="15" r="2" />
      <circle cx="39" cy="15" r="2" />
      <circle cx="3" cy="21" r="2" />
      <circle cx="9" cy="21" r="2" />
      <circle className="on" cx="9" cy="21" r="2" />
      <circle cx="15" cy="21" r="2" />
      <circle cx="21" cy="21" r="2" />
      <circle className="on" cx="21" cy="21" r="2" />
      <circle cx="27" cy="21" r="2" />
      <circle cx="33" cy="21" r="2" />
      <circle cx="39" cy="21" r="2" />
      <circle cx="3" cy="27" r="2" />
      <circle cx="9" cy="27" r="2" />
      <circle cx="15" cy="27" r="2" />
      <circle className="on" cx="15" cy="27" r="2" />
      <circle cx="21" cy="27" r="2" />
      <circle cx="27" cy="27" r="2" />
      <circle cx="33" cy="27" r="2" />
      <circle cx="39" cy="27" r="2" />
      <circle cx="3" cy="33" r="2" />
      <circle cx="9" cy="33" r="2" />
      <circle cx="15" cy="33" r="2" />
      <circle cx="21" cy="33" r="2" />
      <circle cx="27" cy="33" r="2" />
      <circle cx="33" cy="33" r="2" />
      <circle cx="39" cy="33" r="2" />
      <circle cx="3" cy="39" r="2" />
      <circle cx="9" cy="39" r="2" />
      <circle cx="15" cy="39" r="2" />
      <circle cx="21" cy="39" r="2" />
      <circle cx="27" cy="39" r="2" />
      <circle cx="33" cy="39" r="2" />
      <circle cx="39" cy="39" r="2" />
    </svg>
  );
}
