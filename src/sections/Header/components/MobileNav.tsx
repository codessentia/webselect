import { MobileLogo } from "@/sections/Header/components/MobileLogo";
import { MenuButton } from "@/components/MenuButton";

export const MobileNav = () => {
  return (
    <div className="items-center box-border caret-transparent flex justify-between px-4 py-2">
      <MobileLogo />
      <MenuButton />
    </div>
  );
};
