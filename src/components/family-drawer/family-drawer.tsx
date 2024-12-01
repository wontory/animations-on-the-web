"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { Drawer } from "vaul";

import {
  DefaultView,
  Key,
  Phrase,
  RemoveWallet,
} from "~/components/family-drawer/components";
import { CloseIcon } from "~/components/family-drawer/icons";

function FamilyDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState("default");
  const [elementRef, bounds] = useMeasure();
  const previousHeightRef = useRef<number>(0);

  const content = useMemo(() => {
    switch (view) {
      case "default":
        return <DefaultView setView={setView} />;
      case "remove":
        return <RemoveWallet setView={setView} />;
      case "phrase":
        return <Phrase setView={setView} />;
      case "key":
        return <Key setView={setView} />;
    }
  }, [view]);

  const opacityDuration = useMemo(() => {
    const MIN_DURATION = 0.15;
    const MAX_DURATION = 0.27;

    if (!previousHeightRef.current) {
      previousHeightRef.current = bounds.height;
      return MIN_DURATION;
    }

    const heightDifference = Math.abs(
      bounds.height - previousHeightRef.current,
    );
    previousHeightRef.current = bounds.height;

    const duration = Math.min(
      Math.max(heightDifference / 500, MIN_DURATION),
      MAX_DURATION,
    );

    return duration;
  }, [bounds.height]);

  return (
    <>
      <button
        type="button"
        className="h-[44px] rounded-full border border-gray-200 bg-white px-4 py-2 font-medium text-black transition-colors hover:bg-[#F9F9F8] focus-visible:shadow-focus-ring-button md:font-medium"
        onClick={() => setIsOpen(true)}
      >
        Try it out
      </button>
      <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Portal>
          <Drawer.Overlay
            className="data-[vaul-overlay]:!transition-opacity data-[vaul-overlay]:!duration-200 data-[vaul-overlay]:!ease-[cubic-bezier(0.165,0.84,0.44,1)] fixed inset-0 z-10 bg-black/30"
            onClick={() => setIsOpen(false)}
          />
          <Drawer.Content
            asChild
            className="data-[vaul-drawer]:!transition-transform data-[vaul-drawer]:!duration-200 data-[vaul-drawer]:!ease-[cubic-bezier(0.165,0.84,0.44,1)] fixed inset-x-4 bottom-4 z-10 mx-auto max-w-[361px] overflow-hidden rounded-[36px] bg-[#FEFFFE] outline-none md:mx-auto md:w-full"
          >
            <motion.div
              animate={{
                height: bounds.height,
                transition: {
                  duration: 0.27,
                  ease: [0.25, 1, 0.5, 1],
                },
              }}
            >
              <Drawer.Close asChild>
                <button
                  type="button"
                  data-vaul-no-drag=""
                  className="absolute top-7 right-8 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F8F9] text-[#949595] transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-75"
                >
                  <CloseIcon />
                </button>
              </Drawer.Close>
              <div ref={elementRef} className="px-6 pt-2.5 pb-6 antialiased">
                <AnimatePresence initial={false} mode="popLayout" custom={view}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    key={view}
                    transition={{
                      duration: opacityDuration,
                      ease: [0.26, 0.08, 0.25, 1],
                    }}
                  >
                    {content}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

export { FamilyDrawer };
