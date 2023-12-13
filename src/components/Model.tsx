/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei/native";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        w_1: THREE.Mesh;
    };
    materials: {
        kalkan: THREE.MeshStandardMaterial;
    };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF(require('../assets/Shield2.glb')) as GLTFResult;

    return (
        <group {...props} dispose={null} >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.w_1.geometry}
                material={materials.kalkan}
            />
        </group>
    );
}
console.log('load')
useGLTF.preload(require('../assets/Shield2.glb'));