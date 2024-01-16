import React from "react";
import { motion } from "framer-motion";

// Define a type for the component props
interface AnimatedTextWordProps {
  text: string;
}

const AnimatedTextWord: React.FC<AnimatedTextWordProps> = ({ text }) => {
  const words = text.split(" ");

  // Variants for Container of words.
  const container: any = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.
  const child: any = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.p
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
          className='text-light-gray text-lg font-light mt-12 '
        >
          {word}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
