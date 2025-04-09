import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const TabsSection = (): JSX.Element => {
  // Tab data for easy mapping
  const tabItems = [
    { id: "contacts", label: "Contacts", isActive: false },
    { id: "sales-activities", label: "Sales Activities", isActive: true },
    { id: "prospect-details", label: "Prospect Details", isActive: false },
  ];

  return (
    <div className="w-full">
      <Tabs defaultValue="sales-activities" className="w-full">
        <TabsList className="w-full grid grid-cols-3 p-0 h-[55px]">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={`h-full rounded-none data-[state=active]:shadow-none relative
                ${
                  tab.isActive
                    ? "font-actions-s font-[number:var(--actions-s-font-weight)] text-neutral-neutral-9 text-[length:var(--actions-s-font-size)] tracking-[var(--actions-s-letter-spacing)] leading-[var(--actions-s-line-height)] [font-style:var(--actions-s-font-style)]"
                    : "font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutral-neutral-7 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]"
                }
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] 
                after:bg-neutral-neutral-5 data-[state=active]:after:h-0.5 data-[state=active]:after:bg-brandprimary-base`}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
