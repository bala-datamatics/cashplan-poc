import React from "react";

export const HeaderSection = (): JSX.Element => {
  // Data for the header information
  const headerItems = [
    {
      label: "SIC Code",
      value: "Computer Software and Services",
    },
    {
      label: "Business Sector",
      value: "Software Development",
    },
    {
      label: "No of Employees",
      value: "100",
    },
    {
      label: "Organisation ID",
      value: "-",
    },
  ];

  return (
    <div className="flex items-center gap-[100px] w-full py-4">
      {headerItems.map((item, index) => (
        <div key={index} className="flex flex-col items-start">
          <div className="font-desktop-body-s text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] whitespace-nowrap [font-style:var(--desktop-body-s-font-style)]">
            {item.label}
          </div>
          <div className="font-desktop-body-s text-neutral-neutral-9 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] whitespace-nowrap [font-style:var(--desktop-body-s-font-style)]">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
};
