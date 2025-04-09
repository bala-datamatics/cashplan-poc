import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../components/ui/pagination";

export const PaginationSection = (): JSX.Element => {
  // Data for pagination
  const paginationData = {
    currentPage: 1,
    totalItems: 65,
    itemsPerPage: 10,
    totalPages: 10,
  };

  return (
    <div className="w-full flex justify-between items-center">
      <div className="font-desktop-body-s text-neutral-neutral-7">
        1 to 10 of 65 items
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="h-8 w-8 p-0 rounded border border-[#ced4da] bg-neutral-neutral-0"
              icon={<ChevronLeftIcon className="h-6 w-6" />}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              className="h-8 w-8 p-0 rounded border border-[#0079c8] bg-neutral-neutral-0"
              isActive
            >
              <span className="text-brandprimary-base font-desktop-body-s">
                1
              </span>
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              className="h-8 w-8 p-0 rounded border border-[#ced4da] bg-neutral-neutral-0"
              href="#"
            >
              <span className="text-neutralneutral-8 font-desktop-body-s">
                2
              </span>
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              className="h-8 w-8 p-0 rounded border border-[#ced4da] bg-neutral-neutral-0"
              href="#"
            >
              <span className="text-neutralneutral-8 font-desktop-body-s">
                3
              </span>
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              className="h-8 w-8 p-0 rounded border border-[#ced4da] bg-neutral-neutral-0"
              href="#"
            >
              <span className="text-neutralneutral-8 font-desktop-body-s">
                4
              </span>
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis className="text-neutralneutral-8 font-desktop-body-s" />
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              className="h-8 w-8 p-0 rounded border border-[#ced4da] bg-neutral-neutral-0"
              href="#"
            >
              <span className="text-neutralneutral-8 font-desktop-body-s">
                10
              </span>
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              className="h-8 w-8 p-0 rounded border border-[#ced4da] bg-neutral-neutral-0"
              icon={<ChevronRightIcon className="h-6 w-6" />}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
