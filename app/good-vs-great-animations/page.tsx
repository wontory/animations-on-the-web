import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Good vs Great animations",
  description: "",
};

export default function GoodVsGreatAnimationsPage() {
  return (
    <>
      <h1 className="text-4xl text-white">Good vs Great animations</h1>
      <section className="flex flex-col items-center gap-4">
        <ul className="flex flex-col gap-2 text-white">
          <li>
            <Link href="/good-vs-great-animations/accessibility">
              Accessibility
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
