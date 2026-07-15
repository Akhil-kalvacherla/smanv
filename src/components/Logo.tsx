import { useLocation } from 'react-router-dom';

interface LogoProps {
  className?: string;
  dark?: boolean;
  height?: number;
}

export default function Logo({ className = '', dark = false, height = 40 }: LogoProps) {
  const location = useLocation();
  const isHome = location.pathname === '/website-development-services';

  return (
    <a
      href={isHome ? "#home" : "/website-development-services"}
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
