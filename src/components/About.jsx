import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard=({index,title,icon})=>{
    return(
        <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        >
            <Tilt 
                className="w-[280px] sm:w-[250px] p-[1px] rounded-[20px] shadow-card bg-gradient-to-b from-[#925003] to-[#893404]"
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
            >
                {/**这里相当于放了两个卡片，后一个比前一个上下左右大1px，用padding=1px实现渐变边框 */}
                <div className="bg-brown rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
                
            </Tilt>
        </motion.div>
    );
}



const About=()=>{


    return(
        <>
            <motion.div variants={textVariant()}>
                <p
                    className={styles.sectionSubText}
                >Introduction</p>
                <h2
                    className={styles.sectionHeadText}
                >Overview.</h2>
            </motion.div>
        
            <motion.p 
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                My fur is soft and brown, and I have big, round eyes that sparkle with joy. I love to play in the water, catching fish and swimming all around. I'm a social creature too, and I enjoy spending time with my family and friends. I may be small, but I'm full of energy and always ready for adventure. So come on, let's have some fun together!
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-8">
                {services.map((service,index)=>
                    <ServiceCard key={service.title} index={index} {...service} />
                )}
            </div>
        
        </>
    )
}

export default SectionWrapper(About,"about");




