import type { Metadata } from "next";

import { FamilyDrawer } from "~/components/family-drawer/family-drawer";

export const metadata: Metadata = {
  title: "Family Drawer",
  description: "",
};

export default function FamilyDrawerPage() {
  return (
    <>
      <h1 className="text-4xl text-white">Family Drawer</h1>
      <section className="flex flex-col items-center gap-4">
        <FamilyDrawer />
      </section>
    </>
  );
}
