import { HeroSection } from "@/sections/HeroSection";

export const Header = () => {
  return (
    <header className="relative bg-[linear-gradient(to_right_bottom,rgb(18,18,18),rgb(26,26,26),rgb(0,0,0))] box-border caret-transparent overflow-hidden ml-0 md:ml-60">
      <div className="absolute bg-[linear-gradient(to_right,rgba(232,75,39,0.1),rgba(0,0,0,0),rgba(232,75,39,0.1))] box-border caret-transparent inset-0"></div>
      <div className="absolute bg-orange-600/10 box-border caret-transparent blur-3xl h-96 translate-x-[-50.0%] w-96 rounded-full left-2/4 top-0"></div>
      <HeroSection />
    </header>
  );
};
