import React from 'react';
import GlassSurface, { GlassSurfaceProps } from './GlassSurface';

interface LiquidGlassProps extends Omit<GlassSurfaceProps, 'width' | 'height'> {
  width?: number | string;
  height?: number | string;
}

const LiquidGlass = React.forwardRef<HTMLDivElement, LiquidGlassProps>(({
  children,
  width = '100%',
  height = '100%',
  borderRadius = 50,
  backgroundOpacity = 0.04,
  saturation = 0,
  borderWidth = 0.07,
  brightness = 55,
  opacity = 0.91,
  blur = 13,
  displace = 2.5,
  distortionScale = -300,
  redOffset = 0,
  greenOffset = 10,
  blueOffset = 20,
  mixBlendMode = 'normal',
  ...props
}, ref) => {
  return (
    <GlassSurface
      ref={ref}
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundOpacity={backgroundOpacity}
      saturation={saturation}
      borderWidth={borderWidth}
      brightness={brightness}
      opacity={opacity}
      blur={blur}
      displace={displace}
      distortionScale={distortionScale}
      redOffset={redOffset}
      greenOffset={greenOffset}
      blueOffset={blueOffset}
      mixBlendMode={mixBlendMode}
      {...props}
    >
      {children}
    </GlassSurface>
  );
});

LiquidGlass.displayName = 'LiquidGlass';

export default LiquidGlass;
