"use client";

import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "motion/react";
import { useMemo, useState } from "react";
import useMeasure from "react-use-measure";

const reducedMotionVariants = {
  initial: { opacity: 0 },
  active: { opacity: 1 },
  exit: { opacity: 0 },
};

const variants = {
  initial: (direction: 1 | -1) => ({ x: `${110 * direction}%`, opacity: 0 }),
  active: { x: "0%", opacity: 1 },
  exit: (direction: 1 | -1) => ({ x: `${-110 * direction}%`, opacity: 0 }),
};

function MultiStepComponent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [elementRef, bounds] = useMeasure();
  const reducedMotion = useReducedMotion();

  const content = useMemo(() => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <h2 className="mb-2 font-semibold">This is step one</h2>
            <p>
              Usually in this step we would explain why this thing exists and
              what it does. Also, we would show a button to go to the next step.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <div className="h-4 w-64 animate-pulse rounded-md bg-[#f2f1f0]" />
              <div className="h-4 w-48 animate-pulse rounded-md bg-[#f2f1f0]" />
              <div className="h-4 w-full animate-pulse rounded-md bg-[#f2f1f0]" />
              <div className="h-4 w-[384px] animate-pulse rounded-md bg-[#f2f1f0]" />
            </div>
          </>
        );
      case 1:
        return (
          <>
            <h2 className="mb-2 font-semibold">This is step two</h2>
            <p>
              Usually in this step we would explain why this thing exists and
              what it does. Also, we would show a button to go to the next step.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <div className="h-4 w-64 animate-pulse rounded-md bg-[#f2f1f0]" />
              <div className="h-4 w-48 animate-pulse rounded-md bg-[#f2f1f0]" />
              <div className="h-4 w-[384px] animate-pulse rounded-md bg-[#f2f1f0]" />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="mb-2 font-semibold">This is step three</h2>
            <p>
              Usually in this step we would explain why this thing exists and
              what it does. Also, we would show a button to go to the next step.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <div className="h-4 w-64 animate-pulse rounded-md bg-[#f2f1f0]" />
              <div className="h-4 w-48 animate-pulse rounded-md bg-[#f2f1f0]" />
              <div className="h-4 w-32 animate-pulse rounded-md bg-[#f2f1f0]" />
              <div className="h-4 w-56 animate-pulse rounded-md bg-[#f2f1f0]" />
              <div className="h-4 w-[384px] animate-pulse rounded-md bg-[#f2f1f0]" />
            </div>
          </>
        );
    }
  }, [currentStep]);

  return (
    <MotionConfig transition={{ type: "spring", duration: 0.5, bounce: 0 }}>
      <motion.div
        animate={reducedMotion ? {} : { height: bounds.height }}
        className="relative mx-auto my-[100px] w-[550px] overflow-hidden rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08),0px_2px_2px_rgba(0,0,0,0.04),0px_8px_8px_-8px_rgba(0,0,0,0.04)]"
      >
        <div className="p-6" ref={elementRef}>
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={currentStep}
              variants={reducedMotion ? reducedMotionVariants : variants}
              initial="initial"
              animate="active"
              exit="exit"
              custom={direction}
            >
              {content}
            </motion.div>
          </AnimatePresence>
          <motion.div
            layout={!reducedMotion}
            className="mt-8 flex justify-between"
          >
            <button
              type="button"
              className="h-8 w-20 cursor-pointer rounded-full font-medium text-[#63635d] text-sm shadow-[0_0_0_1px_rgba(0,0,0,0.08),0px_2px_2px_rgba(0,0,0,0.04),0px_8px_8px_-8px_rgba(0,0,0,0.04)] hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
              disabled={currentStep === 0}
              onClick={() => {
                if (currentStep !== 0) {
                  setDirection(-1);
                  setCurrentStep((prev) => prev - 1);
                }
              }}
            >
              Back
            </button>
            <button
              type="button"
              className="relative h-8 w-[120px] overflow-hidden rounded-full bg-gradient-to-b from-sky-500 to-blue-500 font-semibold text-[white] text-sm shadow-[0px_0px_1px_1px_rgba(255,255,255,0.08)_inset,0px_1px_1.5px_0px_rgba(0,0,0,0.32),0px_0px_0px_0.5px_#1a94ff] disabled:cursor-not-allowed disabled:opacity-50"
              disabled={currentStep === 2}
              onClick={() => {
                if (currentStep === 2) {
                  setDirection(-1);
                  setCurrentStep(0);
                } else {
                  setDirection(1);
                  setCurrentStep((prev) => prev + 1);
                }
              }}
            >
              Continue
            </button>
          </motion.div>
        </div>
      </motion.div>
    </MotionConfig>
  );
}

export { MultiStepComponent };
