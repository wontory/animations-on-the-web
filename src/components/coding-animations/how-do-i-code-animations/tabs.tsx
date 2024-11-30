"use client";

import { motion } from "motion/react";
import { useState } from "react";

import { cn } from "~/utils/cn";

const TABS = [
  "SavedSites",
  "Collections",
  "48 Following",
  "32 Followers",
] as const;

function Tabs() {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <ul className="flex flex-col gap-2 sm:flex-row">
      {TABS.map((tab) => (
        <li
          className={cn(
            "relative cursor-pointer px-2 py-1 text-sm transition-colors",
            activeTab === tab ? "text-gray-200" : "text-gray-500",
          )}
          key={tab}
          onMouseEnter={() => setActiveTab(tab)}
        >
          {activeTab === tab ? (
            <motion.div
              transition={{ type: "spring", bounce: 0.3 }}
              layoutId="highlight"
              className="absolute inset-0 rounded-lg bg-white/10"
            />
          ) : null}
          {tab}
        </li>
      ))}
    </ul>
  );
}

export { Tabs };
