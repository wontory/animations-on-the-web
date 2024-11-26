"use client";

import { motion } from "motion/react";
import { useState } from "react";

import { cn } from "~/utils/cn";

function LayoutAnimations() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      onClick={() => setOpen((o) => !o)}
      className={cn(
        "z-50 size-12 bg-yellow-500",
        open ? "fixed inset-0 size-full" : "size-12",
      )}
      layout
    />
  );
}

export { LayoutAnimations };
