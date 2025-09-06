'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Html,
  Float,
  Points,
  PointMaterial
} from '@react-three/drei';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { TimelineView } from './TimelineView';

interface ChipArchitecture3DProps {
  active: boolean;
}

const ChipArchitecture3D: React.FC<ChipArchitecture3DProps> = ({ active }) => {
  const { theme } = useTheme();
  const [selectedYear, setSelectedYear] = useState(2024);

  if (!active) return null;

  const timelineEras = [
    { year: 1971, name: "First Microprocessor", icon: "🔲" },
    { year: 1981, name: "Personal Computing", icon: "💻" },
    { year: 1991, name: "Multimedia Era", icon: "🎮" },
    { year: 2001, name: "Mobile Revolution", icon: "📱" },
    { year: 2011, name: "Cloud Computing", icon: "☁️" },
    { year: 2021, name: "AI Acceleration", icon: "🤖" },
    { year: 2024, name: "Quantum Ready", icon: "⚛️" }
  ];

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-[#0a0a1a]/50 p-8 md:p-12">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-purple-900/10 to-transparent" />
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Silicon Evolution
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-3xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Journey through seven generations of semiconductor innovation, 
              from the birth of microprocessors to quantum computing breakthroughs
            </motion.p>
          </div>

          {/* Hero Decoration */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4">
            <div className="relative w-64 h-64 opacity-30">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 animate-pulse" style={{ animationDelay: '-2s' }} />
            </div>
          </div>
        </div>

        {/* Interactive Timeline */}
        <TimelineView 
          eras={timelineEras}
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
          getProcessNode={getProcessNode}
          getClockSpeed={getClockSpeed}
        />

        {/* 3D Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main 3D View */}
          <div className={cn(
            "lg:col-span-2",
            "relative h-[600px] rounded-xl overflow-hidden",
            "border",
            theme === 'dark'
              ? 'border-gray-700 bg-gray-900/30'
              : 'border-gray-200 bg-gray-50/30',
            "backdrop-blur-sm"
          )}>
            <Canvas
              camera={{ position: [0, 2, 5], fov: 45 }}
              gl={{ 
                antialias: true,
                alpha: true,
                powerPreference: "high-performance"
              }}
              dpr={[1, 2]}
              shadows
            >
              <color attach="background" args={[theme === 'dark' ? '#0a0a0f' : '#f8fafc']} />
              <fog attach="fog" args={[theme === 'dark' ? '#0a0a0f' : '#f8fafc', 5, 18]} />
              
              <Suspense fallback={<ChipLoader />}>
                <Scene year={selectedYear} />
                <OrbitControls
                  enablePan={false}
                  enableZoom={true}
                  minPolarAngle={Math.PI / 4}
                  maxPolarAngle={Math.PI / 2}
                  maxDistance={8}
                  minDistance={3}
                  autoRotate
                  autoRotateSpeed={0.5}
                />
                <Environment preset="night" />
                <ContactShadows
                  position={[0, -1, 0]}
                  opacity={0.7}
                  scale={10}
                  blur={2}
                  far={4}
                  resolution={256}
                />
                <ambientLight intensity={0.2} />
                <spotLight
                  position={[5, 5, 5]}
                  angle={0.3}
                  penumbra={1}
                  intensity={1}
                  castShadow
                  shadow-mapSize={[1024, 1024]}
                />
                <pointLight
                  position={[-5, 5, -5]}
                  intensity={0.5}
                  color={theme === 'dark' ? '#4f46e5' : '#818cf8'}
                />
              </Suspense>
            </Canvas>
          </div>

          {/* Detailed Specifications */}
          <div className={cn(
            "space-y-6 p-6 rounded-xl",
            theme === 'dark'
              ? 'bg-gray-900/30 border border-gray-800'
              : 'bg-white/30 border border-gray-200',
            "backdrop-blur-sm"
          )}>
            <div>
              <h3 className={cn(
                "text-xl font-semibold mb-2",
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              )}>
                {selectedYear} Specifications
              </h3>
              <p className={cn(
                "text-sm",
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              )}>
                Detailed technical specifications for processors of this era
              </p>
            </div>

            <div className="space-y-4">
              {/* Transistor Count */}
              <div className={cn(
                "p-4 rounded-lg",
                theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'
              )}>
                <div className="flex items-center justify-between mb-2">
                  <span className={cn(
                    "text-sm font-medium",
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  )}>
                    Transistor Count
                  </span>
                  <span className="text-purple-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </span>
                </div>
                <div className={cn(
                  "text-lg font-semibold",
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                )}>
                  {getTransistorCount(selectedYear)}
                </div>
              </div>

              {/* Process Node */}
              <div className={cn(
                "p-4 rounded-lg",
                theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'
              )}>
                <div className="flex items-center justify-between mb-2">
                  <span className={cn(
                    "text-sm font-medium",
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  )}>
                    Process Node
                  </span>
                  <span className="text-blue-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </span>
                </div>
                <div className={cn(
                  "text-lg font-semibold",
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                )}>
                  {getProcessNode(selectedYear)}
                </div>
              </div>

              {/* Clock Speed */}
              <div className={cn(
                "p-4 rounded-lg",
                theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'
              )}>
                <div className="flex items-center justify-between mb-2">
                  <span className={cn(
                    "text-sm font-medium",
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  )}>
                    Clock Speed
                  </span>
                  <span className="text-green-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </div>
                <div className={cn(
                  "text-lg font-semibold",
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                )}>
                  {getClockSpeed(selectedYear)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// 3D Components
function Scene({ year }: { year: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <Chip year={year} />
        <CircuitPoints year={year} />
      </Float>
    </group>
  );
}

function Chip({ year }: { year: number }) {
  const isModernEra = year >= 2020;
  const chipRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (chipRef.current) {
      chipRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });
  
  return (
    <group>
      {/* Base silicon wafer */}
      <mesh 
        ref={chipRef}
        position={[0, -0.1, 0]} 
        receiveShadow 
        castShadow
      >
        <cylinderGeometry args={[1.2, 1.2, 0.05, 32]} />
        <meshStandardMaterial
          color={isModernEra ? "#2f2f8f" : "#4f4f6f"}
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1}
        />
      </mesh>

      {/* Main processor layer */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[2, 0.1, 2]} />
        <meshPhysicalMaterial
          color={isModernEra ? "#6f46e5" : "#4f46a5"}
          metalness={0.9}
          roughness={0.2}
          emissive={isModernEra ? "#2f1f5f" : "#1f1f3f"}
          emissiveIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={2}
        />
      </mesh>

      {/* Circuit pattern */}
      {Array.from({ length: 4 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 4) * Math.PI * 2) * 0.5,
            0.06,
            Math.sin((i / 4) * Math.PI * 2) * 0.5
          ]}
          castShadow
        >
          <boxGeometry args={[0.4, 0.02, 0.4]} />
          <meshPhysicalMaterial
            color={isModernEra ? "#8f1f8f" : "#4f1f4f"}
            metalness={1}
            roughness={0.1}
            emissive={isModernEra ? "#4f0f4f" : "#2f0f2f"}
            emissiveIntensity={2}
            clearcoat={1}
            envMapIntensity={3}
          />
        </mesh>
      ))}
    </group>
  );
}

