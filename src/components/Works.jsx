import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard =({index, name,description,tags,image,source_code_link})=>{

    return(
        <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
            <Tilt
                options={{
                    max:45,
                    scale:1,
                    speed:450,
                }}
                className="bg-[#161031] p-5 rounded-2xl w-[360px]"
            >
                <div className="relative w-full h-[230px]">
                    <img 
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div 
                            onClick={()=>window.open(source_code_link,"_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img 
                                src={github}
                                alt="github"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[12px]">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag)=>(
                        <p key={tag.name} className={`text-[12px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>

        </motion.div>


    )
}




const Works =()=>{

    return(
        <>
            <motion.div
                variants={textVariant()}
            >
                <p className={styles.sectionSubText}>
                    Do you know me well?
                </p>
                <h2 className={styles.sectionHeadText}>
                    Projects.
                </h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("","",0.1,1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    As a semi-aquatic creature, I spend most of my time in and around water bodies such as rivers, lakes, and marshes. 
                    I have a stout body with short legs and webbed feet, which make me an excellent swimmer. I often lurk in the water, 
                    patiently waiting for prey to pass by. Fish, small reptiles, and amphibians are some of my favorite foods.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project,index)=>(
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        
        </>
    )
}


export default SectionWrapper(Works,"work");













