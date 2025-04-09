import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const IntermediaryDetailsSection = (): JSX.Element => {
  // Data for the address column
  const addressData = [
    { name: "BUPA Testing", selected: false },
    { name: "BUPA", selected: true },
    { name: "BUPA", selected: false },
    { name: "BUPA Testing", selected: false, alternate: true },
    { name: "BUPA", selected: false },
    { name: "BUPA Testing", selected: false, alternate: true },
    { name: "BUPA", selected: false },
    { name: "BUPA Testing", selected: false, alternate: true },
  ];

  return (
    <div className="flex flex-col w-full">
      <Table>
        <TableHeader>
          <TableRow className="shadow-border-bottom">
            <TableHead className="h-12 bg-neutral-neutral-0">
              <div className="flex items-center gap-2">
                <span className="font-actions-s text-neutral-neutral-9 text-[14px] leading-[21px] font-medium whitespace-nowrap">
                  Address
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
          {addressData.map((item, index) => (
            <TableRow
              key={index}
              className={`shadow-border-bottom ${
                item.selected
                  ? "bg-extended-palette-blue-lightest"
                  : item.alternate
                    ? "bg-neutral-neutral-1"
                    : "bg-neutral-neutral-0"
              }`}
            >
              <TableCell className="p-0">
                <div className="h-14 px-6 flex items-center">
                  <span className="font-desktop-body-s text-neutral-neutral-9 text-[14px] leading-[21px] font-normal whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button className="self-end mt-2 bg-brandprimary-base text-white">
        Select
      </Button>
    </div>
  );
};
