interface LogoProps {
  className?: string;
  dark?: boolean;
  height?: number;
}

export default function Logo({ className = '', dark = false, height = 40 }: LogoProps) {
  return (
    <a
      href="#home"
      className={`group inline-flex items-center ${className}`}
      aria-label="SMANV IT — navigating progress with precision"
    >
      <img
        src="/logo.png"
        alt="SMANV IT logo"
        height={height}
        style={{ height: `${height}px`, width: 'auto' }}
        className={`block transition-opacity duration-300 group-hover:opacity-90 ${dark ? 'brightness-0 invert' : ''}`}
        draggable={false}
      />
    </a>
  );
}
