import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./Loader.css"

interface LoaderProps {
  isVisible: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }} // Duração da transição de saída
          className="fixed inset-0 z-50 bg-white justify-center flex flex-col items-center gap-y-4"
        >
         <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
