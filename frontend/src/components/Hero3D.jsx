import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Stylized low-poly car
function Car({ position = [0, 0, 0] }) {
  const carRef = useRef();
  const wheelFL = useRef();
  const wheelFR = useRef();
  const wheelBL = useRef();
  const wheelBR = useRef();

  useFrame((state) => {
    // Subtle floating animation for the car
    if (carRef.current) {
      carRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05 + 0.3;
      carRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.5) * 0.02;
    }
    
    // Rotate wheels
    const wheelSpeed = 3;
    [wheelFL, wheelFR, wheelBL, wheelBR].forEach(wheel => {
      if (wheel.current) {
        wheel.current.rotation.x += wheelSpeed * 0.02;
      }
    });
  });

  const goldColor = '#F1C086';
  const darkColor = '#0D0D0E';

  return (
    <group ref={carRef} position={position} rotation={[0, Math.PI * 0.15, 0]}>
      {/* Car Body - Main */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <boxGeometry args={[2.4, 0.5, 1.2]} />
        <meshStandardMaterial color={goldColor} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Car Body - Top/Cabin */}
      <mesh position={[0.1, 0.75, 0]} castShadow>
        <boxGeometry args={[1.4, 0.45, 1]} />
        <meshStandardMaterial color={goldColor} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Windows - Front */}
      <mesh position={[-0.5, 0.75, 0]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.05, 0.35, 0.85]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Windows - Side Left */}
      <mesh position={[0.1, 0.75, 0.51]}>
        <boxGeometry args={[1.2, 0.35, 0.05]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Windows - Side Right */}
      <mesh position={[0.1, 0.75, -0.51]}>
        <boxGeometry args={[1.2, 0.35, 0.05]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Headlights */}
      <mesh position={[-1.22, 0.35, 0.4]}>
        <boxGeometry args={[0.05, 0.15, 0.2]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
      </mesh>
      <mesh position={[-1.22, 0.35, -0.4]}>
        <boxGeometry args={[0.05, 0.15, 0.2]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} />
      </mesh>
      
      {/* Taillights */}
      <mesh position={[1.22, 0.35, 0.4]}>
        <boxGeometry args={[0.05, 0.1, 0.15]} />
        <meshStandardMaterial color="#ff3333" emissive="#ff0000" emissiveIntensity={1} />
      </mesh>
      <mesh position={[1.22, 0.35, -0.4]}>
        <boxGeometry args={[0.05, 0.1, 0.15]} />
        <meshStandardMaterial color="#ff3333" emissive="#ff0000" emissiveIntensity={1} />
      </mesh>
      
      {/* Wheels */}
      <group ref={wheelFL} position={[-0.8, 0.15, 0.65]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.2, 0.2, 0.15, 16]} />
          <meshStandardMaterial color={darkColor} metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.16, 6]} />
          <meshStandardMaterial color={goldColor} metalness={0.8} roughness={0.3} />
        </mesh>
      </group>
      
      <group ref={wheelFR} position={[-0.8, 0.15, -0.65]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.2, 0.2, 0.15, 16]} />
          <meshStandardMaterial color={darkColor} metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.16, 6]} />
          <meshStandardMaterial color={goldColor} metalness={0.8} roughness={0.3} />
        </mesh>
      </group>
      
      <group ref={wheelBL} position={[0.8, 0.15, 0.65]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.2, 0.2, 0.15, 16]} />
          <meshStandardMaterial color={darkColor} metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.16, 6]} />
          <meshStandardMaterial color={goldColor} metalness={0.8} roughness={0.3} />
        </mesh>
      </group>
      
      <group ref={wheelBR} position={[0.8, 0.15, -0.65]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.2, 0.2, 0.15, 16]} />
          <meshStandardMaterial color={darkColor} metalness={0.5} roughness={0.5} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.16, 6]} />
          <meshStandardMaterial color={goldColor} metalness={0.8} roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

// Animated road with dashed lines
function Road() {
  const roadRef = useRef();
  const linesRef = useRef();

  useFrame((state) => {
    // Animate road lines moving backward to simulate movement
    if (linesRef.current) {
      linesRef.current.position.x = (state.clock.elapsedTime * 2) % 2 - 1;
    }
  });

  const lines = useMemo(() => {
    const lineArray = [];
    for (let i = -10; i < 10; i++) {
      lineArray.push(
        <mesh key={i} position={[i * 1.5, 0.01, 0]}>
          <boxGeometry args={[0.8, 0.02, 0.1]} />
          <meshStandardMaterial color="#F1C086" emissive="#F1C086" emissiveIntensity={0.3} />
        </mesh>
      );
    }
    return lineArray;
  }, []);

  return (
    <group>
      {/* Main road surface */}
      <mesh ref={roadRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[30, 4]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
      </mesh>
      
      {/* Road edges */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 2]}>
        <planeGeometry args={[30, 0.15]} />
        <meshStandardMaterial color="#F1C086" emissive="#F1C086" emissiveIntensity={0.2} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, -2]}>
        <planeGeometry args={[30, 0.15]} />
        <meshStandardMaterial color="#F1C086" emissive="#F1C086" emissiveIntensity={0.2} />
      </mesh>
      
      {/* Animated center lines */}
      <group ref={linesRef}>
        {lines}
      </group>
    </group>
  );
}

// Floating gold particles
function GoldParticles({ count = 100 }) {
  const particlesRef = useRef();
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = Math.random() * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.002;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#F1C086"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Abstract background sphere - simplified version
function BackgroundSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 2, -8]} scale={4}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#F1C086"
        roughness={0.4}
        metalness={0.8}
        opacity={0.15}
        transparent
        wireframe
      />
    </mesh>
  );
}

// Custom Stars component using points
function CustomStars({ count = 500 }) {
  const pointsRef = useRef();
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 30 + Math.random() * 20;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main 3D Scene
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#F1C086" />
      <spotLight
        position={[0, 8, 0]}
        intensity={0.8}
        angle={0.5}
        penumbra={1}
        color="#F1C086"
      />

      {/* Environment */}
      <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      
      {/* Scene elements */}
      <Road />
      <Car position={[0, 0, 0]} />
      <GoldParticles count={80} />
      <BackgroundSphere />
      
      {/* Ground reflection plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#0D0D0E" roughness={0.9} />
      </mesh>
    </>
  );
}

// Loading fallback
function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-gold/30 border-t-gold rounded-full animate-spin" />
    </div>
  );
}

// Main export component
export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
      <Canvas
        shadows
        camera={{ position: [4, 3, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
