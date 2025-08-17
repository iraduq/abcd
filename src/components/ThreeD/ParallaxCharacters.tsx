import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Componenta pentru forme geometrice simple și elegante
function ElegantShape({ 
  position, 
  color = "#ffffff", 
  speed = 1,
  shape = 'box'
}: {
  position: [number, number, number];
  color?: string;
  speed?: number;
  shape?: 'box' | 'sphere' | 'octahedron' | 'torus';
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed) * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.7) * 0.05;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        {shape === 'box' && <boxGeometry args={[0.15, 0.15, 0.15]} />}
        {shape === 'sphere' && <sphereGeometry args={[0.12, 12, 12]} />}
        {shape === 'octahedron' && <octahedronGeometry args={[0.15]} />}
        {shape === 'torus' && <torusGeometry args={[0.15, 0.05, 8, 16]} />}
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.1}
          transparent
          opacity={0.6}
          roughness={0.2}
          metalness={0.3}
        />
      </mesh>
    </Float>
  );
}

// Colecție de forme geometrice elegante
function GeometricElements() {
  const elements = useMemo(() => [
    { shape: 'octahedron' as const, position: [-4, 2, -4] as [number, number, number], color: '#8B5CF6' },
    { shape: 'sphere' as const, position: [4, -1, -3] as [number, number, number], color: '#10B981' },
    { shape: 'torus' as const, position: [-3, -1.5, -5] as [number, number, number], color: '#F59E0B' },
    { shape: 'box' as const, position: [3, 1.5, -6] as [number, number, number], color: '#EF4444' },
    { shape: 'octahedron' as const, position: [-2, 3, -3] as [number, number, number], color: '#06B6D4' },
    { shape: 'sphere' as const, position: [2, -2, -4] as [number, number, number], color: '#8B5CF6' },
  ], []);
  
  return (
    <>
      {elements.map((element, index) => (
        <ElegantShape
          key={index}
          shape={element.shape}
          position={element.position}
          color={element.color}
          speed={0.2 + index * 0.05}
        />
      ))}
    </>
  );
}

export default function ParallaxCharacters() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.3} />
        <directionalLight position={[-10, -10, -5]} intensity={0.2} />
        <spotLight position={[0, 10, 0]} intensity={0.1} angle={0.3} penumbra={1} />
        
        <Suspense fallback={null}>
          <GeometricElements />
        </Suspense>
      </Canvas>
    </div>
  );
}