function CircuitPoints({ year }: { year: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 1000;
  const positions = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const r = 1 + Math.random() * 0.5;
    positions[i * 3] = r * Math.cos(theta);
    positions[i * 3 + 1] = (Math.random() - 0.5) * 0.2;
    positions[i * 3 + 2] = r * Math.sin(theta);
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={year >= 2020 ? "#a855f7" : "#6366f1"}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Loading Indicator
function ChipLoader() {
  const { theme } = useTheme();
  
  return (
    <Html center>
      <div className="space-y-4 text-center">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 w-full h-full border-4 border-purple-500 rounded-full animate-spin border-t-transparent" />
          <div className="absolute inset-0 w-full h-full border-4 border-purple-300 rounded-full animate-pulse opacity-50" />
        </div>
        <div className={cn(
          "text-sm font-medium",
          theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
        )}>
          Initializing visualization...
        </div>
      </div>
    </Html>
  );
}

// Helper functions
function getTransistorCount(year: number): string {
  if (year < 1975) return '2,300 (Intel 4004)';
  if (year < 1980) return '29,000 (Intel 8086)';
  if (year < 1990) return '275,000 (Intel 80386)';
  if (year < 2000) return '7.5 million (Intel Pentium III)';
  if (year < 2010) return '820 million (Intel Core i7)';
  if (year < 2020) return '8.7 billion (Apple M1)';
  return '114 billion (NVIDIA H100)';
}

function getProcessNode(year: number): string {
  if (year < 1975) return '10,000 nm';
  if (year < 1980) return '3,000 nm';
  if (year < 1990) return '1,500 nm';
  if (year < 2000) return '250 nm';
  if (year < 2010) return '45 nm';
  if (year < 2020) return '7 nm';
  return '3 nm';
}

function getClockSpeed(year: number): string {
  if (year < 1975) return '740 KHz';
  if (year < 1980) return '4.77 MHz';
  if (year < 1990) return '16 MHz';
  if (year < 2000) return '600 MHz';
  if (year < 2010) return '3 GHz';
  if (year < 2020) return '5 GHz';
  return '6 GHz';
}

export default ChipArchitecture3D;
