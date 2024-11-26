"use client";

import { motion } from "motion/react";
import { useRef } from "react";

function Drag() {
  const boundingBox = useRef(null);

  return (
    <div className="w-96 overflow-hidden rounded-lg bg-gray-200 p-2">
      <div ref={boundingBox} className="h-64 w-full rounded-lg bg-white">
        <motion.div
          drag
          dragConstraints={boundingBox}
          dragMomentum={true}
          className="h-10 w-10 rounded-full bg-yellow-500"
        />
      </div>
    </div>
  );
}

export { Drag };
