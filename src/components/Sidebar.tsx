import { SidebarHeader } from "@/components/SidebarHeader";
import { ContactSection } from "@/sections/ContactSection";

export const Sidebar = () => {
  return (
    <aside className="fixed bg-neutral-900 box-border caret-transparent h-[1000px] w-60 border-orange-600 overflow-auto border-r border-solid left-0 top-0">
      <SidebarHeader />
      <ContactSection />
    </aside>
  );
};
