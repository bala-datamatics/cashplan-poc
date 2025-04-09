import { FilterIcon, PlusCircleIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const TabsSection = (): JSX.Element => {
  return (
    <div className="w-full py-[55px] relative">
      <div className="w-full border-t border-solid border-neutral-neutral-5">
        <div className="flex justify-between items-center mt-5 px-5">
          <div className="flex items-center gap-[5px]">
            <h2 className="font-phone-h5-semibold text-[18px] text-black leading-[20px]">
              Sales Activities
            </h2>
            <Badge className="bg-semanticwarningbase text-neutral-neutral-0 rounded-[100px] px-3 py-1 h-6 min-w-[37px] flex items-center justify-center">
              <span className="font-medium text-sm">20</span>
            </Badge>
          </div>

          <div className="flex items-end gap-5">
            <div className="w-[576px]">
              <div className="relative h-10 rounded border border-solid border-[#ced4da] bg-neutral-neutral-0 overflow-hidden">
                <div className="absolute left-4 top-0 h-10 flex items-center gap-2">
                  <SearchIcon className="w-6 h-6 text-neutral-neutral-7" />
                  <span className="font-desktop-body-s text-neutral-neutral-7 text-[14px] leading-[21px]">
                    SearchIcon
                  </span>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="h-10 border-[#0079c8] text-brandprimary-base font-actions-s text-[14px] leading-[21px] font-medium"
            >
              <FilterIcon className="w-6 h-6 mr-2" />
              FilterIcon
            </Button>

            <Button
              variant="outline"
              className="h-10 border-[#0079c8] text-brandprimary-base font-actions-s text-[14px] leading-[21px] font-medium"
            >
              <PlusCircleIcon className="w-6 h-6 mr-2" />
              Add New
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
