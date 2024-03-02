import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/native";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        Plane004: THREE.Mesh;
        Plane004_1: THREE.Mesh;
        Plane004_2: THREE.Mesh;
    };
    materials: {
        ["NatureGrads.004"]: THREE.MeshStandardMaterial;
        NatureGrads: THREE.MeshStandardMaterial;
        ["Material.002"]: THREE.MeshStandardMaterial;
    };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF(require("../assets/wld3.glb")) as GLTFResult;
    return (
        <group {...props} dispose={null}>
            <group position={[-2.455, 5.129, 2.12]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004.geometry}
                    material={materials["NatureGrads.004"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004_1.geometry}
                    material={materials.NatureGrads}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004_2.geometry}
                    material={materials["Material.002"]}
                />
            </group>
        </group>
    );
}

useGLTF.preload(require('../assets/wld3.glb'));