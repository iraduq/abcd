import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Float } from "@react-three/drei";
import * as THREE from "three";

// Simple 3D Symbol Component without text geometry
function FloatingSymbol({ 
  position, 
  color = "#ffffff", 
  speed = 1,
  shape = 'box'
}: {
  position: [number, number, number];
  color?: string;
  speed?: number;
  shape?: 'box' | 'sphere' | 'cylinder';
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed) * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.7) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        {shape === 'box' && <boxGeometry args={[0.2, 0.2, 0.2]} />}
        {shape === 'sphere' && <sphereGeometry args={[0.15, 8, 8]} />}
        {shape === 'cylinder' && <cylinderGeometry args={[0.1, 0.1, 0.3, 6]} />}
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

// Geometric Shapes Component
function GeometricShapes() {
  const shapes = useMemo(() => [
    { type: 'box', position: [-3, 2, -2] as [number, number, number], color: '#8B5CF6' },
    { type: 'sphere', position: [3, -1, -3] as [number, number, number], color: '#10B981' },
    { type: 'cylinder', position: [-2, -2, -1] as [number, number, number], color: '#F59E0B' },
    { type: 'torus', position: [2, 1, -4] as [number, number, number], color: '#EF4444' },
  ], []);

  return (
    <>
      {shapes.map((shape, index) => (
        <Float key={index} speed={1 + index * 0.2} rotationIntensity={1} floatIntensity={0.5}>
          <mesh position={shape.position}>
            {shape.type === 'box' && <boxGeometry args={[0.5, 0.5, 0.5]} />}
            {shape.type === 'sphere' && <sphereGeometry args={[0.3, 16, 16]} />}
            {shape.type === 'cylinder' && <cylinderGeometry args={[0.2, 0.2, 0.6, 8]} />}
            {shape.type === 'torus' && <torusGeometry args={[0.3, 0.1, 8, 16]} />}
            <meshStandardMaterial 
              color={shape.color} 
              emissive={shape.color} 
              emissiveIntensity={0.1}
              transparent
              opacity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

// Simple Symbol Elements
function SimpleSymbolElements() {
  const symbols = useMemo(() => [
    { shape: 'box' as const, position: [-4, 1, -3] as [number, number, number], color: '#8B5CF6' },
    { shape: 'sphere' as const, position: [4, -1, -2] as [number, number, number], color: '#10B981' },
    { shape: 'cylinder' as const, position: [-3, -2, -4] as [number, number, number], color: '#F59E0B' },
    { shape: 'box' as const, position: [3, 2, -5] as [number, number, number], color: '#EF4444' },
    { shape: 'sphere' as const, position: [-2, 3, -2] as [number, number, number], color: '#06B6D4' },
  ], []);
  
  return (
    <>
      {symbols.map((symbol, index) => (
        <FloatingSymbol
          key={index}
          shape={symbol.shape}
          position={symbol.position}
          color={symbol.color}
          speed={0.3 + index * 0.1}
        />
      ))}
    </>
  );
}

export default function ParallaxCharacters() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.2} />
        
        <Suspense fallback={<SimpleSymbolElements />}>
          <GeometricShapes />
          <SimpleSymbolElements />
        </Suspense>
      </Canvas>
    </div>
  );
}