import React from "react";
import { motion } from "framer-motion";

// Define a type for the component props
interface Props {
  isVisible: boolean;
  children: React.ReactNode;
  delay?: number | 0.5;
  width?: string | "w-full";
}

const SlideUpAnimation = React.forwardRef<HTMLDivElement, Props>(
  ({ isVisible, children, delay = 0.5, width = "w-full" }, ref) => {
    const variants = {
      visible: { opacity: 1, translateY: 0 },
      hidden: { opacity: 0, translateY: 100 },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants}
        className={width}
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
