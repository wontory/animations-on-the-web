"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";

function ToggleHeight() {
  const [showExtraContent, setShowExtraContent] = useState(false);
  const [elementRef, bounds] = useMeasure();

  return (
    <>
      <button
        type="button"
        className="rounded-lg bg-white px-4 py-2 text-sm"
        onClick={() => setShowExtraContent((b) => !b)}
      >
        Toggle height
      </button>
      <motion.div
        animate={{ height: bounds.height }}
        className="flex w-80 flex-col gap-2 overflow-hidden rounded-2xl bg-white"
      >
        <div className="px-4 py-3" ref={elementRef}>
          <h1 className="font-semibold">Fake Family Drawer</h1>
          <p className="text-gray-500">
            This is a fake family drawer. Animating height is tricky, but
            satisfying when it works.
          </p>
          {showExtraContent ? (
            <p className="text-gray-500">
              This extra content will change the height of the drawer. Some even
              more content to make the drawer taller and taller and taller...
            </p>
          ) : null}
        </div>
      </motion.div>
    </>
  );
}

export { ToggleHeight };
