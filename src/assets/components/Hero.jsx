import React from "react";
import profilepic from "/src/assets/profilepic.jpg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiPhp,
} from "react-icons/di";
import { 
    RiFirebaseFill,
    RiTailwindCssFill,
} from 'react-icons/ri'
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
        <div className="grid md:grid-cols-2 place-items-center gap-8 ">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <TypeAnimation
                    sequence={[
                        "Frontend Developer",
                        1000,
                        "Designer",
                        1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold font-script text-gray-400 text-xl md:text-5xl italic- mb-4"
                />

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                >
                    HEY, I AM <br/>
                    <span className="text-primary">Joel Miller</span>
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 font-script max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                >
                    I'm a frontend developer passionate about crafting engaging user experiences.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                    <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                                     border-primary rounded-xl"     
                    >
                        Download CV
                    </motion.button>

                    <div className="flex gap-6 flex-row text-4xl md:text-6xl text-primary z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="#">
                            <AiOutlineGithub/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="#">
                            <AiOutlineLinkedin/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="#">
                            <AiOutlineTwitter/>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>


            <motion.img 
                src={profilepic}
                className="w-[300px] md:w-[450px] rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-col text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
        >
            <p className="text-gray-200 mr-6">My Skills</p>
            <div className="grid grid-cols-4 gap-2 justify-center items-center mt-2">
              <DiHtml5 className="text-orange-600 mx-2" />
              <DiCss3 className="text-blue-600 mx-2" />
              <DiJavascript1 className="text-yellow-500 mx-2" />
              <DiReact className="text-blue-500 mx-2" />
              <RiTailwindCssFill className='text-blue-900' />
              <RiFirebaseFill className='text-orange-500' />
              <SiMysql className="text-mysql" />
              <DiPhp className='text-blue-900' />
              </div>
            

        </motion.div>

        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={400} />
        </div>
        
    </div>
  )
}

export default Hero