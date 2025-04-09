import React from "react";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";

export const DropdownContainerSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-2 w-full max-w-[380px]">
      <Label
        htmlFor="name"
        className="font-desktop-body-s text-neutralneutral-8"
      >
        <span className="text-[#4f575e]">Name </span>
        <span className="text-[#dc2020]">*</span>
      </Label>

      <div className="relative w-full">
        <Input
          id="name"
          className="h-10 px-4 bg-neutral-neutral-0 border-[#ced4da] font-desktop-body-s text-neutral-neutral-10"
          defaultValue="Pallavi Ghosh"
        />
      </div>
    </div>
  );
};
