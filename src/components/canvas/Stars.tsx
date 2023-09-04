import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const MovingStars = () => {
  const ref = useRef<any>();

  useFrame((_state: any, delta: any) => {
    if (ref.current) {
      ref.current.rotation.x += 0.05 * delta;
      ref.current.rotation.y += 0.19 * delta;
      ref.current.position.z += 0.1 * delta;
      if (ref.current.position.z > 200) ref.current.position.z = -200;
    }
  });

  return (
    <group ref={ref}>
      <Stars count={1000} />
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <MovingStars />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
