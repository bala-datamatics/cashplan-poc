import {
  BuildingIcon,
  ChevronDownIcon,
  MoreHorizontalIcon,
  PlusCircleIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

// Define data for organization form fields
const organizationFormData = [
  {
    label: "Organisation Name",
    value: "Techno Wizards",
    required: true,
    type: "input",
    disabled: false,
  },
  {
    label: "SIC Code",
    value: "Computer Software and Services",
    required: true,
    type: "select",
    disabled: false,
  },
  {
    label: "Business Sector",
    value: "Software Development",
    required: true,
    type: "select",
    disabled: false,
  },
  {
    label: "No of Employees",
    value: "100",
    required: true,
    type: "select",
    disabled: false,
  },
  {
    label: "Organisation ID",
    value: "12564523",
    required: true,
    type: "input",
    disabled: true,
  },
  {
    label: "Group Prefix",
    value: "",
    required: false,
    type: "input",
    disabled: false,
    placeholder: "Group Prefix",
  },
];

// Define data for contacts table
const contactsData = [
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

// Table column headers
const tableHeaders = [
  { label: "Name", sortable: true },
  { label: "Roles", sortable: true },
  { label: "From", sortable: true },
  { label: "To", sortable: true },
  { label: "Contact", sortable: true },
  { label: "", sortable: false },
];

export const ElementCreateNew = (): JSX.Element => {
  return (
    <div className="bg-[#f3f6f8] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#f3f6f8] w-full max-w-[1366px] relative">
        {/* Header */}
        <header className="w-full h-14 bg-white shadow-[0px_1px_2px_#0000001a] flex items-center justify-between px-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-[url(https://c.animaapp.com/m99jh2i7xgUg8R/img/vector.svg)] bg-[100%_100%]">
              <div className="w-12 h-12 bg-[url(https://c.animaapp.com/m99jh2i7xgUg8R/img/mask-group.png)] bg-[100%_100%]">
                <div className="relative w-[45px] h-5 top-[5px] left-[3px] bg-[url(https://c.animaapp.com/m99jh2i7xgUg8R/img/mask-group-1.png)] bg-[100%_100%]" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-brandprimary-base">
              <img
                className="w-full h-full object-cover"
                alt="User profile"
                src="https://c.animaapp.com/m99jh2i7xgUg8R/img/image-1.png"
              />
            </div>
            <div className="flex items-center">
              <span className="font-desktop-body-s text-neutralneutral-8">
                John Smith
              </span>
              <ChevronDownIcon className="w-8 h-8 ml-2" />
            </div>
          </div>
        </header>

        {/* Page Title */}
        <div className="flex items-center gap-1 mt-8 ml-[83px]">
          <BuildingIcon className="w-6 h-6" />
          <h1 className="font-desktop-h4-semibold text-neutral-neutral-10">
            Create New Organisation
          </h1>
        </div>

        <div className="flex gap-5 mt-6 px-[83px]">
          {/* Organisation Details Card */}
          <Card className="w-[343px] border-[#ced4da]">
            <div className="p-6 pb-4 border-b border-[#ced4da]">
              <h2 className="font-m3-title-medium text-black">
                Organisation Details
              </h2>
            </div>
            <CardContent className="p-6 space-y-[30px]">
              {organizationFormData.map((field, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <label className="font-desktop-body-s text-[#4f575e]">
                    {field.label}
                    {field.required && (
                      <span className="text-[#dc2020]">*</span>
                    )}
                  </label>

                  {field.type === "input" ? (
                    <Input
                      defaultValue={field.value}
                      placeholder={field.placeholder}
                      disabled={field.disabled}
                      className={`h-10 ${field.disabled ? "bg-neutral-neutral-2 border-[#dee2e6]" : "bg-neutral-neutral-0 border-[#adb5bd]"}`}
                    />
                  ) : (
                    <Select defaultValue={field.value}>
                      <SelectTrigger className="h-10 bg-neutral-neutral-0 border-[#ced4da]">
                        <SelectValue placeholder={field.label} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={field.value}>
                          {field.value}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </div>
              ))}
            </CardContent>
            <div className="absolute w-[3px] h-20 top-[135px] right-[8px] bg-neutral-neutral-5 rounded-[30px]" />
          </Card>

          {/* Contacts Card */}
          <Card className="flex-1 border-[#ced4da]">
            <CardContent className="p-0">
              <div className="flex justify-between items-center p-5">
                <div className="flex items-center gap-[5px]">
                  <h2 className="font-phone-h5-semibold text-black">
                    Contacts
                  </h2>
                  <Badge className="bg-semanticwarningbase text-neutral-neutral-0 w-6 h-6 rounded-full flex items-center justify-center">
                    {contactsData.length}
                  </Badge>
                </div>

                <div className="flex items-center gap-5">
                  <div className="relative w-[259px]">
                    <Input
                      className="h-10 pl-10 border-[#ced4da]"
                      placeholder="Search"
                    />
                    <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-neutral-7" />
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
                    <PlusCircleIcon className="mr-2 h-6 w-6" />
                    Add New
                  </Button>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow className="border-b border-[#ced4da]">
                    {tableHeaders.map((header, index) => (
                      <TableHead
                        key={index}
                        className="h-12 font-actions-s text-neutral-neutral-9"
                      >
                        {header.label}
                        {header.sortable && (
                          <span className="inline-block w-4 h-4 ml-2">
                            <img
                              className="w-[7px] h-[9px] mt-1 ml-1"
                              alt="Sort"
                              src="https://c.animaapp.com/m99jh2i7xgUg8R/img/unsorted.svg"
                            />
                          </span>
                        )}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contactsData.map((contact, index) => (
                    <TableRow
                      key={index}
                      className={
                        index % 2 === 1
                          ? "bg-neutral-neutral-1"
                          : "bg-neutral-neutral-0"
                      }
                    >
                      <TableCell className="py-5 font-desktop-body-s">
                        <a
                          href="#"
                          className="text-brandprimary-base underline"
                        >
                          {contact.name}
                        </a>
                      </TableCell>
                      <TableCell className="py-5 font-desktop-body-s text-neutral-neutral-9">
                        {contact.roles}
                      </TableCell>
                      <TableCell className="py-5 font-desktop-body-s text-neutral-neutral-9">
                        {contact.from}
                      </TableCell>
                      <TableCell className="py-5 font-desktop-body-s text-neutral-neutral-9">
                        {contact.to}
                      </TableCell>
                      <TableCell className="py-5 font-desktop-body-s text-neutral-neutral-9">
                        {contact.contact}
                      </TableCell>
                      <TableCell className="py-5">
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
        </div>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 right-0 h-20 bg-white flex items-center justify-end px-[83px]">
          <Button className="bg-brandprimary-base text-neutral-neutral-0 h-10 px-4">
            Create
          </Button>
        </footer>
      </div>
    </div>
  );
};
