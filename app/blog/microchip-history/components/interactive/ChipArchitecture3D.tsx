'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

// Import R3F components
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// Import Three.js types
import * as THREE from 'three';

interface ChipArchitecture3DProps {
  selectedLayer: number | null;
  onLayerSelect: (index: number | null) => void;
}

// Define chip layers
const chipLayers = [
  { name: 'Silicon Substrate', color: '#1a1a2e', thickness: 0.8, description: 'Base silicon wafer' },
  { name: 'Transistor Layer', color: '#16213e', thickness: 0.3, description: 'CMOS transistors' },
  { name: 'Metal Layer 1', color: '#0f3460', thickness: 0.1, description: 'Local interconnects' },
  { name: 'Via Layer 1', color: '#533483', thickness: 0.05, description: 'Vertical connections' },
  { name: 'Metal Layer 2', color: '#7209b7', thickness: 0.1, description: 'Routing layer' },
  { name: 'Via Layer 2', color: '#a663cc', thickness: 0.05, description: 'Inter-layer vias' },
  { name: 'Metal Layer 3', color: '#4cc9f0', thickness: 0.1, description: 'Global routing' },
  { name: 'Passivation', color: '#7209b7', thickness: 0.1, description: 'Protection layer' },
  { name: 'Bond Pads', color: '#f72585', thickness: 0.05, description: 'Connection points' }
];

interface ChipLayerProps {
  layer: typeof chipLayers[0];
  index: number;
  exploded: boolean;
  selected: boolean;
  hovered: boolean;
  onClick: () => void;
}

const ChipLayer = ({ layer, index, exploded, selected, hovered, onClick }: ChipLayerProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += selected ? 0.01 : 0.005;
      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      if (selected) {
        material.emissive.setHex(0x441155);
      } else {
        material.emissive.setHex(0x000000);
      }
    }
  });
  
  const yPosition = exploded ? index * 2 : index * 0.2;
  
  return (
    <mesh
      ref={meshRef}
      position={[0, yPosition, 0]}
      onClick={onClick}
      onPointerOver={() => document.body.style.cursor = 'pointer'}
      onPointerOut={() => document.body.style.cursor = 'auto'}
      scale={selected ? 1.1 : hovered ? 1.05 : 1}
    >
      <boxGeometry args={[4, layer.thickness, 4]} />
      <meshStandardMaterial
        color={layer.color}
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={selected ? 1 : 0.8}
      />
      
      {/* Wireframe overlay for selected layer */}
      {selected && (
        <mesh>
          <boxGeometry args={[4.1, layer.thickness + 0.1, 4.1]} />
          <meshBasicMaterial wireframe color="#8B5CF6" />
        </mesh>
      )}
    </mesh>
  );
};

export const ChipArchitecture3D: React.FC<ChipArchitecture3DProps> = ({ 
  selectedLayer, 
  onLayerSelect 
}) => {
  const [exploded, setExploded] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative h-96 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl overflow-hidden border border-purple-500/20">
      {/* Controls */}
      <div className="absolute top-4 left-4 z-10 space-y-2">
        <button
          onClick={() => setExploded(!exploded)}
          className="bg-purple-600/80 hover:bg-purple-500/80 text-white px-4 py-2 rounded-lg backdrop-blur-sm border border-purple-400/30 transition-all"
        >
          {exploded ? 'Collapse' : 'Explode'} View
        </button>
        <div className="bg-black/40 backdrop-blur-md rounded-lg p-3 border border-purple-500/20">
          <h4 className="text-purple-300 text-sm font-semibold mb-2">Chip Layers</h4>
          <div className="space-y-1">
            {chipLayers.map((layer, index) => (
              <button
                key={layer.name}
                onClick={() => onLayerSelect(index)}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "w-full text-left text-xs px-2 py-1 rounded transition-all",
                  selectedLayer === index 
                    ? "bg-purple-500/60 text-white" 
                    : "text-purple-200 hover:bg-purple-600/30"
                )}
              >
                {layer.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Layer info */}
      {(selectedLayer !== null || hovered !== null) && (
        <div className="absolute top-4 right-4 z-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/60 backdrop-blur-md rounded-lg p-4 border border-purple-500/30"
          >
            {(() => {
              const layer = chipLayers[selectedLayer ?? hovered!];
              return (
                <>
                  <h3 className="text-white font-semibold mb-1">{layer.name}</h3>
                  <p className="text-purple-200 text-sm mb-2">{layer.description}</p>
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded border border-white/20"
                      style={{ backgroundColor: layer.color }}
                    />
                    <span className="text-purple-300 text-xs">
                      Thickness: {layer.thickness}μm
                    </span>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </div>
      )}
      
      <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06B6D4" />
        
        {chipLayers.map((layer, index) => (
          <ChipLayer
            key={layer.name}
            layer={layer}
            index={index}
            exploded={exploded}
            selected={selectedLayer === index}
            hovered={hovered === index}
            onClick={() => onLayerSelect(index)}
          />
        ))}
        
        <OrbitControls 
          enableZoom 
          enablePan 
          enableRotate 
          autoRotate 
          autoRotateSpeed={1}
          maxDistance={15}
          minDistance={3}
        />
      </Canvas>
    </div>
  );
};
