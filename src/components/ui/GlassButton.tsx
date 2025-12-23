import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface GlassButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'glass';
    size?: 'sm' | 'md' | 'lg';
}

export const GlassButton: React.FC<GlassButtonProps> = ({
    children,
    className,
    variant = 'glass',
    size = 'md',
    ...props
}) => {
    const baseStyles = "relative overflow-hidden transition-all duration-300 rounded-full font-medium flex items-center justify-center gap-2 group";

    const variants = {
        glass: "glass-button text-neutral-800",
        primary: "bg-neutral-900 text-white shadow-lg hover:bg-neutral-800 border border-transparent",
        secondary: "bg-white/50 hover:bg-white/80 text-neutral-900 border border-white/60 shadow-sm",
    };

    const sizes = {
        sm: "px-4 py-1.5 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
            {variant === 'glass' && (
                <div className="absolute inset-0 -z-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform ease-in-out" />
            )}
        </motion.button>
    );
};
