import { Text, useGLTF, Float, MeshTransmissionMaterial } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function Model() {
  const { viewport } = useThree();
  const { nodes } = useGLTF("/models/shards.glb");

  return (
    <group scale={viewport.width / 1.5}>
      {nodes.Scene.children.map((mesh, i) => (
        <Mesh key={i} data={mesh} />
      ))}
      <Font />
    </group>
  );
}

function Font() {
  const textOption = {
    color: "white",
    anchorX: "center",
    anchorY: "middle",
  };

  return (
    <group>
      <Text position={[0, 0, -0.1]} fontSize={0.3} {...(textOption as any)}>
        404
      </Text>
      <Text position={[0, -0.15, -0.1]} fontSize={0.02} {...(textOption as any)}>
        Page not found
      </Text>
    </group>
  );
}

function Mesh({ data }: any) {
  return (
    <Float>
      <mesh {...data}>
        <MeshTransmissionMaterial
          roughness={0}
          transmission={0.99}
          thickness={0.275}
          ior={0.8}
          chromaticAberration={0.75}
          resolution={300}
        />
      </mesh>
    </Float>
  );
}
