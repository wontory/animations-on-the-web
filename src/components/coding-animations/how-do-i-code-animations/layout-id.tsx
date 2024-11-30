"use client";

import { motion } from "motion/react";
import { useState } from "react";

function LayoutId() {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <>
      <button
        type="button"
        className="rounded-lg bg-white px-4 py-2"
        onClick={() => setShowSecond((s) => !s)}
      >
        Animate
      </button>
      <div className="flex size-24 items-center justify-center">
        {showSecond ? (
          <motion.div
            layoutId="box"
            className="size-24 rounded-xl bg-yellow-500"
          />
        ) : (
          <motion.div
            layoutId="box"
            className="size-12 rounded-xl bg-yellow-500"
          />
        )}
      </div>
    </>
  );
}

export { LayoutId };
