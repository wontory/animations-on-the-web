"use client";

import { motion } from "motion/react";

function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className="size-12 rounded-xl bg-yellow-500"
    />
  );
}

export { AnimatedBox };
