import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={0}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[30, 30, 2.05]} />
      <mesh castShadow receiveShadow scale={2.50}>
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial
          transparent
          opacity={0}
        />
        <Decal
          position={[0, 0, 0.01]}
          rotation={[0, 0, 0]}
          scale={1.5}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Ball imgUrl={icon} />
      </Suspense>

    </Canvas>
  );
};

export default BallCanvas;
