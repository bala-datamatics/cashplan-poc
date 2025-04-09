import React from "react";
import { Card, CardHeader, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../../../components/ui/select";
import { ChevronDownIcon } from "lucide-react";
import { Separator } from "../../../../components/ui/separator";

export const OrganisationDetailsSection = (): JSX.Element => {
  // Form field data for mapping
  const formFields = [
    {
      id: "organisation-name",
      label: "Organisation Name",
      required: true,
      type: "input",
      placeholder: "Organisation Name",
      disabled: false,
    },
    {
      id: "sic-code",
      label: "SIC Code",
      required: true,
      type: "select",
      placeholder: "Select SIC Code",
      disabled: false,
    },
    {
      id: "business-sector",
      label: "Business Sector",
      required: true,
      type: "select",
      placeholder: "Select Business Sector",
      disabled: false,
    },
    {
      id: "no-of-employees",
      label: "No of Employees",
      required: true,
      type: "select",
      placeholder: "No of Employees",
      disabled: false,
    },
    {
      id: "organisation-id",
      label: "Organisation ID",
      required: true,
      type: "input",
      placeholder: "Organisation ID",
      disabled: true,
    },
    {
      id: "group-prefix",
      label: "Group Prefix",
      required: false,
      type: "input",
      placeholder: "Group Prefix",
      disabled: false,
    },
  ];

  return (
    <Card className="w-full max-w-[343px] border border-[#ced4da] rounded overflow-hidden">
      <CardHeader className="py-3.5 px-6">
        <h3 className="font-m3-title-medium text-black whitespace-nowrap">Organisation Details</h3>
      </CardHeader>
      <Separator className="w-full" />
      <CardContent className="p-6 pt-[15px] flex flex-col gap-[30px]">
        {formFields.map((field) => (
          <div key={field.id} className="flex flex-col items-start gap-2 w-full">
            <div className="w-full font-desktop-body-s text-[#4f575e]">
              {field.label}
              {field.required && <span className="text-[#dc2020]">*</span>}
            </div>
            {field.type === "input" ? (
              <Input
                className={`h-10 px-4 rounded ${
                  field.disabled
                    ? "bg-neutral-neutral-2 border-[#dee2e6] text-neutralneutral-6"
                    : "bg-neutral-neutral-0 border-[#adb5bd] text-neutral-neutral-7"
                }`}
                placeholder={field.placeholder}
                disabled={field.disabled}
              />
            ) : (
              <div className="relative w-full">
                <Select>
                  <SelectTrigger className="h-10 px-4 rounded bg-neutral-neutral-0 border-[#ced4da] text-neutral-neutral-7">
                    <SelectValue placeholder={field.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
