// import { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Stars } from '@react-three/drei';

// const MovingStars = () => {
//   const ref = useRef<any>();

//   useFrame((delta: any) => {
//     if (ref.current) {
//       ref.current.rotation.x += 0.01 * delta; // Increase the rotation speed
//       ref.current.rotation.y += 0.02 * delta; // Increase the rotation speed
//     }
//   });

//   return (
//     <Canvas>
//       <Stars ref={ref} />
//     </Canvas>
//   );
// };

// const StarsCanvas = () => {
//   return (
//     <div className="w-full h-auto absolute inset-0 z-[-1]">
//       <MovingStars />
//     </div>
//   );
// };

// export default StarsCanvas;

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const MovingStars = () => {
  const ref: React.MutableRefObject<any> = useRef();

  useFrame((delta: any) => {
    ref.current.rotation.x += 0.05 * delta; // Increase the rotation speed
    ref.current.rotation.y += 0.19 * delta; // Increase the rotation speed
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

// import { useState, useRef, Suspense } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { Points, PointMaterial, Preload } from '@react-three/drei';
// // import * as random from 'maath/random/dist/maath-random.esm';
// // import * as random from 'maath/random/dist/maath-random.cjs';

// const Stars = (props: any) => {
//   const ref: React.MutableRefObject<any> = useRef();
//   const [sphere] = useState(() =>
//     random.inSphere(new Float32Array(5000), { radius: 1.2 })
//   );

//   useFrame((delta: any) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color="#f272c8"
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas = () => {
//   return (
//     <div className="w-full h-auto absolute inset-0 z-[-1]">
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default StarsCanvas;
