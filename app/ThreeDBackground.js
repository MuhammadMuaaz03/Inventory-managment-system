import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

// RotatingTorusKnot Component
const RotatingTorusKnot = () => {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[10, 3, 100, 16]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
};

// ThreeDBackground Component
const ThreeDBackground = () => {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <RotatingTorusKnot />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default ThreeDBackground;
