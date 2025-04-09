import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const ContactsSection = (): JSX.Element => {
  // Data for tabs to make the component more maintainable
  const tabItems = [
    { id: "contacts", label: "Contacts" },
    { id: "sales", label: "Sales Activities" },
    { id: "prospect", label: "Prospect Details" },
  ];

  return (
    <div className="w-full">
      <Tabs defaultValue="sales" className="w-full">
        <TabsList className="w-full grid grid-cols-3 h-[55px] p-0 bg-transparent">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={`h-full rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:text-neutral-neutral-9 data-[state=active]:font-actions-s data-[state=active]:font-medium data-[state=inactive]:text-neutral-neutral-7 data-[state=inactive]:font-desktop-body-s data-[state=inactive]:font-normal relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 data-[state=active]:after:bg-brandprimary-base data-[state=inactive]:after:bg-neutral-neutral-5 data-[state=inactive]:after:h-px`}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
