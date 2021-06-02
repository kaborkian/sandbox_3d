import "./App.css";
import { Canvas, useFrame } from "react-three-fiber";
import React, { useState, useRef } from "react";
import { useSpring, a } from "@react-spring/three";

const Boxa = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const props = useSpring({ color: hovered ? "hotpink" : "gray" });
  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.x += 0.015;
    meshRef.current.rotation.z += 0.007;
  });

  return (
    <a.mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxBufferGeometry attach="geometry" args={[0.99, 0.99, 0.99]} />
      <a.meshBasicMaterial
        attach="material"
        color={props.color}
        wireframe={false}
      />
    </a.mesh>
  );
};

const Box = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const props = useSpring({ color: hovered ? "hotpink" : "gray" });
  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.x += 0.015;
    meshRef.current.rotation.z += 0.007;
  });

  return (
    <a.mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshBasicMaterial attach="material" color="red" wireframe={true} />
    </a.mesh>
  );
};

function App() {
  return (
    <>
      <Canvas style={{ position: "absolute" }}>
        <Box />
        <Boxa />
      </Canvas>
    </>
  );
}

export default App;
