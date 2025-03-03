import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { projects } from '/src/assets/constants/index';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between each child animation
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
const Project = () => {
    return (
        <motion.div
          className="pt-15 text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Trigger animation on scroll
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-3xl font-semibold">Projects</h1>
          <p className="opacity-70 mt-8">
            Showcasing my latest works and experiment
          </p>
          <AnimatePresence>
            <motion.div
              className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-10 px-10 mx-auto"
              variants={containerVariants}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                >
                  <div className="mt-10 px-6 py-4 border border-neutral-900 bg-secondary/10 rounded-xl">
                    <div>
                      <h1 className="text-xl">{project.title}</h1>
                      <p className="text-sm mt-2 text-primary font-bold">
                        {project.tools}
                      </p>
                    </div>
                    <div className="text-sm mt-2 opacity-50">
                      <p>{project.text}</p>
                    </div>
                    <div className="mt-2 group">
                      <a
                        className="text-sm text-white hover:text-primary flex items-center"
                        target="_blank"
                        href={project.link}
                        rel="noopener noreferrer"
                      >
                        View Project
                        {project.icon &&
                          React.cloneElement(project.icon, {
                            className: "ml-2 group-hover:text-primary",
                          })}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      );
}

export default Project