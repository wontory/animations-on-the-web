"use client";

import { CheckIcon, CopyIcon, SymbolIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function ToggleBox() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div className="h-12">
        <AnimatePresence>
          {isVisible ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="size-12 rounded-xl bg-yellow-500"
            />
          ) : null}
        </AnimatePresence>
      </div>
      <button
        type="button"
        onClick={() => setIsVisible((prev) => !prev)}
        className="rounded-lg bg-white px-4 py-2 text-sm"
      >
        {isVisible ? "Hide" : "Show"}
      </button>
    </>
  );
}

function CopyButton() {
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const [copied, setCopied] = useState(false);

  const copy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <button
      type="button"
      aria-label="Copy code snippet"
      onClick={copy}
      className="flex size-12 items-center justify-center rounded-md bg-gray-50 text-gray-800 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="checkmark"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <CheckIcon className="size-6" />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <CopyIcon className="size-6" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

function SmoothButton() {
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
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={buttonState}
          transition={{ type: "spring", bounce: 0, duration: 0.3 }}
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 25, opacity: 0 }}
          className="flex w-full items-center justify-center text-white"
        >
          {buttonCopy[buttonState]}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export { ToggleBox, CopyButton, SmoothButton };
