import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF("../../../public/otter/scene.gltf");

  return(
    <mesh>
      <hemisphereLight intensity={5} groundColor="black" />
      <pointLight intensity={5} />
      <spotLight 
        position={[-20, 50, 10]} 
        angle={0.12} 
        penumbra={1} 
        intensity={10000} 
        castShadow 
        shadow-mapSize={1024} 
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 4.5 : 6.5}
        position={isMobile ? [0, -2, 0] : [0,-3.25,-1]}
        rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  )

}

const ComputersCanvas =()=>{
  const [isMobile, setIsMobile]=useState(false);
  useEffect(()=>{
    const mediaQuery=window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange=(event)=>{
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener("change",handleMediaQueryChange);

    return()=>{
      mediaQuery.removeEventListener("change",handleMediaQueryChange);
    }
  },[])

  //这里的上面是先通过初始状态的设定定义了

  return(
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [30,3,5], fov: 15}}
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />

    </Canvas>
  )
}



export default ComputersCanvas;



