import React from "react";
import { Label } from "../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

export const RoleDropdownSection = (): JSX.Element => {
  const careOfOptions = [{ value: "lorem-lipsm", label: "Lorem Lipsm" }];

  return (
    <div className="flex flex-col w-full max-w-[380px] gap-2">
      <Label
        htmlFor="care-of"
        className="text-neutralneutral-8 font-desktop-body-s"
      >
        <span className="text-[#4f575e]">Care of </span>
        <span className="text-semanticerrorbase">*</span>
      </Label>

      <Select defaultValue={careOfOptions[0].value}>
        <SelectTrigger
          id="care-of"
          className="h-10 bg-neutral-neutral-0 border-[#ced4da] text-neutral-neutral-10 font-desktop-body-s"
        >
          <SelectValue placeholder="Select care of" />
        </SelectTrigger>
        <SelectContent>
          {careOfOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
