import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";



const Hero =()=>{


    return(
        <section className="relative w-full h-screen mx-auto">
            <div className={`${styles.paddingX} absolute inset-0 top-[120px] 
                max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#741F0F]" />
                    <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#741F0F]" />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className="text-[#741F0F]">Capybara.</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                    A cute and cuddly river otter!
                    </p>
                </div>
            </div>

            <ComputersCanvas />

            <div className="absolute xs:bottom-10 botttom-10 w-full flex justify-center items-center z-10">
                <a href="#about">
                    {/**这里的结构就是外部控制相对于外部的位置，内部控制大小 */}
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        
                        <motion.div 
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-white mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}


export default Hero;


