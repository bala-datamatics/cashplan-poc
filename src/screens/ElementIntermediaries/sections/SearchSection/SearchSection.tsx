import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const SearchSection = (): JSX.Element => {
  // Data for the table rows
  const rows = [
    { id: 1, value: "-", highlighted: false, alternating: false },
    { id: 2, value: "-", highlighted: true, alternating: false },
    { id: 3, value: "-", highlighted: false, alternating: false },
    { id: 4, value: "-", highlighted: false, alternating: true },
    { id: 5, value: "-", highlighted: false, alternating: false },
    { id: 6, value: "-", highlighted: false, alternating: true },
    { id: 7, value: "-", highlighted: false, alternating: false },
    { id: 8, value: "-", highlighted: false, alternating: true },
  ];

  return (
    <div className="flex flex-col">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="shadow-border-bottom bg-neutral-neutral-0">
            <TableHead className="h-12 px-6 py-0">
              <div className="flex items-center gap-2">
                <span className="font-actions-s text-neutral-neutral-9 whitespace-nowrap">
                  Network Name
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
          {rows.map((row) => (
            <TableRow
              key={row.id}
              className={`shadow-border-bottom ${
                row.highlighted
                  ? "bg-extended-palette-blue-lightest"
                  : row.alternating
                    ? "bg-neutral-neutral-1"
                    : "bg-neutral-neutral-0"
              }`}
            >
              <TableCell className="px-6 py-0 h-14">
                <div className="flex items-center gap-2">
                  <span className="font-desktop-body-s text-neutral-neutral-9 whitespace-nowrap">
                    {row.value}
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
