import { MoreHorizontalIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const SalesActivitiesTableSection = (): JSX.Element => {
  // Table data for mapping
  const tableData = [
    {
      id: "1909002015",
      name: "Atlas",
      type: "New Business",
      product: "Cash Plan",
      intermediary: "Real Solutions",
      portfolioManager: "Hautice Texer",
      salesChannel: "Fax",
      campaignCode: "0001",
      status: "Converted",
      lastActivity: "05/03/2025",
    },
    {
      id: "1909002016",
      name: "Aquene",
      type: "New Business",
      product: "Cash Plan",
      intermediary: "Cash Plan",
      portfolioManager: "Vespera Lumin",
      salesChannel: "Other",
      campaignCode: "0002",
      status: "Open",
      lastActivity: "02/03/2025",
    },
    {
      id: "1909002017",
      name: "Cash Plan M",
      type: "New Business",
      product: "Cash Plan",
      intermediary: "Cash Plan",
      portfolioManager: "Nexis Ombra",
      salesChannel: "Coupon",
      campaignCode: "0003",
      status: "Open",
      lastActivity: "01/03/2025",
    },
    {
      id: "1909002018",
      name: "Dynamo",
      type: "New Business",
      product: "Cash Plan",
      intermediary: "Real Solutions",
      portfolioManager: "Zentara Flux",
      salesChannel: "Coupon",
      campaignCode: "0004",
      status: "Converted",
      lastActivity: "12/02/2025",
    },
    {
      id: "1909002019",
      name: "Echo",
      type: "New Business",
      product: "Cash Plan",
      intermediary: "-",
      portfolioManager: "Orbis Celestia",
      salesChannel: "Fax",
      campaignCode: "0005",
      status: "Converted",
      lastActivity: "10/02/2025",
    },
    {
      id: "1909002020",
      name: "Helios",
      type: "New Business",
      product: "Cash Plan",
      intermediary: "Real Solutions",
      portfolioManager: "Aetherium Vale",
      salesChannel: "Fax",
      campaignCode: "0006",
      status: "Open",
      lastActivity: "8/02/2025",
    },
    {
      id: "1909002021",
      name: "Cash Plan",
      type: "New Business",
      product: "Cash Plan",
      intermediary: "Cash Plan",
      portfolioManager: "Cynthia Nocturne",
      salesChannel: "Other",
      campaignCode: "0007",
      status: "Converted",
      lastActivity: "28/01/2025",
    },
    {
      id: "1909002022",
      name: "Quantum",
      type: "New Business",
      product: "Cash Plan",
      intermediary: "Cash Plan",
      portfolioManager: "Lunaris Echo",
      salesChannel: "Lapsed",
      campaignCode: "0008",
      status: "Open",
      lastActivity: "20/01/2025",
    },
    {
      id: "1909002023",
      name: "Aquene",
      type: "New Business",
      product: "Cash Plan",
      intermediary: "Real Solutions",
      portfolioManager: "Solara Pulse",
      salesChannel: "Fax",
      campaignCode: "0009",
      status: "Converted",
      lastActivity: "16/01/2025",
    },
    {
      id: "1909002024",
      name: "Cash Plan",
      type: "New Business",
      product: "Cash Plan",
      intermediary: "Real Solutions",
      portfolioManager: "Vespera Lumin",
      salesChannel: "Fax",
      campaignCode: "0010",
      status: "Open",
      lastActivity: "10/01/2025",
    },
  ];

  // Column headers with sorting indicators
  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "type", label: "Type" },
    { key: "product", label: "Product" },
    { key: "intermediary", label: "Intermediary" },
    { key: "portfolioManager", label: "Portfolio Manger" },
    { key: "salesChannel", label: "Sales Channel" },
    { key: "campaignCode", label: "Campaign Code" },
    { key: "status", label: "Status" },
    { key: "lastActivity", label: "Date Of Last Activity" },
    { key: "actions", label: "" },
  ];

  return (
    <div className="w-full bg-neutral-neutral-0 border border-solid border-[#ced4da] overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead
                key={column.key}
                className="h-12 bg-neutral-neutral-0 shadow-border-bottom font-actions-s text-neutral-neutral-9 text-[length:var(--actions-s-font-size)] leading-[var(--actions-s-line-height)] tracking-[var(--actions-s-letter-spacing)] [font-style:var(--actions-s-font-style)]"
              >
                <div className="flex items-center gap-2">
                  {column.label}
                  {column.key !== "actions" && column.label && (
                    <div className="relative w-4 h-4">
                      <img
                        className="absolute top-1 left-1 w-[7px] h-[9px]"
                        alt="Unsorted"
                        src="https://c.animaapp.com/m99n8ruzeMpeiP/img/unsorted.svg"
                      />
                    </div>
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow
              key={row.id}
              className={
                index % 2 === 0
                  ? "bg-neutral-neutral-0"
                  : "bg-neutral-neutral-1"
              }
            >
              <TableCell className="h-14 shadow-border-bottom font-desktop-body-s">
                <span
                  className={`text-brandprimary-base underline font-[number:var(--desktop-body-s-font-weight)] text-[length:var(--desktop-body-s-font-size)] leading-[var(--desktop-body-s-line-height)] tracking-[var(--desktop-body-s-letter-spacing)] [font-style:var(--desktop-body-s-font-style)]`}
                >
                  {row.id}
                </span>
              </TableCell>
              <TableCell className="h-14 shadow-border-bottom font-desktop-body-s text-neutral-neutral-9 text-[length:var(--desktop-body-s-font-size)] leading-[var(--desktop-body-s-line-height)] tracking-[var(--desktop-body-s-letter-spacing)] [font-style:var(--desktop-body-s-font-style)]">
                {row.name}
              </TableCell>
              <TableCell className="h-14 shadow-border-bottom font-desktop-body-s text-neutral-neutral-9 text-[length:var(--desktop-body-s-font-size)] leading-[var(--desktop-body-s-line-height)] tracking-[var(--desktop-body-s-letter-spacing)] [font-style:var(--desktop-body-s-font-style)]">
                {row.type}
              </TableCell>
              <TableCell className="h-14 shadow-border-bottom font-desktop-body-s text-neutral-neutral-9 text-[length:var(--desktop-body-s-font-size)] leading-[var(--desktop-body-s-line-height)] tracking-[var(--desktop-body-s-letter-spacing)] [font-style:var(--desktop-body-s-font-style)]">
                {row.product}
              </TableCell>
              <TableCell className="h-14 shadow-border-bottom font-desktop-body-s text-neutral-neutral-9 text-[length:var(--desktop-body-s-font-size)] leading-[var(--desktop-body-s-line-height)] tracking-[var(--desktop-body-s-letter-spacing)] [font-style:var(--desktop-body-s-font-style)]">
                {row.intermediary}
              </TableCell>
              <TableCell className="h-14 shadow-border-bottom font-desktop-body-s text-neutral-neutral-9 text-[length:var(--desktop-body-s-font-size)] leading-[var(--desktop-body-s-line-height)] tracking-[var(--desktop-body-s-letter-spacing)] [font-style:var(--desktop-body-s-font-style)]">
                {row.portfolioManager}
              </TableCell>
              <TableCell className="h-14 shadow-border-bottom font-desktop-body-s text-neutral-neutral-9 text-[length:var(--desktop-body-s-font-size)] leading-[var(--desktop-body-s-line-height)] tracking-[var(--desktop-body-s-letter-spacing)] [font-style:var(--desktop-body-s-font-style)]">
                {row.salesChannel}
              </TableCell>
              <TableCell className="h-14 shadow-border-bottom font-desktop-body-s text-neutral-neutral-9 text-[length:var(--desktop-body-s-font-size)] leading-[var(--desktop-body-s-line-height)] tracking-[var(--desktop-body-s-letter-spacing)] [font-style:var(--desktop-body-s-font-style)]">
                {row.campaignCode}
              </TableCell>
              <TableCell className="h-14 shadow-border-bottom">
                <Badge
                  className={`
                    rounded-[100px] border border-solid px-2.5 py-0 h-6 font-actions-XS text-neutral-neutral-0 text-[length:var(--actions-XS-font-size)] text-center leading-[var(--actions-XS-line-height)] tracking-[var(--actions-XS-letter-spacing)] [font-style:var(--actions-XS-font-style)]
                    ${
                      row.status === "Converted"
                        ? "bg-extended-palette-orange-base border-[#f76707]"
                        : "bg-extended-palette-cyan-base border-[#0d8091]"
                    }
                  `}
                >
                  {row.status}
                </Badge>
              </TableCell>
              <TableCell className="h-14 shadow-border-bottom font-desktop-body-s text-neutral-neutral-9 text-[length:var(--desktop-body-s-font-size)] leading-[var(--desktop-body-s-line-height)] tracking-[var(--desktop-body-s-letter-spacing)] [font-style:var(--desktop-body-s-font-style)]">
                {row.lastActivity}
              </TableCell>
              <TableCell className="h-14 shadow-border-bottom">
                <div className="flex justify-center">
                  <MoreHorizontalIcon className="w-6 h-6 text-[#5f6368]" />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
