import { WebsitesSection } from "@/sections/WebsitesSection";
import { TemplatesSection } from "@/sections/TemplatesSection";
import { ToolsSection } from "@/sections/ToolsSection";
import { ResourcesSection } from "@/sections/ResourcesSection";

export const ContentSections = () => {
  return (
    <div className="box-border caret-transparent px-5 py-20 md:px-20">
      <div className="box-border caret-transparent pb-20 px-5 md:px-20">
        <WebsitesSection />
        <TemplatesSection />
        <ToolsSection />
        <ResourcesSection />
      </div>
    </div>
  );
};
