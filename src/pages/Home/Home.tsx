import React from 'react';
import PaperPlaneAnim from "../../components/PaperPlaneAnim/PaperPlaneAnim.jsx"
import { motion, useMotionValue, useTransform } from "framer-motion";
import './Home.css'
import AnimatedTextWord from '../../components/TextReveal/TextReval.js';

interface HomeProps {
  // You can add specific props if needed
}

const Home: React.FC<HomeProps> = () => {
  return (
      <div className="md:container md:mx-auto flex h-fit justify-around">
        <div className='flex flex-col mt-12 '>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25,  }}
          >
            <p className="text-strong-black text-7xl font-semibold mt-32">
              Welcome!
            </p>
            <p className="text-strong-black text-7xl font-semibold ">I'm Pedro Porto</p>
          </motion.div>
        
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            className='text-light-gray text-lg font-light w-2/3 mt-4'
          >
            I'm a Full stack web developer and a Computer Science student passionate about building seamless user experiences
          </motion.p>
          <AnimatedTextWord text="You can check out some of my personal projects below" />
          {/* <p className='text-light-gray text-lg font-light w-2/3 mt-12 cursor-pointer underline-from-left'>You can check out some of my personal projects below  </p> */}
        </div>
        <div className='mr-4'>
          <PaperPlaneAnim />
        </div>
      </div>
  );
};

export default Home;
