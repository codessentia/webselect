import { MobileNav } from "@/sections/Header/components/MobileNav";

export const MobileHeader = () => {
  return (
    <div className="backdrop-blur-lg bg-neutral-900/100 box-border caret-transparent block border-b border-solid border-white/20 md:hidden">
      <MobileNav />
    </div>
  );
};
