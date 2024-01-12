import React from 'react';
import PaperPlaneAnim from "../../components/PaperPlaneAnim/PaperPlaneAnim.jsx"
import { motion } from "framer-motion";
import './Home.css'
import AnimatedTextWord from '../../components/TextReveal/TextReval.js';
import { useTranslation } from 'react-i18next';

interface HomeProps {
  // You can add specific props if needed
}

const Home: React.FC<HomeProps> = () => {
  const { t }  = useTranslation();
  
  return (
    <div className="md:container md:mx-auto flex flex-row h-fit justify-around">
        <div className='flex flex-col mt-12 '>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <p className="text-strong-black xl:text-7xl font-semibold text-5xl md:mt-32">
              {t('welcome')}
            </p>
            <p className="text-strong-black   font-semibold xl:text-7xl text-5xl  ">{t('name_presentation')}</p>
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
            {t('description_presentation')}
          </motion.p>
          <AnimatedTextWord text={t('projects_callout')} />
        </div>
        <div className='mr-4 w-96 h-96 hidden lg:block lg:w-full d-none lg:h-full'>
          <PaperPlaneAnim />
        </div>
      </div>
  );
};

export default Home;
