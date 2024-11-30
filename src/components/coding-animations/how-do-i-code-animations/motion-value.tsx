"use client";

import { motion, useMotionValue, useTransform } from "motion/react";

function MotionValue() {
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 100], [1, 0]);

  return (
    <div className="h-40">
      <motion.div
        onPan={(_, info) => y.set(info.offset.y)}
        onPanEnd={() => y.set(0)}
        style={{ y, opacity }}
        className="h-10 w-10 cursor-grab rounded-full bg-yellow-500"
      />
    </div>
  );
}

export { MotionValue };
