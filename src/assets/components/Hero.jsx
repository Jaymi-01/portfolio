import React from "react";
import me from "/src/assets/me.jpg";
import CV from "/src/assets/joel.pdf";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";


const Hero = () => {
    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = CV;
        link.download = "joel.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
    <div className="mt-24 relative">
        <div className="grid md:grid-cols-2 gap-8 ">
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
                        "IT Support",
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
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg my-6"
                >
                    <span className="font-script">I'm Joel Miller</span>, a frontend developer passionate about crafting engaging user experiences.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                    <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                        className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto px-4 py-2 border
                                     border-primary rounded-xl hover:bg-primary" onClick={handleDownloadCV}     
                    >
                        Download CV
                    </motion.button>

                </motion.div>
            </motion.div>

            <div className="place-items-center">
                <motion.img 
                src={me}
                className="w-[200px] md:w-[350px] rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                />
            </div>
            
        </div>

        {/* <motion.div
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
            

        </motion.div> */}
        
    </div>
  )
}

export default Hero