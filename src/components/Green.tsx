import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/native";
import { GLTF } from "three-stdlib";
import { useFrame } from '@react-three/fiber/native';

type GLTFResult = GLTF & {
    nodes: {
        HAIODATA: THREE.Mesh;
    };
    materials: {
        ["NatureGrads.112"]: THREE.MeshStandardMaterial;
    };
};
export default function Green(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF(require('../assets/green.glb')) as GLTFResult;
    const groupRef = useRef<THREE.Group>();

//rotate ca-l omor
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.005;
        }
    });

    return (
        <group {...props} dispose={null} ref={groupRef}>
            <group position={[0.5, -2.5, -4]} rotation={[0,5.5,0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.HAIODATA.geometry}
                    material={materials["NatureGrads.112"]}
                    position={[0.55, 1.211, 0.323]}
                />
            </group>
        </group>
    );
}

useGLTF.preload(require('../assets/green.glb'));

