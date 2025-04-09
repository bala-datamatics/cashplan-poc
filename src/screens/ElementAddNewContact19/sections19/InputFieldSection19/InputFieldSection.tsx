import React from "react";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";

export const InputFieldSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full max-w-[381px] items-start gap-2">
      <Label className="font-desktop-body-s text-neutralneutral-8">
        <span className="text-[#4f575e]">Telephone </span>
        <span className="text-[#dc2020]">*</span>
      </Label>

      <div className="relative w-full">
        <Input
          className="h-10 px-4 py-0 bg-neutral-neutral-0 border-[#ced4da] font-desktop-body-s text-neutral-neutral-10"
          defaultValue="+92 9019846106"
        />
      </div>
    </div>
  );
};
