"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";

const skills = [
  "IBM MQ", "IIB", "ACE", "DataPower", "WSRR",
  "Java", "SQL", "COBOL", "Git", "Python",
  "Docker", "Kubernetes", "OpenShift", "Linux",
  "REST", "SOAP", "JMS", "TCP/IP",
  "CI/CD", "Azure DevOps", "DB2", "ETL",
  "AS400", "JCL",
];

function SkillNode({ position, label }: { position: [number, number, number]; label: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const baseY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        baseY + Math.sin(state.clock.elapsedTime + position[0]) * 0.15;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#3d8b5e"
          emissive="#3d8b5e"
          emissiveIntensity={0.5}
        />
      </mesh>
      <Text
        position={[position[0], position[1] - 0.3, position[2]]}
        fontSize={0.15}
        color="#7a9982"
        anchorX="center"
        anchorY="top"
      >
        {label}
      </Text>
    </group>
  );
}

function Connections({ positions }: { positions: [number, number, number][] }) {
  const lineGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const dist = new THREE.Vector3(...positions[i]).distanceTo(
          new THREE.Vector3(...positions[j])
        );
        if (dist < 3) {
          points.push(new THREE.Vector3(...positions[i]));
          points.push(new THREE.Vector3(...positions[j]));
        }
      }
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [positions]);

  return (
    <lineSegments geometry={lineGeometry}>
      <lineBasicMaterial color="#1a3a28" transparent opacity={0.4} />
    </lineSegments>
  );
}

function Particles() {
  const count = 200;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial color="#1a3a28" size={0.03} transparent opacity={0.6} />
    </points>
  );
}

function Scene() {
  const positions: [number, number, number][] = useMemo(() => {
    return skills.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / skills.length);
      const theta = Math.sqrt(skills.length * Math.PI) * phi;
      const r = 3.2;
      return [
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi),
      ] as [number, number, number];
    });
  }, []);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#4ade80" />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#3d8b5e" />

      <group ref={groupRef}>
        {skills.map((skill, i) => (
          <SkillNode key={skill} position={positions[i]} label={skill} />
        ))}
        <Connections positions={positions} />
      </group>

      <Particles />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(3 * Math.PI) / 4}
      />
    </>
  );
}

export default function SkillsCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
      <Scene />
    </Canvas>
  );
}
