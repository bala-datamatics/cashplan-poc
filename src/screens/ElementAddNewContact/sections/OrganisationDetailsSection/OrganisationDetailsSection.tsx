import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue } from "../../../../components/ui/select";
import { Separator } from "../../../../components/ui/separator";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";
import { ChevronDownIcon } from "lucide-react";

export const OrganisationDetailsSection = (): JSX.Element => {
  // Form field data
  const formFields = [
    {
      id: "organisation-name",
      label: "Organisation Name",
      type: "text",
      placeholder: "Organisation Name",
      required: true,
      disabled: false,
    },
    {
      id: "sic-code",
      label: "SIC Code",
      type: "select",
      placeholder: "Select SIC Code",
      required: true,
      disabled: false,
    },
    {
      id: "business-sector",
      label: "Business Sector",
      type: "select",
      placeholder: "Select Business Sector",
      required: true,
      disabled: false,
    },
    {
      id: "no-of-employees",
      label: "No of Employees",
      type: "select",
      placeholder: "No of Employees",
      required: true,
      disabled: false,
    },
    {
      id: "organisation-id",
      label: "Organisation ID",
      type: "text",
      placeholder: "Organisation ID",
      required: true,
      disabled: true,
    },
    {
      id: "group-prefix",
      label: "Group Prefix",
      type: "text",
      placeholder: "Group Prefix",
      required: false,
      disabled: false,
    },
  ];

  return (
    <Card className="w-full max-w-[343px] border border-[#ced4da] rounded">
      <CardHeader className="pb-0 pt-3.5 px-6">
        <CardTitle className="text-black font-m3-title-medium text-[length:var(--m3-title-medium-font-size)] tracking-[var(--m3-title-medium-letter-spacing)] leading-[var(--m3-title-medium-line-height)] [font-style:var(--m3-title-medium-font-style)]">
          Organisation Details
        </CardTitle>
      </CardHeader>
      <Separator className="mt-2" />
      <ScrollArea className="h-[580px]">
        <CardContent className="px-6 py-4 space-y-[30px]">
          {formFields.map((field) => (
            <div key={field.id} className="flex flex-col gap-2 w-full">
              <label
                htmlFor={field.id}
                className="font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-[#4f575e] text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]"
              >
                {field.label}
                {field.required && <span className="text-[#dc2020]">*</span>}
              </label>
              {field.type === "text" ? (
                <Input
                  id={field.id}
                  placeholder={field.placeholder}
                  className={`h-10 px-4 rounded ${
                    field.disabled
                      ? "bg-neutral-neutral-2 border-[#dee2e6] text-neutralneutral-6"
                      : "bg-neutral-neutral-0 border-[#adb5bd] text-neutral-neutral-7"
                  }`}
                  disabled={field.disabled}
                />
              ) : (
                <div className="relative">
                  <Select disabled={field.disabled}>
                    <SelectTrigger className="h-10 px-4 rounded bg-neutral-neutral-0 border-[#ced4da] text-neutral-neutral-7 font-desktop-body-s">
                      <SelectValue placeholder={field.placeholder} />
                    </SelectTrigger>
                    <SelectContent>{/* Dropdown options would go here */}</SelectContent>
                  </SelectTrigger>
                </div>
              )}
            </div>
          ))}
        </CardContent>
        <ScrollBar orientation="vertical" className="w-[3px] h-20 bg-neutral-neutral-4 rounded-[30px]" />
      </ScrollArea>
    </Card>
  );
};
