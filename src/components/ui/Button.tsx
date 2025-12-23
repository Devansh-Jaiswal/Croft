import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'pink' | 'blue' | 'yellow' | 'green';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    isLoading = false,
    disabled = false,
    children,
    className = '',
    ...props
  }, ref) => {
    const baseStyles = 'font-bold transition-all duration-200 flex items-center justify-center gap-2 border-4 border-brutal-black rounded-brutal';

    const variantStyles = {
      primary: 'bg-brutal-black text-white shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm',
      secondary: 'bg-white text-brutal-black shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm',
      pink: 'bg-brutal-pink text-brutal-black shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm',
      blue: 'bg-brutal-blue text-white shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm',
      yellow: 'bg-brutal-yellow text-brutal-black shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm',
      green: 'bg-brutal-green text-brutal-black shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm'
    };

    const sizeStyles = {
      sm: 'px-5 py-2.5 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    const disabledStyles = 'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-brutal';

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${fullWidth ? 'w-full' : ''} ${className}`}
        {...props}
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-3 border-current border-t-transparent rounded-full animate-spin" />
            <span>Loading...</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
