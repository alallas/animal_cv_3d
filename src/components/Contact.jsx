import { useState,useEffect, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";



const Contact =()=>{
    const formRef =useRef();
    const[form, setForm]=useState({
        name:"",
        email:"",
        message:"",
    });
    const [loading, setLoading]=useState(false);

    const hanleChange=(e)=>{
        const { name, value } = e.target;
        setForm({...form,[name]: value});

    }


    //template_tn320up
    //service_f2ch7s1
    //SOIzM6-vDu7tuTH_K

    const handleSubmit=(e)=>{
        e.preventDefault();
        setLoading(true);
        emailjs.send(
            "service_f2ch7s1",
            "template_tn320up",
            {
                from_name:form.name,
                to_name:"llllyz",
                from_email:form.email,
                to_email:"798799155@qq.com",
                message:form.message,
            },
            "SOIzM6-vDu7tuTH_K"
        ).then(()=>{
            setLoading(false);
            alert("Thank you for your warm attention!")
            setForm({
                name:"",
                email:"",
                message:"",
            })
        },(error)=>{
            setLoading(false);
            console.log(error);
            alert("Something went wrong.")
        })
    }

    return(
        <div className="lg:mt-12 lg:flex-row flex-col-reverse flex gap-10 overflow-hidden">
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="lg:flex-1 bg-[#161031] p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your name</span>
                        <input 
                            type="text" 
                            name="name" 
                            value={form.name}
                            onChange={hanleChange}
                            placeholder="What is your name?"
                            className="bg-[#1d1543] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your email</span>
                        <input 
                            type="email" 
                            name="email" 
                            value={form.email}
                            onChange={hanleChange}
                            placeholder="What is your email?"
                            className="bg-[#1d1543] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your message</span>
                        <textarea 
                            rows="7"
                            name="message" 
                            value={form.message}
                            onChange={hanleChange}
                            placeholder="What do you want to say?"
                            className="bg-[#1d1543] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-[#1d1541] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="lg:flex-1 lg:h-suto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>

            <div>
                
            </div>
        </div>
    )
}


export default SectionWrapper(Contact,"contact");





