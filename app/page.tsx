"use client"

import ProjectsBtn from "@/components/ProjectsBtn";
import {motion} from "framer-motion";
import {fadeIn} from "../variants"

export default function Home() {
  return (
    <div className="bg-primary/60 h-full ">  
      <div className="w-full h-full bg-gradient-to-r from-primary/10
       via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center items-center xl:pt-40 xl:text-left
        h-full container mx-auto">
          <h1 className="h1">Transforming Ideas <br/> Into{""} <span className="text-accent"> Digital Reality</span></h1>
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">Laboris ipsum consectetur in deserunt et laboris sunt veniam.</p>
          <div className="flex justify-center items-center xl:hidden relative">
            <ProjectsBtn/>
          </div>
          <motion.div 
          // fadeIn('down', 0.4)
              variants={fadeIn('down',0)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex">
            <ProjectsBtn/>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
