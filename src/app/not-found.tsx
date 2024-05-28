import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/ui/scene/scene"), {
  ssr: false,
});

export default function NotFound() {
  return (
    <main className="relative h-screen">
      <Scene />
    </main>
  );
}
