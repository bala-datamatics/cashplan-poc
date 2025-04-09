import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const IntermediariesListSection = (): JSX.Element => {
  // Data for the intermediaries list
  const intermediaries = [
    { id: "1235677780", isHighlighted: false },
    { id: "1909002016", isHighlighted: true },
    { id: "7896541236", isHighlighted: false },
    { id: "1123654789", isHighlighted: false, isAlternate: true },
    { id: "0022556699", isHighlighted: false },
    { id: "5566223311", isHighlighted: false, isAlternate: true },
    { id: "0011223366", isHighlighted: false },
    { id: "5599884411", isHighlighted: false, isAlternate: true },
  ];

  return (
    <div className="flex flex-col">
      <Table>
        <TableHeader>
          <TableRow className="shadow-border-bottom">
            <TableHead className="h-12 px-6 py-0">
              <div className="flex items-center gap-2">
                <span className="font-actions-s text-neutral-neutral-9 whitespace-nowrap">
                  ID
                </span>
                <div className="relative w-4 h-4">
                  <img
                    className="absolute w-[7px] h-[9px] top-1 left-1"
                    alt="Unsorted"
                    src="https://c.animaapp.com/m99lugy61ix3NT/img/unsorted.svg"
                  />
                </div>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {intermediaries.map((item, index) => (
            <TableRow
              key={index}
              className={`shadow-border-bottom ${
                item.isHighlighted
                  ? "bg-extended-palette-blue-lightest"
                  : item.isAlternate
                    ? "bg-neutral-neutral-1"
                    : "bg-neutral-neutral-0"
              }`}
            >
              <TableCell className="px-6 py-0 h-14">
                <div className="flex items-center gap-2">
                  <span className="font-desktop-body-s text-neutral-neutral-9 whitespace-nowrap">
                    {item.id}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
