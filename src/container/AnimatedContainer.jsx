import React from "react";
import { motion } from "framer-motion";

const AnimatedContainer = ({ children, className }) => {
  return (
    <motion.section
      className={className}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedContainer;
