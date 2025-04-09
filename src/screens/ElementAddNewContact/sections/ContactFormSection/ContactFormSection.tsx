import { CalendarIcon } from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Separator } from "../../../../components/ui/separator";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactFormSection = (): JSX.Element => {
  // Form field data for mapping
  const formFields = {
    required: {
      name: { label: "Name", placeholder: "Select Title" },
      telephone: { label: "Telephone", placeholder: "Enter Forename" },
      role: { label: "Role", placeholder: "Select Role" },
      careOf: { label: "Care of", placeholder: "Select Title" },
    },
    optional: {
      fromDate: { label: "From Date", placeholder: "Select" },
      toDate: { label: "To Date", placeholder: "Select" },
    },
    textareas: {
      address: { label: "Address", placeholder: "Enter Address" },
      notes: { label: "Notes", placeholder: "Enter Notes" },
    },
  };

  return (
    <div className="flex flex-col w-full max-w-[841px] items-center gap-[39px] mx-auto">
      <div className="flex flex-col w-full max-w-[782px] items-end gap-[42px]">
        {/* Name and Telephone Row */}
        <div className="flex items-center justify-between w-full gap-5">
          <div className="flex flex-col w-full max-w-[380px] items-start gap-2">
            <label className="font-desktop-body-s text-neutralneutral-8">
              {formFields.required.name.label}{" "}
              <span className="text-[#dc2020]">*</span>
            </label>
            <Select>
              <SelectTrigger className="w-full h-10 bg-neutral-neutral-0 border-[#ced4da] rounded">
                <SelectValue
                  placeholder={formFields.required.name.placeholder}
                  className="text-neutral-neutral-7"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mr">Mr</SelectItem>
                <SelectItem value="mrs">Mrs</SelectItem>
                <SelectItem value="ms">Ms</SelectItem>
                <SelectItem value="dr">Dr</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col w-full max-w-[381px] items-start gap-2">
            <label className="font-desktop-body-s text-neutralneutral-8">
              {formFields.required.telephone.label}{" "}
              <span className="text-[#dc2020]">*</span>
            </label>
            <Input
              className="w-full h-10 bg-neutral-neutral-0 border-[#ced4da] rounded pl-4"
              placeholder={formFields.required.telephone.placeholder}
            />
          </div>
        </div>

        {/* Role Row */}
        <div className="flex flex-col items-start gap-2 w-full">
          <label className="font-desktop-body-s text-neutralneutral-8">
            {formFields.required.role.label}{" "}
            <span className="text-[#dc2020]">*</span>
          </label>
          <Select>
            <SelectTrigger className="w-full h-10 bg-neutral-neutral-0 border-[#ced4da] rounded">
              <SelectValue
                placeholder={formFields.required.role.placeholder}
                className="text-neutral-neutral-7"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="employee">Employee</SelectItem>
              <SelectItem value="contractor">Contractor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Address Textarea */}
        <div className="flex flex-col items-start gap-2 w-full">
          <label className="font-desktop-body-s text-neutralneutral-8">
            {formFields.textareas.address.label}
          </label>
          <Textarea
            className="h-[120px] w-full bg-neutral-neutral-0 border-[#ced4da] rounded"
            placeholder={formFields.textareas.address.placeholder}
          />
        </div>

        {/* From Date, To Date, and Care of Row */}
        <div className="flex items-center gap-[18px] w-full">
          <div className="flex flex-col w-full max-w-[183px] items-start gap-2">
            <label className="font-desktop-body-s text-neutralneutral-8">
              {formFields.optional.fromDate.label}
            </label>
            <div className="relative w-full">
              <Input
                className="w-full h-10 bg-neutral-neutral-0 border-[#ced4da] rounded pl-4 pr-10"
                placeholder={formFields.optional.fromDate.placeholder}
              />
              <CalendarIcon className="absolute right-3 top-2 w-6 h-6 text-neutral-neutral-7" />
            </div>
          </div>

          <div className="flex flex-col w-full max-w-[183px] items-start gap-2">
            <label className="font-desktop-body-s text-neutralneutral-8">
              {formFields.optional.toDate.label}
            </label>
            <div className="relative w-full">
              <Input
                className="w-full h-10 bg-neutral-neutral-0 border-[#ced4da] rounded pl-4 pr-10"
                placeholder={formFields.optional.toDate.placeholder}
              />
              <CalendarIcon className="absolute right-3 top-2 w-6 h-6 text-neutral-neutral-7" />
            </div>
          </div>

          <div className="flex flex-col w-full max-w-[380px] items-start gap-2">
            <label className="font-desktop-body-s text-neutralneutral-8">
              {formFields.required.careOf.label}{" "}
              <span className="text-[#dc2020]">*</span>
            </label>
            <Select>
              <SelectTrigger className="w-full h-10 bg-neutral-neutral-0 border-[#ced4da] rounded">
                <SelectValue
                  placeholder={formFields.required.careOf.placeholder}
                  className="text-neutral-neutral-7"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mr">Mr</SelectItem>
                <SelectItem value="mrs">Mrs</SelectItem>
                <SelectItem value="ms">Ms</SelectItem>
                <SelectItem value="dr">Dr</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Notes Textarea */}
        <div className="flex flex-col items-start gap-2 w-full">
          <label className="font-desktop-body-s text-neutralneutral-8">
            {formFields.textareas.notes.label}
          </label>
          <Textarea
            className="h-[120px] w-full bg-neutral-neutral-0 border-[#ced4da] rounded"
            placeholder={formFields.textareas.notes.placeholder}
          />
        </div>
      </div>

      <Separator className="w-full" />
    </div>
  );
};
