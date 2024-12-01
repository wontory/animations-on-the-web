"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

import { Ring } from "~/components/dynamic-island/ring";
import { Timer } from "~/components/dynamic-island/timer";

const variants = {
  exit: (
    transition: (typeof ANIMATION_VARIANTS)[keyof typeof ANIMATION_VARIANTS],
  ) => {
    return {
      ...transition,
      opacity: [1, 0],
      filter: "blur(5px)",
    };
  },
} as const;

const ANIMATION_VARIANTS = {
  "ring-idle": {
    scale: 0.9,
    scaleX: 0.9,
    bounce: 0.5,
  },
  "timer-ring": {
    scale: 0.7,
    y: -7.5,
    bounce: 0.35,
  },
  "ring-timer": {
    scale: 1.4,
    y: 7.5,
    bounce: 0.35,
  },
  "timer-idle": {
    scale: 0.7,
    y: -7.5,
    bounce: 0.3,
  },
} as const;

const BOUNCE_VARIANTS = {
  idle: 0.5,
  "ring-idle": 0.5,
  "timer-ring": 0.35,
  "ring-timer": 0.35,
  "timer-idle": 0.3,
  "idle-timer": 0.3,
  "idle-ring": 0.5,
} as const;

const VIEWS = ["idle", "ring", "timer"] as const;

function DynamicIsland() {
  const [view, setView] = useState<(typeof VIEWS)[number]>("idle");
  const [variantKey, setVariantKey] =
    useState<keyof typeof BOUNCE_VARIANTS>("idle");

  const content = useMemo(() => {
    switch (view) {
      case "ring":
        return <Ring />;
      case "timer":
        return <Timer />;
      case "idle":
        return <div className="h-7" />;
    }
  }, [view]);

  return (
    <div className="flex h-48 flex-col gap-4">
      <div className="relative flex h-full w-full flex-col justify-between rounded-3xl bg-white p-4">
        <motion.div
          layout
          transition={{
            type: "spring",
            bounce: BOUNCE_VARIANTS[variantKey],
          }}
          style={{ borderRadius: 32 }}
          className="mx-auto w-fit min-w-[100px] overflow-hidden rounded-full bg-black"
        >
          <motion.div
            transition={{
              type: "spring",
              bounce: BOUNCE_VARIANTS[variantKey],
            }}
            initial={{
              scale: 0.9,
              opacity: 0,
              filter: "blur(5px)",
              originX: 0.5,
              originY: 0.5,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              originX: 0.5,
              originY: 0.5,
              transition: {
                delay: 0.05,
              },
            }}
            key={view}
          >
            {content}
          </motion.div>
        </motion.div>

        <div className="-translate-x-1/2 pointer-events-none absolute top-4 left-1/2 flex h-[200px] w-[300px] items-start justify-center">
          <AnimatePresence
            mode="popLayout"
            custom={
              ANIMATION_VARIANTS[variantKey as keyof typeof ANIMATION_VARIANTS]
            }
          >
            <motion.div
              initial={{ opacity: 0 }}
              exit="exit"
              variants={variants}
              key={view}
            >
              {content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="flex w-full justify-center gap-4">
        {VIEWS.map((v) => (
          <button
            type="button"
            className="h-10 w-32 rounded-full bg-white px-2.5 py-1.5 font-medium text-gray-900 text-sm capitalize shadow-sm ring-1 ring-gray-300/50 ring-inset hover:bg-gray-50"
            onClick={() => {
              setView(v);
              setVariantKey(`${view}-${v}` as keyof typeof BOUNCE_VARIANTS);
            }}
            key={v}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}

export { DynamicIsland };
