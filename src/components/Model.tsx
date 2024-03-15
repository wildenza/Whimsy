
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/native";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        Cube_Material004_0: THREE.Mesh;
        Cube_Material003_0: THREE.Mesh;
        Cylinder001_Material002_0: THREE.Mesh;
        Cylinder002_Material002_0: THREE.Mesh;
        Cube001_Material002_0: THREE.Mesh;
        Cube002_Material002_0: THREE.Mesh;
        Cube004_Material002_0: THREE.Mesh;
        Cube005_Material002_0: THREE.Mesh;
        Cube003_Material002_0: THREE.Mesh;
        Cone_Material002_0: THREE.Mesh;
        Cylinder_Material002_0: THREE.Mesh;
        Sphere__0: THREE.Mesh;
    };
    materials: {
        ["Material.004"]: THREE.MeshStandardMaterial;
        ["Material.003"]: THREE.MeshStandardMaterial;
        ["Material.002"]: THREE.MeshStandardMaterial;
        Sphere__0: THREE.MeshStandardMaterial;
    };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF(require("../assets/gamepad.glb")) as GLTFResult;
    return (
        <group {...props} dispose={null}>
            <group scale={0.009}>
                <group
                    position={[10, 30, 10]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[172.968, 87.105, 233.924]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube_Material004_0.geometry}
                        material={materials["Material.004"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube_Material003_0.geometry}
                        material={materials["Material.003"]}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001_Material002_0.geometry}
                    material={materials["Material.002"]}
                    position={[-44.224, 123.787, 81.303]}
                    rotation={[Math.PI, 0, Math.PI / 2]}
                    scale={[35.327, 35.327, 13.928]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002_Material002_0.geometry}
                    material={materials["Material.002"]}
                    position={[-112.342, 62.559, 81.303]}
                    rotation={[Math.PI, 0, Math.PI / 2]}
                    scale={[35.327, 35.327, 13.928]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_Material002_0.geometry}
                    material={materials["Material.002"]}
                    position={[111.292, 100.148, 86.444]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[13.601, 7.674, 47.462]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_Material002_0.geometry}
                    material={materials["Material.002"]}
                    position={[111.292, 100.148, 86.444]}
                    rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                    scale={[13.601, 7.674, 47.462]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004_Material002_0.geometry}
                    material={materials["Material.002"]}
                    position={[69.928, 364.675, 70.145]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[18.568, 10.477, 29.714]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube005_Material002_0.geometry}
                    material={materials["Material.002"]}
                    position={[10.052, 269.905, 73.183]}
                    rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                    scale={[16.225, 9.155, 60.591]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003_Material002_0.geometry}
                    material={materials["Material.002"]}
                    position={[-48.906, 364.675, 70.145]}
                    rotation={[Math.PI / 2, 0, Math.PI]}
                    scale={[18.568, 10.477, 29.714]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cone_Material002_0.geometry}
                    material={materials["Material.002"]}
                    position={[0, 489.549, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[70.289, 70.289, 20.369]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_Material002_0.geometry}
                    material={materials["Material.002"]}
                    position={[0, 544.926, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[6.254, 6.254, 55.891]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere__0.geometry}
                    material={materials.Sphere__0}
                    position={[0, 611.583, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={20.016}
                />
            </group>
        </group>
    );
}

useGLTF.preload(require("../assets/gamepad.glb"));
