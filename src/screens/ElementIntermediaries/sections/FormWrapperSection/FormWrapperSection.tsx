import { ArrowUpDownIcon } from "lucide-react";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const FormWrapperSection = (): JSX.Element => {
  // Data for postcodes that we can map over
  const postcodes = [
    { code: "LS115BZ", selected: false },
    { code: "DA110DJ", selected: true },
    { code: "MT123CX", selected: false },
    { code: "QR145FY", selected: false, alternate: true },
    { code: "BX200DK", selected: false },
    { code: "ZN187MB", selected: false, alternate: true },
    { code: "MT123CX", selected: false },
    { code: "LS115BZ", selected: false, alternate: true },
  ];

  return (
    <div className="flex flex-col">
      <Table>
        <TableHeader>
          <TableRow className="shadow-border-bottom">
            <TableHead className="h-12 px-6 py-0">
              <div className="flex items-center gap-2">
                <span className="font-actions-s text-neutral-neutral-9 text-[14px] leading-[21px] tracking-[0px] font-medium whitespace-nowrap">
                  Postcode
                </span>
                <ArrowUpDownIcon className="w-4 h-4" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {postcodes.map((postcode, index) => (
            <TableRow
              key={index}
              className={`shadow-border-bottom ${postcode.selected ? "bg-extended-palette-blue-lightest" : postcode.alternate ? "bg-neutral-neutral-1" : "bg-neutral-neutral-0"}`}
            >
              <TableCell className="h-14 px-6 py-0">
                <div className="flex items-center gap-2">
                  <span className="font-desktop-body-s text-neutral-neutral-9 text-[14px] leading-[21px] tracking-[0px] font-normal whitespace-nowrap">
                    {postcode.code}
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
