import { Header } from "@/sections/Header";
import { MobileHeader } from "@/sections/Header/components/MobileHeader";
import { DesktopSidebar } from "@/components/DesktopSidebar";
import { MainContent } from "@/components/MainContent";

export const Layout = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="relative text-white bg-neutral-900 box-border caret-transparent min-h-[1000px]">
        <Header />
        <MobileHeader />
        <DesktopSidebar />
        <MainContent />
      </div>
    </div>
  );
};
