import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

// Componenta pentru un om 3D stilizat
function StylizedPerson({ 
  position, 
  color = "#ffffff", 
  speed = 1 
}: {
  position: [number, number, number];
  color?: string;
  speed?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed) * 0.1;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={groupRef} position={position}>
        {/* Cap */}
        <mesh position={[0, 0.8, 0]}>
          <sphereGeometry args={[0.15, 12, 12]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
        </mesh>
        
        {/* Corp */}
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.12, 0.18, 0.6, 8]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
        </mesh>
        
        {/* Brațul stâng */}
        <mesh position={[-0.25, 0.4, 0]} rotation={[0, 0, 0.3]}>
          <cylinderGeometry args={[0.05, 0.05, 0.4, 6]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
        </mesh>
        
        {/* Brațul drept */}
        <mesh position={[0.25, 0.4, 0]} rotation={[0, 0, -0.3]}>
          <cylinderGeometry args={[0.05, 0.05, 0.4, 6]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
        </mesh>
        
        {/* Piciorul stâng */}
        <mesh position={[-0.1, -0.25, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.5, 6]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
        </mesh>
        
        {/* Piciorul drept */}
        <mesh position={[0.1, -0.25, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.5, 6]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

// Componenta pentru o casă 3D
function StylizedHouse({ 
  position, 
  speed = 1 
}: {
  position: [number, number, number];
  speed?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.05;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef} position={position}>
        {/* Baza casei */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.6, 0.5, 0.6]} />
          <meshStandardMaterial color="#8B5CF6" emissive="#8B5CF6" emissiveIntensity={0.1} />
        </mesh>
        
        {/* Acoperișul */}
        <mesh position={[0, 0.35, 0]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[0.45, 0.3, 4]} />
          <meshStandardMaterial color="#EF4444" emissive="#EF4444" emissiveIntensity={0.1} />
        </mesh>
        
        {/* Ușa */}
        <mesh position={[0, -0.1, 0.31]}>
          <boxGeometry args={[0.15, 0.3, 0.02]} />
          <meshStandardMaterial color="#8B4513" emissive="#8B4513" emissiveIntensity={0.1} />
        </mesh>
        
        {/* Fereastra */}
        <mesh position={[0.2, 0.1, 0.31]}>
          <boxGeometry args={[0.12, 0.12, 0.02]} />
          <meshStandardMaterial color="#87CEEB" emissive="#87CEEB" emissiveIntensity={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

// Componenta pentru un copac 3D
function StylizedTree({ 
  position, 
  speed = 1 
}: {
  position: [number, number, number];
  speed?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.1;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.15;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.5}>
      <group ref={groupRef} position={position}>
        {/* Trunchi */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.05, 0.08, 0.4, 6]} />
          <meshStandardMaterial color="#8B4513" emissive="#8B4513" emissiveIntensity={0.1} />
        </mesh>
        
        {/* Coroana copacului */}
        <mesh position={[0, 0.2, 0]}>
          <sphereGeometry args={[0.25, 8, 8]} />
          <meshStandardMaterial color="#10B981" emissive="#10B981" emissiveIntensity={0.2} />
        </mesh>
        
        {/* Frunze suplimentare */}
        <mesh position={[-0.1, 0.3, 0.1]}>
          <sphereGeometry args={[0.12, 6, 6]} />
          <meshStandardMaterial color="#22C55E" emissive="#22C55E" emissiveIntensity={0.2} />
        </mesh>
        
        <mesh position={[0.15, 0.25, -0.1]}>
          <sphereGeometry args={[0.1, 6, 6]} />
          <meshStandardMaterial color="#16A34A" emissive="#16A34A" emissiveIntensity={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

// Componenta pentru caractere 3D diverse
function Character3DCollection() {
  const characters = useMemo(() => [
    { type: 'person', position: [-4, 1, -3] as [number, number, number], color: '#8B5CF6' },
    { type: 'house', position: [3, -1, -4] as [number, number, number] },
    { type: 'tree', position: [-2, 2, -2] as [number, number, number] },
    { type: 'person', position: [4, 0.5, -5] as [number, number, number], color: '#10B981' },
    { type: 'person', position: [-3, -2, -6] as [number, number, number], color: '#F59E0B' },
    { type: 'tree', position: [2, -0.5, -3] as [number, number, number] },
    { type: 'house', position: [-1, 3, -7] as [number, number, number] },
    { type: 'person', position: [1, -1.5, -4] as [number, number, number], color: '#EF4444' },
  ], []);
  
  return (
    <>
      {characters.map((char, index) => {
        if (char.type === 'person') {
          return (
            <StylizedPerson
              key={index}
              position={char.position}
              color={char.color}
              speed={0.3 + index * 0.1}
            />
          );
        } else if (char.type === 'house') {
          return (
            <StylizedHouse
              key={index}
              position={char.position}
              speed={0.2 + index * 0.05}
            />
          );
        } else if (char.type === 'tree') {
          return (
            <StylizedTree
              key={index}
              position={char.position}
              speed={0.4 + index * 0.08}
            />
          );
        }
        return null;
      })}
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
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <spotLight position={[0, 10, 0]} intensity={0.3} angle={0.3} penumbra={1} />
        
        <Suspense fallback={null}>
          <Character3DCollection />
        </Suspense>
      </Canvas>
    </div>
  );
}