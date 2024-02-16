"use client";
import { useParams } from "next/navigation";
import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";

const Team: FC<{ children: ReactNode }> = ({ children }) => {
  const { id } = useParams();

  const divVariants = {
    animate: { x: 0, opacity: 1 },
    initial: {
      x: -20,
      opacity: 0,
    },
  };

  const listVariants = {
    visible: (idx: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 * idx,
      },
    }),
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          repeatDelay: 1.5,
          type: "spring",
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        Round
      </motion.div>
      <div></div>
      <div>I am id inside template {id}</div>
      <div>{children}</div>
      <motion.div
        animate={"animate"}
        initial={"initial"}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: 150,
          height: 20,
          background: "red",
          border: "4px dotted black",
          borderRadius: 10,
        }}
        variants={divVariants}
        whileHover={{ background: "blue", scale: 1.3 }}
      ></motion.div>
      <ul>
        {Array.from({ length: 3 }).map((_, idx) => (
          <motion.li
            variants={listVariants}
            initial={"hidden"}
            animate={"visible"}
            custom={idx}
          >
            Test + {++idx}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Team;
