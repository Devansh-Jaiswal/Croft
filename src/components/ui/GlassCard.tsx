import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface GlassCardProps extends HTMLMotionProps<"div"> {
    variant?: 'default' | 'featured';
}

export const GlassCard: React.FC<GlassCardProps> = ({
    children,
    className,
    variant = 'default',
    ...props
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "glass-card p-6 md:p-8 relative overflow-hidden group",
                variant === 'featured' && "bg-gradient-to-br from-white/60 to-white/20 border-white/60",
                className
            )}
            {...props}
        >
            <div className="relative z-10">
                {children}
            </div>

            {/* Subtle organic shine effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/20 blur-3xl rounded-full pointer-events-none group-hover:bg-white/30 transition-colors duration-500" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-organic-200/20 blur-3xl rounded-full pointer-events-none group-hover:bg-organic-200/30 transition-colors duration-500" />
        </motion.div>
    );
};
