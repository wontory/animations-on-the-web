import Link from "next/link";

export default function CodingAnimationsPage() {
  return (
    <>
      <h1 className="text-4xl text-white">Coding animations</h1>
      <section className="flex flex-col items-center gap-4">
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
    </>
  );
}
