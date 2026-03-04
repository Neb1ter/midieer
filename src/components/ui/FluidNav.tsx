import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { easing } from 'maath';

interface NavItemsProps {
  items: { name: string; path: string }[];
  currentPath: string;
}

function NavItems({ items, currentPath }: NavItemsProps) {
  const group = useRef<THREE.Group>(null);
  const { viewport, camera } = useThree();
  const navigate = useNavigate();

  // Responsive settings
  const DEVICE = {
    mobile: { max: 639, spacing: 1.2, fontSize: 0.35 },
    tablet: { max: 1023, spacing: 1.5, fontSize: 0.4 },
    desktop: { max: Infinity, spacing: 2.0, fontSize: 0.45 }
  };

  const getDevice = () => {
    const w = window.innerWidth;
    return w <= DEVICE.mobile.max ? 'mobile' : w <= DEVICE.tablet.max ? 'tablet' : 'desktop';
  };

  const [device, setDevice] = useState<'mobile' | 'tablet' | 'desktop'>(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { spacing, fontSize } = DEVICE[device];

  useFrame((state, delta) => {
    if (!group.current) return;
    
    // Smoothly follow pointer for subtle parallax
    easing.damp3(group.current.position, [
      (state.pointer.x * viewport.width) / 20, 
      (state.pointer.y * viewport.height) / 20, 
      0
    ], 0.1, delta);
    
    // Animate children
    group.current.children.forEach((child, i) => {
        // Base position
        const targetX = (i - (items.length - 1) / 2) * spacing;
        
        // Hover effect logic handled by events, but here we can add idle motion
        child.position.x = targetX;
    });
  });

  return (
    <group ref={group}>
      {items.map((item, i) => {
        const isActive = currentPath === item.path;
        return (
          <NavItem 
            key={item.path}
            label={item.name}
            isActive={isActive}
            fontSize={fontSize}
            position={[(i - (items.length - 1) / 2) * spacing, 0, 0]}
            onClick={() => navigate(item.path)}
          />
        );
      })}
    </group>
  );
}

function NavItem({ label, isActive, fontSize, position, onClick }: any) {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    
    // Scale animation
    const targetScale = hovered ? 1.2 : isActive ? 1.1 : 1;
    easing.damp(mesh.current.scale, 'x', targetScale, 0.1, delta);
    easing.damp(mesh.current.scale, 'y', targetScale, 0.1, delta);
    
    // Color animation
    const targetColor = hovered ? '#16a34a' : isActive ? '#09090b' : '#71717a'; // primary : foreground : muted-foreground
    // @ts-ignore
    easing.dampC(mesh.current.material.color, targetColor, 0.1, delta);
  });

  return (
    <Text
      ref={mesh}
      position={position}
      fontSize={fontSize}
      font="/fonts/Inter-Bold.woff" // We might need to ensure a font exists or use default
      anchorX="center"
      anchorY="middle"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = 'auto';
      }}
    >
      {label}
    </Text>
  );
}

export default function FluidNav({ items, currentPath }: NavItemsProps) {
  return (
    <div className="w-full h-16 absolute top-0 left-0 pointer-events-none z-40 hidden md:block">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true }} style={{ pointerEvents: 'auto' }}>
        <ambientLight intensity={0.5} />
        <NavItems items={items} currentPath={currentPath} />
      </Canvas>
    </div>
  );
}
