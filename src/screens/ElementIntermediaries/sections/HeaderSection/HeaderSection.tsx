import { ArrowUpDownIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";

export const HeaderSection = (): JSX.Element => {
  // Data for status rows to enable mapping
  const statusRows = [
    { status: "Approved", highlighted: false },
    { status: "Approved", highlighted: true },
    { status: "Approved", highlighted: false },
    { status: "Approved", highlighted: true },
    { status: "Approved", highlighted: false },
    { status: "Approved", highlighted: true },
    { status: "Approved", highlighted: false },
    { status: "Approved", highlighted: true },
  ];

  return (
    <div className="flex flex-col w-full items-start relative">
      {/* Header row with status label and sort icon */}
      <div className="w-full bg-neutral-neutral-0 shadow-border-bottom">
        <div className="h-12 px-6 flex items-center gap-2">
          <span className="font-actions-s text-neutral-neutral-9 whitespace-nowrap">
            Status
          </span>
          <ArrowUpDownIcon className="w-4 h-4" />
        </div>
      </div>

      {/* Status rows with Approved badges */}
      {statusRows.map((row, index) => (
        <div
          key={index}
          className={`w-full ${row.highlighted ? "bg-neutral-neutral-1" : row.highlighted === true && index === 1 ? "bg-extended-palette-blue-lightest" : "bg-neutral-neutral-0"} shadow-border-bottom`}
        >
          <div className="h-14 px-6 flex items-center">
            <Badge className="bg-extended-palette-lime-dark text-neutral-neutral-0 font-actions-XS border border-[#639c13] rounded-[100px] px-2.5 h-6">
              {row.status}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
};
