import type { Metadata } from "next";

import { MultiStepComponent } from "~/components/multi-step-component/step-animation";

export const metadata: Metadata = {
  title: "Multi-step component",
  description: "",
};

export default function FeedbackPopoverPage() {
  return (
    <>
      <h1 className="text-4xl text-white">Multi-step component</h1>
      <section className="flex flex-col items-center gap-4">
        <MultiStepComponent />
      </section>
    </>
  );
}
