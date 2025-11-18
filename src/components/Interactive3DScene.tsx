import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Environment, Line } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Sparkles, Zap, Network } from 'lucide-react';

interface FloatingElementProps {
  position: [number, number, number];
  color: string;
  children: React.ReactNode;
}

const FloatingElement = ({ position, color, children }: FloatingElementProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {children}
        <meshPhongMaterial color={color} transparent opacity={0.8} />
      </mesh>
    </Float>
  );
};

const DataNode = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.3]} />
        <meshPhongMaterial 
          color="hsl(213, 100%, 50%)" 
          transparent 
          opacity={0.7}
          emissive="hsl(213, 100%, 30%)"
        />
      </mesh>
    </Float>
  );
};

const NetworkConnection = ({ start, end }: { start: [number, number, number]; end: [number, number, number] }) => {
  const points = [start, end];
  
  return (
    <Line
      points={points}
      color="hsl(213, 100%, 60%)"
      transparent
      opacity={0.3}
      lineWidth={2}
    />
  );
};

const Scene3D = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* Central Core - Represents Scholarix Global's unified data intelligence platform */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <mesh 
          position={[0, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <icosahedronGeometry args={[1.2]} />
          <meshPhongMaterial 
            color={hovered ? "hsl(263, 85%, 65%)" : "hsl(213, 100%, 50%)"} 
            transparent 
            opacity={0.8}
            emissive={hovered ? "hsl(263, 85%, 30%)" : "hsl(213, 100%, 20%)"}
          />
        </mesh>
      </Float>

      {/* CRM Solution - AI Brain */}
      <FloatingElement position={[-3, 2, 1]} color="hsl(195, 100%, 75%)">
        <sphereGeometry args={[0.6]} />
      </FloatingElement>

      {/* Automation Solution - Gears */}
      <FloatingElement position={[3, 1.5, -1]} color="hsl(280, 100%, 80%)">
        <torusGeometry args={[0.5, 0.2, 8, 16]} />
      </FloatingElement>

      {/* Data Processing - Cube */}
      <FloatingElement position={[-2, -2, 0]} color="hsl(213, 100%, 60%)">
        <boxGeometry args={[0.8, 0.8, 0.8]} />
      </FloatingElement>

      {/* AI Agent - Neural Network Node */}
      <FloatingElement position={[2.5, -1.5, 1.5]} color="hsl(263, 85%, 65%)">
        <dodecahedronGeometry args={[0.7]} />
      </FloatingElement>

      {/* Property Management - Connected Nodes */}
      <FloatingElement position={[0, 3, -2]} color="hsl(195, 100%, 75%)">
        <cylinderGeometry args={[0.3, 0.6, 1]} />
      </FloatingElement>

      {/* Data Nodes - Representing interconnected systems */}
      <DataNode position={[-1.5, 1, 2]} />
      <DataNode position={[1.2, 2.5, 0.5]} />
      <DataNode position={[-2.2, -0.5, -1.5]} />
      <DataNode position={[1.8, -2.2, -0.8]} />
      <DataNode position={[0.5, -1, 2.5]} />

      {/* Network Connections */}
      <NetworkConnection start={[0, 0, 0]} end={[-3, 2, 1]} />
      <NetworkConnection start={[0, 0, 0]} end={[3, 1.5, -1]} />
      <NetworkConnection start={[0, 0, 0]} end={[-2, -2, 0]} />
      <NetworkConnection start={[0, 0, 0]} end={[2.5, -1.5, 1.5]} />
      <NetworkConnection start={[0, 0, 0]} end={[0, 3, -2]} />

      {/* Central Pulse Ring */}
      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.5}>
        <mesh position={[0, -3, 0]}>
          <torusGeometry args={[2, 0.1, 16, 32]} />
          <meshPhongMaterial 
            color="hsl(213, 100%, 50%)" 
            emissive="hsl(213, 100%, 30%)"
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>

      {/* Lighting */}
      <ambientLight intensity={0.4} color="hsl(220, 30%, 80%)" />
      <pointLight 
        position={[10, 10, 10]} 
        intensity={1} 
        color="hsl(213, 100%, 70%)"
      />
      <pointLight 
        position={[-10, -10, -10]} 
        intensity={0.5} 
        color="hsl(263, 85%, 70%)"
      />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        color="hsl(195, 100%, 75%)"
        castShadow
      />

      {/* Environment */}
      <Environment preset="city" />
      
      {/* Controls */}
      <OrbitControls 
        enableZoom={true}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        maxDistance={10}
        minDistance={3}
      />
    </>
  );
};

// Mobile fallback component
const MobileFallback = () => {
  return (
    <div className="w-full h-[400px] sm:h-[500px] relative flex items-center justify-center">
      <div className="glass-card p-8 sm:p-12 text-center max-w-lg mx-4">
        <div className="flex justify-center gap-4 sm:gap-6 mb-6">
          <div className="p-3 sm:p-4 glass-card glow-hover pulse-glow">
            <Network className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
          </div>
          <div className="p-3 sm:p-4 glass-card glow-hover pulse-glow" style={{animationDelay: '0.5s'}}>
            <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-accent" />
          </div>
          <div className="p-3 sm:p-4 glass-card glow-hover pulse-glow" style={{animationDelay: '1s'}}>
            <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-secondary" />
          </div>
        </div>
        <h4 className="text-xl sm:text-2xl font-bold text-primary mb-3">
          Interconnected Solutions
        </h4>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Our AI-powered platform seamlessly integrates CRM, automation, analytics, and intelligent agents
          to create one unified system for your business.
        </p>
      </div>
    </div>
  );
};

const Interactive3DScene = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 ||
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Delay loading to improve initial page load
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  // Show mobile fallback on mobile devices
  if (isMobile) {
    return <MobileFallback />;
  }

  // Show placeholder while loading
  if (!isLoaded) {
    return (
      <div className="w-full h-[600px] relative flex items-center justify-center">
        <div className="text-muted-foreground">Loading 3D scene...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] relative">
      <Canvas
        camera={{ position: [5, 5, 5], fov: 60 }}
        shadows
        className="bg-transparent"
        dpr={[1, 2]} // Limit pixel ratio for performance
      >
        <Scene3D />
      </Canvas>

      {/* Overlay Info */}
      <div className="absolute bottom-4 left-4 glass-card p-3 sm:p-4 max-w-xs hidden md:block">
        <h4 className="text-base sm:text-lg font-semibold text-primary mb-2">
          Interactive Network
        </h4>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Explore our interconnected solutions. Hover and rotate to see how all systems work together seamlessly.
        </p>
      </div>
    </div>
  );
};

export default Interactive3DScene;