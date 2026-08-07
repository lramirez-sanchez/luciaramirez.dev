import HeroIntro from "./HeroIntro";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";
import Terminal from "@/components/terminal/Terminal";

export default function Hero() {
  return (
    <section className="min-h-screen overflow-hidden bg-gradient-to-b from-white to-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-between gap-24 px-10">

        <div className="max-w-2xl">

          <HeroIntro />

          <HeroDescription />

          <HeroButtons />

        </div>

        <Terminal />

      </div>
    </section>
  );
}