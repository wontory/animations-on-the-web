import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1 className="text-4xl text-white">Animations on the web</h1>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-white">
          <Link href="/coding-animations">Coding animations</Link>
        </h2>
        <ul className="flex flex-col gap-2 text-white">
          <li>
            <Link href="/coding-animations/the-basics">The Basics</Link>
          </li>
          <li>
            <Link href="/coding-animations/how-do-i-code-animations">
              How do I code animations
            </Link>
          </li>
          <li>
            <Link href="/coding-animations/feedback-popover">
              Feedback popover
            </Link>
          </li>
          <li>
            <Link href="/coding-animations/multi-step-component">
              Multi-step component
            </Link>
          </li>
          <li>
            <Link href="/coding-animations/trash-interaction">
              Trash interaction
            </Link>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-white">
          <Link href="/good-vs-great-animations">Good vs Great animations</Link>
        </h2>
        <ul className="flex flex-col gap-2 text-white">
          <li>
            <Link href="/good-vs-great-animations/accessibility">
              Accessibility
            </Link>
          </li>
        </ul>
      </section>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-white">
          <Link href="/family-drawer">Family Drawer</Link>
        </h2>
      </section>
      <section className="flex flex-col items-center gap-4">
        <h2 className="text-2xl text-white">
          <Link href="/dynamic-island">Dynamic Island</Link>
        </h2>
      </section>
    </>
  );
}
