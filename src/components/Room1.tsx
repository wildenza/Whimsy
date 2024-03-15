

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/native";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        orange: THREE.Mesh;
    };
    materials: {
        ["NatureGrads.080"]: THREE.MeshStandardMaterial;
    };
};

export default function orange(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF(require('../assets/orange.glb')) as GLTFResult;
    return (
        <group {...props} dispose={null} position={[0.5, -2.5, -4]} rotation={[0,5.5,0]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.orange.geometry}
                material={materials["NatureGrads.080"]}
                position={[0.55, 1.211, 0.323]}
            />
        </group>
    );
}

useGLTF.preload(require('../assets/orange.glb'));