"use client";

import { SymbolIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function AnimatedState({
  children,
  className,
  state,
}: { children: React.ReactNode; className?: string; state: string }) {
  const variants = {
    initial: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 25 },
  };

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={state}
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{ type: "spring", duration: 0.3, bounce: 0 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function RefactoredSmoothButton() {
  const buttonCopy = {
    idle: "Send me a login link",
    loading: <SymbolIcon className="size-4 animate-spin" />,
    success: "Login link sent!",
  };

  const [buttonState, setButtonState] =
    useState<keyof typeof buttonCopy>("idle");

  return (
    <button
      type="button"
      className="relative h-8 w-36 overflow-hidden rounded-lg bg-gradient-to-b from-sky-500 to-blue-500 font-medium text-sm shadow"
      disabled={buttonState !== "idle"}
      onClick={() => {
        if (buttonState === "success") return;

        setButtonState("loading");

        setTimeout(() => {
          setButtonState("success");
        }, 1750);

        setTimeout(() => {
          setButtonState("idle");
        }, 3500);
      }}
    >
      <AnimatedState
        className="flex w-full items-center justify-center text-white"
        state={buttonState}
      >
        {buttonCopy[buttonState]}
      </AnimatedState>
    </button>
  );
}

export { AnimatedState, RefactoredSmoothButton };
