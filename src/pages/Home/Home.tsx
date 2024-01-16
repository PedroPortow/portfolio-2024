import React from "react";
import PaperPlaneAnim from "../../components/PaperPlaneAnim/PaperPlaneAnim.jsx";
import { motion } from "framer-motion";
import "./Home.css";
import AnimatedTextWord from "../../components/TextReveal/TextReval.js";
import { useTranslation } from "react-i18next";

const Home = React.forwardRef<HTMLDivElement>(({}, ref) => {
  const { t } = useTranslation();

  return (
    <div
      className="md:container md:mx-auto max-w-sm flex flex-row h-fit justify-between"
      ref={ref}
    >
      <div className="flex flex-col mt-12 ">
        <motion.div
          variants={{
            hidden: {
              y: 75,
              scale: 1,
              opacity: 0,
              transition: {
                type: "spring",
                stiffness: 30,
                damping: 15,
                duration: 0.2,  
              },
              },
              visible: { 
                y: 0,
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 75,
                  damping: 15,
                  duration: 0.2,
                },
              
              },
            }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.2, delay: 0.25, ease: "easeInOut" }}
        >
          <p className="text-strong-black xl:text-7xl font-semibold text-5xl md:mt-32">
            {t("welcome")}
          </p>
        </motion.div>
        <motion.div
          variants={{
            hidden: {
              y: 75,
              scale: 1,
              opacity: 0,
              transition: {
                type: "spring",
                stiffness: 30,
                damping: 15,
                duration: 0.2,
                delay: 0.3
              },
              },
              visible: { 
                y: 0,
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 75,
                  damping: 15,
                  duration: 0.2,
                  delay: 0.3
                },
              
              },
            }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.2, delay: 0.75, ease: "easeInOut" }}
        >
          <p className="text-strong-black text-nowrap font-semibold xl:text-7xl text-5xl">
            {t("name_presentation")}
          </p>
        </motion.div>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-light-gray text-nowrap text-lg font-light w-2/3 mt-4 "
        >
          {t("description_presentation")}
        </motion.p>
        <AnimatedTextWord text={t("projects_callout")} />
      </div>
      <div style={{ perspective: "1000px" }}>
        <motion.div
          className="mr-4 w-96 relative h-96 hidden lg:flex lg:w-full z-50 d-none lg:h-[700px]"
          variants={{
            hidden: {
              opacity: 1,
              x: -1200,
              y: -200,
              scale: 0.5,
              rotateX: 45,
              rotateY: 0,
              rotateZ: -20,
              transition: {
                type: "spring",
                stiffness: 150,
                damping: 25,
                duration: 2,
              },
            },
            visible: {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
              transition: {
                type: "spring",
                stiffness: 30,
                damping: 25,
                duration: 2,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <PaperPlaneAnim />
        </motion.div>
      </div>
    </div>
  );
});

export default Home;
