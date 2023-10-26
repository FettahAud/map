import * as THREE from "three";
import { Html } from "@react-three/drei";
import { MapControls, OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Map } from "./Map.jsx";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { gsap } from "gsap/gsap-core";

export default function Experience() {
  const { camera } = useThree();
  const controlsRef = useRef();

  const pointClick = (point) => {
    gsap.to(camera.position, {
      x: point[0],
      y: point[1] + 7,
      z: point[2] + 2,
    });
  };

  return (
    <>
      <Perf position="top-left" />
      {/*<OrbitControls makeDefault />*/}
      <MapControls
        ref={controlsRef}
        enableDamping
        args={[camera]}
        dampingFactor={0.1}
        enableZoom={true}
        enablePan={true}
        minDistance={1}
        maxDistance={50}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
        mouseButtons={{
          LEFT: THREE.MOUSE.PAN,
          MIDDLE: THREE.MOUSE.DOLLY,
          RIGHT: THREE.MOUSE.ROTATE,
        }}
      />
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      {/* <ambientLight intensity={0.5} /> */}
      <pointLight
        position={[1, 2, 3]}
        intensity={20}
        distance={5}
        color="red"
      />
      <Map scale={10} />
      <Html position={[10, 3, 4]} distanceFactor={10}>
        <div
          onClick={() => pointClick([10, 3, 4])}
          style={{
            backgroundColor: "rgba(255, 1, 1, 0.5)",
            width: "50px",
            height: "50px",
            padding: "10px",
            borderRadius: "50%",
            color: "white",
            textAlign: "center",
            lineHeight: "50px",
            fontSize: "30px",
          }}
        >
          1
        </div>
      </Html>
      <Html position={[-10, 3, 2]} distanceFactor={10}>
        <div
          onClick={() => pointClick([-10, 3, 2])}
          style={{
            backgroundColor: "rgba(255, 1, 1, 0.5)",
            width: "50px",
            height: "50px",
            padding: "10px",
            borderRadius: "50%",
            color: "white",
            textAlign: "center",
            lineHeight: "50px",
            fontSize: "30px",
          }}
        >
          2
        </div>
      </Html>
    </>
  );
}
