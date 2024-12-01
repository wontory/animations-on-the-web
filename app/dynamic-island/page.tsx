import type { Metadata } from "next";

import { DynamicIsland } from "~/components/dynamic-island/dynamic-island";

export const metadata: Metadata = {
  title: "Dynamic Island",
  description: "",
};

export default function DynamicIslandPage() {
  return (
    <>
      <h1 className="text-4xl text-white">Dynamic Island</h1>
      <section className="flex flex-col items-center gap-4">
        <DynamicIsland />
      </section>
    </>
  );
}
