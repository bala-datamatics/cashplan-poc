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

export const TableContainerSection = (): JSX.Element => {
  // Data for table rows
  const tableData = [
    { name: "2 Plan Wealth Policy", isSelected: false, isAlternate: false },
    { name: "AN Capital LTD", isSelected: true, isAlternate: false },
    {
      name: "3 Secure Future Insurance",
      isSelected: false,
      isAlternate: false,
    },
    { name: "FutureGuard Holdings", isSelected: false, isAlternate: true },
    {
      name: "HealthWise Life Insurance",
      isSelected: false,
      isAlternate: false,
    },
    { name: "HealthNet Insurance Group", isSelected: false, isAlternate: true },
    { name: "2 Plan Wealth Policy", isSelected: false, isAlternate: false },
    { name: "FutureGuard Holdings", isSelected: false, isAlternate: true },
  ];

  return (
    <div className="flex flex-col">
      <Table>
        <TableHeader>
          <TableRow className="shadow-border-bottom">
            <TableHead className="h-12 px-6 py-0">
              <div className="flex items-center gap-2">
                <span className="font-actions-s text-neutral-neutral-9 text-[14px] leading-[21px] tracking-[0px] font-medium whitespace-nowrap">
                  Name
                </span>
                <ArrowUpDownIcon className="w-4 h-4" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow
              key={index}
              className={`shadow-border-bottom ${
                row.isSelected
                  ? "bg-extended-palette-blue-lightest"
                  : row.isAlternate
                    ? "bg-neutral-neutral-1"
                    : "bg-neutral-neutral-0"
              }`}
            >
              <TableCell className="px-6 py-0 h-14">
                <div className="flex items-center gap-2">
                  <span className="font-desktop-body-s text-neutral-neutral-9 text-[14px] leading-[21px] tracking-[0px] font-normal whitespace-nowrap">
                    {row.name}
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
