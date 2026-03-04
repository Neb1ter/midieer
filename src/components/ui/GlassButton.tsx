import React from 'react';
import { cn } from '@/lib/utils';
import LiquidGlass from './LiquidGlass';

interface GlassButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  as?: React.ElementType;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const GlassButton = React.forwardRef<HTMLElement, GlassButtonProps>(
  ({ children, className, variant = 'primary', as: Component = 'button', ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "relative group overflow-hidden rounded-full px-8 py-3 transition-all duration-300 active:scale-95 text-black",
          // Removed base glass styles as they will be handled by LiquidGlass
          "border-0 cursor-pointer", 
          
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 z-0">
             <LiquidGlass 
                width="100%" 
                height="100%" 
                borderRadius={50}
                opacity={variant === 'primary' ? 0.91 : 0.6}
                mixBlendMode="normal"
             />
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-10" />
        
        {/* Content */}
        <span className="relative z-20 flex items-center justify-center gap-2 font-medium tracking-wide">
          {children}
        </span>
      </Component>
    );
  }
);

GlassButton.displayName = 'GlassButton';

export default GlassButton;