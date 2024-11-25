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
    <div className="grid h-dvh w-dvw items-center justify-items-center bg-black">
      <h1 className="text-4xl text-white">The Basics</h1>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-white">Anatomy of an Animation</h2>
        <AnimatedBox />
      </section>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-white">Transition Prop</h2>
        <h3 className="text-white text-xl">Spring Animation</h3>
        <SpringAnimatedBox />
        <h3 className="text-white text-xl">Easing Animation</h3>
        <EasingAnimatedBox />
      </section>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-white">Exit Animations</h2>
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
