import React from "react";
import { motion } from "framer-motion";

// Define a type for the component props
interface Props {
  children: React.ReactNode;
  delay?: number;
  width?: string;
}

const SlideUpAnimation = React.forwardRef<HTMLDivElement, Props>(
  ({ children, delay = 0.5, width = "w-full" }, ref) => {
    const variants = {
      visible: { opacity: 1, translateY: 0 },
      hidden: { opacity: 0, translateY: 50 },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible" // Animará para 'visible' quando entrar na viewport
        variants={variants}
        viewport={{ once: true }} // Garante que a animação só aconteça uma vez
        className={`${width}`}
        transition={{
          duration: 0.9,
          ease: [0.17, 0.55, 0.55, 1],
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    );
  }
);

export default SlideUpAnimation;
