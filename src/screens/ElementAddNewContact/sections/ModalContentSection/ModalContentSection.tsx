import React from "react";
import { Separator } from "../../../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const ModalContentSection = (): JSX.Element => {
  // Tab data for easy mapping
  const tabItems = [
    { id: "contact", label: "Contact", isActive: true },
    { id: "details", label: "Details", isActive: false },
    { id: "marketing", label: "Marketing", isActive: false },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-2.5">
      <Separator className="w-full" />

      <Tabs defaultValue="contact" className="w-full">
        <TabsList className="w-full h-[55px] grid grid-cols-3 p-0 bg-transparent">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={`h-full rounded-none data-[state=active]:shadow-none relative
                ${
                  tab.isActive
                    ? "font-actions-s text-neutral-neutral-9 font-medium"
                    : "font-desktop-body-s text-neutral-neutral-7 font-normal"
                }
              `}
            >
              {tab.label}
              <div
                className={`absolute bottom-0 left-0 w-full h-0.5 
                  ${tab.isActive ? "bg-brandprimary-base" : "bg-neutral-neutral-5"}`}
              />
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
