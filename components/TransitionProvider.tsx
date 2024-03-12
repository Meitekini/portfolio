"use client"

import { AnimatePresence, easeInOut, motion} from "framer-motion";

import { usePathname } from "next/navigation";
import NavBar from "./header/NavBar";

const transitionVariants = {
    initial: {
        x:" 100%",
        width: "100%"
    },
    animate: {
        x: "0%",
        width: "0%"
    },
    exit: {
        x: [ "0,","100%"],
        width: ["0,","100%"]
    }
}

function TransitionProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      <div key={pathname}  className="h-full">
      {/* <motion.div className="h-screen w-screen fixed top-0 bottom-0 right-full z-30 bg-[#2e2257]" 
      initial={{x:"100", width:"0vh"}}
      animate={{x:"0", width:"0vh"}}
       exit={{width:"100vh"}} 
      transition={{duration:2, ease:"easeOut"}}>
        1
      </motiv.div> */}

      <motion.div className="h-screen w-screen fixed top-0 bottom-0 right-full z-30 bg-[#2e2257]"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      transition={{duration:0.2, delay:0.6, ease:"easeOut"}}
      ></motion.div>
       <motion.div className="h-screen w-screen fixed top-0 bottom-0 right-full z-20 bg-[#3b2d71]"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      transition={{duration:0.4, delay:0.6, ease:"easeOut"}}
      ></motion.div>
       <motion.div className="h-screen w-screen fixed top-0 bottom-0 right-full z-10 bg-[#4b3792]"
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      transition={{duration:0.6, delay:0.6, ease:"easeOut"}}
      ></motion.div>
       <div>
        <NavBar />
       </div>
       <div>{children}</div>
      </div>
    </AnimatePresence>
  )
}


export default TransitionProvider