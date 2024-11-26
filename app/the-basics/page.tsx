import { AnimatedBox } from "~/components/the-basics/anatomy-of-an-animation";
import {
  CopyButton,
  SmoothButton,
  ToggleBox,
} from "~/components/the-basics/exit-animations";
import {
  EasingAnimatedBox,
  SpringAnimatedBox,
} from "~/components/the-basics/transition-prop";
import { RefactoredSmoothButton } from "~/components/the-basics/variants";

export default function TheBasics() {
  return (
    <div className="grid min-h-dvh max-w-dvw items-center justify-items-center gap-20 bg-black text-center">
      <h1 className="text-4xl text-white">The Basics</h1>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-white">Anatomy of an animation</h2>
        <AnimatedBox />
      </section>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-white">Transition prop</h2>
        <h3 className="text-white text-xl">Spring animation</h3>
        <SpringAnimatedBox />
        <h3 className="text-white text-xl">Easing animation</h3>
        <EasingAnimatedBox />
      </section>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-white">Exit animations</h2>
        <ToggleBox />
        <CopyButton />
        <SmoothButton />
      </section>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-white">Variants</h2>
        <RefactoredSmoothButton />
      </section>
    </div>
  );
}
