import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const TabsContainerSection = (): JSX.Element => {
  const tabItems = [
    { id: "general", label: "General", active: true },
    { id: "group", label: "Group", active: false },
    { id: "payments", label: "Payments", active: false },
  ];

  return (
    <div className="w-full">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="w-full grid grid-cols-3 p-0 h-[55px]">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={`h-full rounded-none data-[state=active]:shadow-none relative
                data-[state=active]:text-neutral-neutral-9 data-[state=active]:font-[500]
                data-[state=inactive]:text-neutral-neutral-7 data-[state=inactive]:font-[400]
                font-actions-s text-[14px] tracking-[0px] leading-[21px]
                after:absolute after:h-[1px] after:w-full after:bottom-0 after:left-0 after:bg-neutral-neutral-5
                data-[state=active]:after:h-[2px] data-[state=active]:after:bg-brandprimary-base`}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
