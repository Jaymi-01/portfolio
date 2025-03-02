import React from 'react'
// import {
//     AiOutlineGithub,
//     AiOutlineInstagram,
//     AiOutlineLink,
//     AiOutlineLinkedin,
//     AiOutlineTwitter,
//   } from "react-icons/ai";
//   import {
//     DiCss3,
//     DiHtml5,
//     DiJavascript1,
//     DiReact,
//     DiPhp,
//   } from "react-icons/di";
//   import { 
//       RiFirebaseFill,
//       RiTailwindCssFill,
//   } from 'react-icons/ri'
//   import { SiMysql } from "react-icons/si";
import { motion, AnimatePresence  } from "framer-motion";
import { proficiency } from '/src/assets/constants/index';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};
const TechnicalSkills = () => {
  return (
    <motion.div
      className="mt-15 text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Trigger animation on scroll
      viewport={{ once: true }}
    >
      <h1 className="text-2xl md:text-4xl">Technical Proficiency</h1>
      <p className="opacity-50 mt-5">A comprehensive toolkit</p>
      <AnimatePresence>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10"
          variants={containerVariants}
        >
          {proficiency.map((option, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            >
              <div className="px-6 py-4 border border-neutral-900 bg-secondary/10 rounded-xl">
                <p className="text-xl">{option.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default TechnicalSkills