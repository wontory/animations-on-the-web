import type { Metadata } from "next";

import { FeedbackPopover } from "~/components/coding-animations/feedback-popover/button-to-popover";

export const metadata: Metadata = {
  title: "Feedback popover",
  description: "",
};

export default function FeedbackPopoverPage() {
  return (
    <>
      <h1 className="text-4xl text-white">Feedback popover</h1>
      <section className="flex flex-col items-center gap-4">
        <FeedbackPopover />
      </section>
    </>
  );
}
