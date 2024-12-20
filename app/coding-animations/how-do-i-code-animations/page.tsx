import type { Metadata } from "next";

import { AppStoreLikeTransition } from "~/components/coding-animations/how-do-i-code-animations/app-store-like-transition";
import { Drag } from "~/components/coding-animations/how-do-i-code-animations/drag";
import { LayoutAnimations } from "~/components/coding-animations/how-do-i-code-animations/layout-animations";
import { LayoutId } from "~/components/coding-animations/how-do-i-code-animations/layout-id";
import { Modals } from "~/components/coding-animations/how-do-i-code-animations/modals";
import { MotionValue } from "~/components/coding-animations/how-do-i-code-animations/motion-value";
import { Tabs } from "~/components/coding-animations/how-do-i-code-animations/tabs";
import { ToggleHeight } from "~/components/coding-animations/how-do-i-code-animations/toggle-height";

export const metadata: Metadata = {
  title: "How do I code animations",
  description: "",
};

export default function HowDoICodeAnimationsPage() {
  return (
    <>
      <h1 className="text-4xl text-white">How do I code animations</h1>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-white">Layout animations</h2>
        <LayoutAnimations />
      </section>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-white">Shared layout animations</h2>
        <h3 className="text-white text-xl">Tabs</h3>
        <Tabs />
        <h3 className="text-white text-xl">layoutId</h3>
        <LayoutId />
        <h3 className="text-white text-xl">Modals</h3>
        <Modals />
      </section>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-white">Animating height</h2>
        <ToggleHeight />
      </section>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-white">Gestures</h2>
        <Drag />
      </section>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-white">useTransform</h2>
        <MotionValue />
      </section>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-white">App Store-like transition</h2>
        <AppStoreLikeTransition />
      </section>
    </>
  );
}
