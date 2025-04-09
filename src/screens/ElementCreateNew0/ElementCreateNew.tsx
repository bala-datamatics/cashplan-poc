import {
  BuildingIcon,
  ChevronDownIcon,
  MoreHorizontalIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";
import { Avatar } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

export const ElementCreateNew = (): JSX.Element => {
  // Organisation details data
  const organisationDetails = {
    name: "Techno Wizards",
    sicCode: "Computer Software and Services",
    businessSector: "Software Development",
    employees: "100",
    organisationId: "12564523",
    groupPrefix: "",
    cashPlan: false,
  };

  // Contacts data
  const contacts = [
    {
      name: "Pallavi Ghosh",
      roles:
        "Group Secretary, Legal Secretary, Corporate Affairs Manager, Compliance Officer",
      from: "09/06/2016",
      to: "09/06/2025",
      contact: "+91 9874563215",
    },
    {
      name: "Arun Sampath",
      roles: "Assistant Company Secretary",
      from: "20/03/2015",
      to: "20/03/2025",
      contact: "+91 6589741232",
    },
  ];

  return (
    <div className="bg-[#f3f6f8] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#f3f6f8] w-full max-w-[1366px] relative">
        {/* Header */}
        <header className="w-full h-14 bg-white shadow-[0px_1px_2px_#0000001a] flex items-center justify-between px-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-[url(https://c.animaapp.com/m99ju8d4a9mOY1/img/vector.svg)] bg-[100%_100%]">
              <div className="w-12 h-12 bg-[url(https://c.animaapp.com/m99ju8d4a9mOY1/img/mask-group.png)] bg-[100%_100%]">
                <div className="relative w-[45px] h-5 top-[5px] left-[3px] bg-[url(https://c.animaapp.com/m99ju8d4a9mOY1/img/mask-group-1.png)] bg-[100%_100%]" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Avatar className="w-10 h-10 bg-brandprimary-base">
              <img
                className="w-full h-full object-cover"
                alt="User avatar"
                src="https://c.animaapp.com/m99ju8d4a9mOY1/img/image-1.png"
              />
            </Avatar>

            <div className="flex items-center gap-2">
              <span className="font-desktop-body-s text-neutralneutral-8">
                John Smith
              </span>
              <ChevronDownIcon className="w-8 h-8" />
            </div>
          </div>
        </header>

        {/* Page Title */}
        <div className="flex items-center gap-1 mt-[83px] ml-[83px]">
          <BuildingIcon className="w-6 h-6" />
          <h1 className="font-desktop-h4-semibold text-neutral-neutral-10">
            Create New Organisation
          </h1>
        </div>

        {/* Organisation Details Card */}
        <Card className="w-[1200px] mx-auto mt-6 border border-[#ced4da]">
          <CardHeader className="pb-0">
            <CardTitle className="font-m3-title-medium">
              Organisation Details
            </CardTitle>
            <Separator className="mt-2" />
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-x-6 gap-y-8 pt-4">
            {/* Organisation Name */}
            <div className="flex flex-col gap-2">
              <label className="font-desktop-body-s text-[#4f575e]">
                Organisation Name<span className="text-[#dc2020]">*</span>
              </label>
              <Input
                className="h-10 border-[#adb5bd]"
                defaultValue={organisationDetails.name}
              />
            </div>

            {/* SIC Code */}
            <div className="flex flex-col gap-2">
              <label className="font-desktop-body-s text-[#4f575e]">
                SIC Code<span className="text-[#dc2020]">*</span>
              </label>
              <Select defaultValue={organisationDetails.sicCode}>
                <SelectTrigger className="h-10 border-[#ced4da]">
                  <SelectValue placeholder="Select SIC Code" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={organisationDetails.sicCode}>
                    {organisationDetails.sicCode}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Business Sector */}
            <div className="flex flex-col gap-2">
              <label className="font-desktop-body-s text-[#4f575e]">
                Business Sector<span className="text-[#dc2020]">*</span>
              </label>
              <Select defaultValue={organisationDetails.businessSector}>
                <SelectTrigger className="h-10 border-[#ced4da]">
                  <SelectValue placeholder="Select Business Sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={organisationDetails.businessSector}>
                    {organisationDetails.businessSector}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Organisation ID */}
            <div className="flex flex-col gap-2">
              <label className="font-desktop-body-s text-[#4f575e]">
                Organisation ID<span className="text-[#dc2020]">*</span>
              </label>
              <Input
                className="h-10 bg-neutral-neutral-2 border-[#dee2e6]"
                defaultValue={organisationDetails.organisationId}
                disabled
              />
            </div>

            {/* Group Prefix */}
            <div className="flex flex-col gap-2">
              <label className="font-desktop-body-s text-neutralneutral-8">
                Group Prefix
              </label>
              <Input
                className="h-10 border-[#adb5bd]"
                placeholder="Group Prefix"
              />
            </div>

            {/* No of Employees */}
            <div className="flex flex-col gap-2">
              <label className="font-desktop-body-s text-[#4f575e]">
                No of Employees<span className="text-[#dc2020]">*</span>
              </label>
              <Select defaultValue={organisationDetails.employees}>
                <SelectTrigger className="h-10 border-[#ced4da]">
                  <SelectValue placeholder="Select Number of Employees" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={organisationDetails.employees}>
                    {organisationDetails.employees}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Cash Plan Checkbox */}
            <div className="flex items-center gap-2 col-span-3 mt-4">
              <Checkbox id="cashPlan" className="border-[#ced4da]" />
              <label
                htmlFor="cashPlan"
                className="font-phone-body-s text-neutral-neutral-9"
              >
                Cash Plan
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Contacts Card */}
        <Card className="w-[1200px] mx-auto mt-6 border border-[#ced4da]">
          <CardContent className="p-6">
            {/* Contacts Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-1">
                <h2 className="font-phone-h5-semibold text-black">Contacts</h2>
                <Badge className="bg-semanticwarningbase rounded-full w-6 h-6 flex items-center justify-center">
                  <span className="text-neutral-neutral-0">
                    {contacts.length}
                  </span>
                </Badge>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-[561px]">
                  <div className="relative">
                    <SearchIcon className="absolute left-4 top-3 w-5 h-5 text-neutral-neutral-7" />
                    <Input
                      className="h-10 pl-12 border-[#ced4da]"
                      placeholder="Search"
                    />
                  </div>
                </div>

                <Select>
                  <SelectTrigger className="w-[154px] h-10 border-[#ced4da]">
                    <SelectValue placeholder="Filter By Roles" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Roles</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  className="h-10 border-brandprimary-base text-brandprimary-base"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 7V17M7 12H17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Add New
                </Button>
              </div>
            </div>

            {/* Contacts Table */}
            <Table>
              <TableHeader>
                <TableRow className="bg-neutral-neutral-0 shadow-border-bottom">
                  <TableHead className="font-actions-s text-neutral-neutral-9">
                    Name
                    <svg
                      className="inline-block ml-2 w-4 h-4"
                      viewBox="0 0 9 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 0L8.39711 5.5H0.602886L4.5 0Z"
                        fill="#6A7178"
                      />
                      <path
                        d="M4.5 11L0.602886 5.5H8.39711L4.5 11Z"
                        fill="#6A7178"
                      />
                    </svg>
                  </TableHead>
                  <TableHead className="font-actions-s text-neutral-neutral-9">
                    Roles
                    <svg
                      className="inline-block ml-2 w-4 h-4"
                      viewBox="0 0 9 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 0L8.39711 5.5H0.602886L4.5 0Z"
                        fill="#6A7178"
                      />
                      <path
                        d="M4.5 11L0.602886 5.5H8.39711L4.5 11Z"
                        fill="#6A7178"
                      />
                    </svg>
                  </TableHead>
                  <TableHead className="font-actions-s text-neutral-neutral-9">
                    From
                    <svg
                      className="inline-block ml-2 w-4 h-4"
                      viewBox="0 0 9 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 0L8.39711 5.5H0.602886L4.5 0Z"
                        fill="#6A7178"
                      />
                      <path
                        d="M4.5 11L0.602886 5.5H8.39711L4.5 11Z"
                        fill="#6A7178"
                      />
                    </svg>
                  </TableHead>
                  <TableHead className="font-actions-s text-neutral-neutral-9">
                    To
                    <svg
                      className="inline-block ml-2 w-4 h-4"
                      viewBox="0 0 9 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 0L8.39711 5.5H0.602886L4.5 0Z"
                        fill="#6A7178"
                      />
                      <path
                        d="M4.5 11L0.602886 5.5H8.39711L4.5 11Z"
                        fill="#6A7178"
                      />
                    </svg>
                  </TableHead>
                  <TableHead className="font-actions-s text-neutral-neutral-9">
                    Contact
                    <svg
                      className="inline-block ml-2 w-4 h-4"
                      viewBox="0 0 9 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 0L8.39711 5.5H0.602886L4.5 0Z"
                        fill="#6A7178"
                      />
                      <path
                        d="M4.5 11L0.602886 5.5H8.39711L4.5 11Z"
                        fill="#6A7178"
                      />
                    </svg>
                  </TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.map((contact, index) => (
                  <TableRow
                    key={index}
                    className={
                      index % 2 === 1
                        ? "bg-neutral-neutral-1"
                        : "bg-neutral-neutral-0"
                    }
                  >
                    <TableCell className="font-desktop-body-s text-brandprimary-base underline">
                      {contact.name}
                    </TableCell>
                    <TableCell className="font-desktop-body-s text-neutral-neutral-9">
                      {contact.roles}
                    </TableCell>
                    <TableCell className="font-desktop-body-s text-neutral-neutral-9">
                      {contact.from}
                    </TableCell>
                    <TableCell className="font-desktop-body-s text-neutral-neutral-9">
                      {contact.to}
                    </TableCell>
                    <TableCell className="font-desktop-body-s text-neutral-neutral-9">
                      {contact.contact}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontalIcon className="h-6 w-6" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="w-full h-20 bg-white fixed bottom-0 left-0 flex items-center justify-end px-6">
          <Button className="h-10 bg-brandprimary-base text-neutral-neutral-0">
            Create New Organisation
          </Button>
        </footer>
      </div>
    </div>
  );
};
