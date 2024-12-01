"use client";

import { motion } from "motion/react";
import { useMemo, useState } from "react";

import { Ring } from "~/components/dynamic-island/ring";

function DynamicIsland() {
  const [view, setView] = useState("idle");

  const content = useMemo(() => {
    switch (view) {
      case "ring":
        return <Ring />;
      case "idle":
        return <div className="h-7" />;
    }
  }, [view]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex h-48 justify-center rounded-3xl bg-white p-4">
        <motion.div
          layout
          style={{ borderRadius: 9999 }}
          className="h-fit min-w-[100px] overflow-hidden bg-black"
        >
          {content}
        </motion.div>
      </div>
      <div className="flex justify-center gap-4">
        <button
          type="button"
          className="h-10 w-32 rounded-full bg-white px-2.5 py-1.5 font-medium text-gray-900 text-sm shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
          onClick={() => setView("idle")}
        >
          Idle
        </button>
        <button
          type="button"
          className="h-10 w-32 rounded-full bg-white px-2.5 py-1.5 font-medium text-gray-900 text-sm shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
          onClick={() => setView("ring")}
        >
          Ring
        </button>
      </div>
    </div>
  );
}

export { DynamicIsland };
