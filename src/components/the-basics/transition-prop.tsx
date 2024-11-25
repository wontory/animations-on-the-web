"use client";

import { motion } from "motion/react";

function SpringAnimatedBox() {
  return (
    <motion.div
      initial={{ x: -150 }}
      animate={{
        x: 150,
        transition: { type: "spring", duration: 0.5, bounce: 0.2 },
      }}
      className="size-12 rounded-xl bg-yellow-500"
    />
  );
}

function EasingAnimatedBox() {
  return (
    <motion.div
      initial={{ x: -150 }}
      animate={{
        x: 150,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
      className="size-12 rounded-xl bg-yellow-500"
    />
  );
}

export { SpringAnimatedBox, EasingAnimatedBox };
