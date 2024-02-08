import { Hero } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-pink-200 min-h-screen flex-col">
      <Hero />
    </main>
  );
}
