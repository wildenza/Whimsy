/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/native";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        Object_0: THREE.Mesh;
        Object_0_1: THREE.Mesh;
        Object_0_2: THREE.Mesh;
        Object_0_3: THREE.Mesh;
        Object_0_4: THREE.Mesh;
        Object_0_5: THREE.Mesh;
        Object_0_6: THREE.Mesh;
        Object_0_7: THREE.Mesh;
        Object_0_8: THREE.Mesh;
        Object_0_9: THREE.Mesh;
        Object_0_10: THREE.Mesh;
        Object_0_11: THREE.Mesh;
        Object_0_12: THREE.Mesh;
        Object_0_13: THREE.Mesh;
        Object_0_14: THREE.Mesh;
        Object_0_15: THREE.Mesh;
    };
    materials: {
        ["brown-5"]: THREE.MeshStandardMaterial;
        ["green-3"]: THREE.MeshStandardMaterial;
        brown: THREE.MeshStandardMaterial;
        ["grey-5"]: THREE.MeshStandardMaterial;
        ["red-2"]: THREE.MeshStandardMaterial;
        material_0: THREE.MeshStandardMaterial;
        white: THREE.MeshStandardMaterial;
        material: THREE.MeshStandardMaterial;
        ["yellow-5"]: THREE.MeshStandardMaterial;
        ["green-2"]: THREE.MeshStandardMaterial;
        ["blue-2"]: THREE.MeshStandardMaterial;
        ["grey-6"]: THREE.MeshStandardMaterial;
        ["grey-4"]: THREE.MeshStandardMaterial;
        black: THREE.MeshStandardMaterial;
        ["orange.001"]: THREE.MeshStandardMaterial;
        ["grey-2"]: THREE.MeshStandardMaterial;
    };
};

export default function Room1(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF(require('../assets/Room1.glb')) as GLTFResult;
    return (
        <group {...props} dispose={null}>
            {/*<group position={[0.2, -0.3, 1.2]} rotation={[Math.PI / 8, Math.PI / -5, 0]}>*/}
            <group position={[0.2, -0.3, 1.2]} rotation={[0,-0.5,0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0.geometry}
                    material={materials["brown-5"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_1.geometry}
                    material={materials["green-3"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_2.geometry}
                    material={materials.brown}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_3.geometry}
                    material={materials["grey-5"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_4.geometry}
                    material={materials["red-2"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_5.geometry}
                    material={materials.material_0}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_6.geometry}
                    material={materials.white}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_7.geometry}
                    material={materials.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_8.geometry}
                    material={materials["yellow-5"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_9.geometry}
                    material={materials["green-2"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_10.geometry}
                    material={materials["blue-2"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_11.geometry}
                    material={materials["grey-6"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_12.geometry}
                    material={materials["grey-4"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_13.geometry}
                    material={materials.black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_14.geometry}
                    material={materials["orange.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_0_15.geometry}
                    material={materials["grey-2"]}
                />
            </group>
        </group>
    );
}

useGLTF.preload(require('../assets/Room1.glb'));
