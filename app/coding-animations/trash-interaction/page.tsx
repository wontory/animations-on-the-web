import type { Metadata } from "next";

import { TrashAnimation } from "~/components/coding-animations/trash-interaction/trash-animation";

export const metadata: Metadata = {
  title: "Trash interaction",
  description: "",
};

export default function TrashInteractionPage() {
  return (
    <>
      <h1 className="text-4xl text-white">Trash interaction</h1>
      <section className="flex flex-col items-center gap-4">
        <TrashAnimation />
      </section>
    </>
  );
}
