import { ChevronDownIcon, XIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Label } from "../../../../components/ui/label";

export const FormSection = (): JSX.Element => {
  // Sample data for selected roles
  const selectedRoles = [
    "Group Secretary",
    "Legal Secretary",
    "Corporate Affairs Manager",
    "Compliance Officer",
  ];

  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <Label
        htmlFor="role-select"
        className="text-neutralneutral-8 font-desktop-body-s text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]"
      >
        <span className="text-[#4f575e]">Role </span>
        <span className="text-[#dc2020]">*</span>
      </Label>

      <div className="relative w-full h-10 bg-neutral-neutral-0 rounded overflow-hidden border border-solid border-[#ced4da]">
        <div className="flex items-center h-full px-4 w-full">
          <div className="flex flex-1 items-center gap-2 overflow-x-auto">
            {selectedRoles.map((role, index) => (
              <Badge
                key={index}
                variant="outline"
                className="flex items-center gap-1 py-0.5 px-2 bg-neutral-neutral-2 text-neutral-neutral-9 rounded"
              >
                {role}
                <button className="ml-1 rounded-full">
                  <XIcon className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-2 bg-neutral-neutral-0">
            <button className="mr-1">
              <XIcon className="h-4 w-4 text-neutral-neutral-7" />
            </button>
            <ChevronDownIcon className="h-5 w-5 text-neutral-neutral-7" />
          </div>
        </div>
      </div>
    </div>
  );
};
