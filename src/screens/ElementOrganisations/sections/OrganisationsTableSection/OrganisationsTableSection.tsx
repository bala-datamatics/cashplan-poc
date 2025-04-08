import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const OrganisationsTableSection = (): JSX.Element => {
  // Data for the table
  const organisations = [
    {
      name: "Sanco Tech Pvt Ltd",
      sicCode: "Computer Software and Services",
      businessSector: "Software Development",
      employees: "110",
      id: "12790020",
      highlighted: false,
    },
    {
      name: "Tech Mahindra Ltd",
      sicCode: "Prepackaged Software",
      businessSector: "Enterprise Software Solutions",
      employees: "100",
      id: "77896541",
      highlighted: false,
    },
    {
      name: "Infosys Ltd",
      sicCode: "Computer Integrated Systems Design",
      businessSector: "Web Application Development",
      employees: "204",
      id: "25896314",
      highlighted: true,
    },
    {
      name: "Wipro Ltd",
      sicCode: "Information Retrieval Services",
      businessSector: "Mobile App Development",
      employees: "230",
      id: "78965263",
      highlighted: false,
    },
    {
      name: "HCL Technologies Ltd",
      sicCode: "Facilities Management Services",
      businessSector: "Cloud Software Development",
      employees: "120",
      id: "78451236",
      highlighted: false,
    },
    {
      name: "TCS (Tata Consultancy Services) ",
      sicCode: "Rental and Leasing",
      businessSector: "Embedded Software Development",
      employees: "110",
      id: "95157553",
      highlighted: false,
    },
    {
      name: "L&T Infotech Ltd",
      sicCode: "Computer Maintenance and Repair",
      businessSector: "Enterprise Software Solutions",
      employees: "140",
      id: "85359542",
      highlighted: false,
    },
    {
      name: "Mindtree Ltd",
      sicCode: "Computer Related Services",
      businessSector: "Software Development",
      employees: "80",
      id: "36251478",
      highlighted: false,
    },
    {
      name: "Persistent Systems Ltd",
      sicCode: "Prepackaged Software",
      businessSector: "Mobile App Development",
      employees: "50",
      id: "98743615",
      highlighted: false,
    },
    {
      name: "Hexaware Technologies Ltd",
      sicCode: "Computer Software and Services",
      businessSector: "Web Application Development",
      employees: "100",
      id: "12657896",
      highlighted: false,
    },
  ];

  return (
    <div className="w-full overflow-hidden border border-solid border-[#ced4da] rounded bg-neutral-neutral-0">
      <Table>
        <TableHeader>
          <TableRow className="bg-neutral-neutral-0 shadow-border-bottom">
            <TableHead className="h-12 px-6 font-actions-s font-[number:var(--actions-s-font-weight)] text-neutral-neutral-9 text-[length:var(--actions-s-font-size)] tracking-[var(--actions-s-letter-spacing)] leading-[var(--actions-s-line-height)]">
              <div className="flex items-center gap-2">
                Organisation Name
                <div className="relative w-4 h-4">
                  <img
                    className="absolute w-[7px] h-[9px] top-1 left-1"
                    alt="Unsorted"
                    src="https://c.animaapp.com/m98jlqtklKgnIm/img/unsorted.svg"
                  />
                </div>
              </div>
            </TableHead>
            <TableHead className="h-12 px-6 font-actions-s font-[number:var(--actions-s-font-weight)] text-neutral-neutral-9 text-[length:var(--actions-s-font-size)] tracking-[var(--actions-s-letter-spacing)] leading-[var(--actions-s-line-height)]">
              <div className="flex items-center gap-2">
                SIC Code
                <div className="relative w-4 h-4">
                  <img
                    className="absolute w-[7px] h-[9px] top-1 left-1"
                    alt="Unsorted"
                    src="https://c.animaapp.com/m98jlqtklKgnIm/img/unsorted.svg"
                  />
                </div>
              </div>
            </TableHead>
            <TableHead className="h-12 px-6 font-actions-s font-[number:var(--actions-s-font-weight)] text-neutral-neutral-9 text-[length:var(--actions-s-font-size)] tracking-[var(--actions-s-letter-spacing)] leading-[var(--actions-s-line-height)]">
              <div className="flex items-center gap-2">
                Business Sector
                <div className="relative w-4 h-4">
                  <img
                    className="absolute w-[7px] h-[9px] top-1 left-1"
                    alt="Unsorted"
                    src="https://c.animaapp.com/m98jlqtklKgnIm/img/unsorted.svg"
                  />
                </div>
              </div>
            </TableHead>
            <TableHead className="h-12 px-6 font-actions-s font-[number:var(--actions-s-font-weight)] text-neutral-neutral-9 text-[length:var(--actions-s-font-size)] tracking-[var(--actions-s-letter-spacing)] leading-[var(--actions-s-line-height)]">
              <div className="flex items-center gap-2">
                No of Employees
                <div className="relative w-4 h-4">
                  <img
                    className="absolute w-[7px] h-[9px] top-1 left-1"
                    alt="Unsorted"
                    src="https://c.animaapp.com/m98jlqtklKgnIm/img/unsorted.svg"
                  />
                </div>
              </div>
            </TableHead>
            <TableHead className="h-12 px-6 font-actions-s font-[number:var(--actions-s-font-weight)] text-neutral-neutral-9 text-[length:var(--actions-s-font-size)] tracking-[var(--actions-s-letter-spacing)] leading-[var(--actions-s-line-height)]">
              <div className="flex items-center gap-2">
                Organisation ID
                <div className="relative w-4 h-4">
                  <img
                    className="absolute w-[7px] h-[9px] top-1 left-1"
                    alt="Unsorted"
                    src="https://c.animaapp.com/m98jlqtklKgnIm/img/unsorted-3.svg"
                  />
                </div>
              </div>
            </TableHead>
            <TableHead className="w-[27px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {organisations.map((org, index) => (
            <TableRow
              key={org.id}
              className={`${index % 2 === 0 ? "bg-neutral-neutral-0" : "bg-neutral-neutral-1"} shadow-border-bottom`}
            >
              <TableCell className="h-14 px-6">
                <span
                  className={`${org.highlighted ? "text-[#0079c8]" : "text-brandprimary-base"} leading-[var(--desktop-body-s-line-height)] underline font-desktop-body-s [font-style:var(--desktop-body-s-font-style)] font-[number:var(--desktop-body-s-font-weight)] tracking-[var(--desktop-body-s-letter-spacing)] text-[length:var(--desktop-body-s-font-size)]`}
                >
                  {org.name}
                </span>
              </TableCell>
              <TableCell className="h-14 px-6">
                <span className="text-neutral-neutral-9 leading-[var(--desktop-body-s-line-height)] whitespace-nowrap font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] [font-style:var(--desktop-body-s-font-style)]">
                  {org.sicCode}
                </span>
              </TableCell>
              <TableCell className="h-14 px-6">
                <span className="text-neutral-neutral-9 leading-[var(--desktop-body-s-line-height)] whitespace-nowrap font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] [font-style:var(--desktop-body-s-font-style)]">
                  {org.businessSector}
                </span>
              </TableCell>
              <TableCell className="h-14 px-6">
                <span className="text-neutral-neutral-9 leading-[var(--desktop-body-s-line-height)] whitespace-nowrap font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] [font-style:var(--desktop-body-s-font-style)]">
                  {org.employees}
                </span>
              </TableCell>
              <TableCell className="h-14 px-6">
                <span className="text-neutral-neutral-9 leading-[var(--desktop-body-s-line-height)] whitespace-nowrap font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] [font-style:var(--desktop-body-s-font-style)]">
                  {org.id}
                </span>
              </TableCell>
              <TableCell className="h-14 px-6">
                <img
                  className="w-6 h-6"
                  alt="More options"
                  src="https://c.animaapp.com/m98jlqtklKgnIm/img/more-horiz-24dp-5f6368-fill1-wght400-grad0-opsz24--1--1.svg"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
