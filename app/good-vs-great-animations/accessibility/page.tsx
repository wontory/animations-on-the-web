import type { Metadata } from "next";

import { MultiStepComponent } from "~/components/good-vs-great-animations/accessibility/accessibility";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "",
};

export default function AccessibilityPage() {
  return (
    <>
      <h1 className="text-4xl text-white">Accessibility</h1>
      <section className="flex flex-col items-center gap-4">
        <MultiStepComponent />
      </section>
    </>
  );
}
