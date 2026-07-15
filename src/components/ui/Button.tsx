import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost' | 'white' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-primary-600 text-white shadow-soft hover:bg-primary-700 hover:shadow-lift active:scale-[0.98]',
  secondary:
    'bg-ink-900 text-white shadow-soft hover:bg-ink-800 hover:shadow-lift active:scale-[0.98]',
  white:
    'bg-white text-primary-700 shadow-soft hover:bg-primary-50 hover:shadow-lift active:scale-[0.98]',
  outline:
    'border border-ink-200 bg-white text-ink-800 hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50/50 active:scale-[0.98]',
  ghost: 'text-ink-700 hover:text-primary-700 hover:bg-primary-50 active:scale-[0.98]',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 min-h-[44px] px-4 text-sm gap-1.5',
  md: 'h-11 min-h-[44px] px-5 text-sm gap-2',
  lg: 'h-13 min-h-[44px] px-7 text-base gap-2.5 py-3.5',
};

const base =
  'group relative inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none overflow-hidden';

const Button = forwardRef<
  HTMLButtonElement,
  BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: string; href?: string }
>(({ variant = 'primary', size = 'md', leftIcon, rightIcon, children, className = '', to, href, ...props }, ref) => {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && (
        <span className="inline-flex shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
          {rightIcon}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }
  return (
    <button ref={ref} className={classes} {...props}>
      {content}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
