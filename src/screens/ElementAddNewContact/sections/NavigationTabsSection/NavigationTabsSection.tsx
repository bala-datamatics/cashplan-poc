import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const NavigationTabsSection = (): JSX.Element => {
  // Data for the navigation tabs
  const tabItems = [
    { id: "contact", label: "Contact", isActive: true },
    { id: "details", label: "Details", isActive: false },
    { id: "marketing", label: "Marketing", isActive: false },
  ];

  return (
    <div className="w-full">
      <Tabs defaultValue="contact" className="w-full">
        <TabsList className="w-full grid grid-cols-3 h-[55px] p-0 bg-transparent">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={`h-full rounded-none data-[state=active]:shadow-none relative
                data-[state=active]:bg-transparent data-[state=active]:text-neutral-neutral-9 data-[state=active]:font-medium
                data-[state=inactive]:text-neutral-neutral-7 data-[state=inactive]:font-normal
                font-actions-s text-[14px] leading-[21px]
                after:absolute after:h-0.5 after:w-full after:bottom-0 after:left-0
                data-[state=active]:after:bg-brandprimary-base data-[state=inactive]:after:bg-neutral-neutral-5 data-[state=inactive]:after:h-px`}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
