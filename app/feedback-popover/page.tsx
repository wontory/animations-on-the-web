import type { Metadata } from "next";
import { FeedbackPopover } from "~/components/feedback-popover/button-to-popover";

export const metadata: Metadata = {
  title: "Feedback popover",
  description: "",
};

export default function FeedbackPopoverPage() {
  return (
    <>
      <h1 className="text-4xl text-white">Feedback popover</h1>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-white">Button to popover</h2>
        <FeedbackPopover />
      </section>
    </>
  );
}
