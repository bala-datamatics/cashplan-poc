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
  // Data for pagination pages
  const totalItems = 65;
  const itemsPerPage = 10;
  const currentPage = 1;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate array of visible page numbers
  const visiblePages = [1, 2, 3, 4, totalPages];

  return (
    <div className="flex justify-between items-center w-full py-2">
      <div className="font-desktop-body-s text-neutral-neutral-7">
        1 to 10 of 65 items
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="h-8 w-8 p-0 border border-[#ced4da] rounded flex items-center justify-center"
              icon={<ChevronLeftIcon className="h-6 w-6" />}
            />
          </PaginationItem>

          {visiblePages.map((page, index) => {
            // Add ellipsis between page 4 and last page
            if (index === 4) {
              return (
                <React.Fragment key={`ellipsis-${page}`}>
                  <PaginationItem>
                    <PaginationEllipsis className="h-8 font-desktop-body-s text-neutralneutral-8" />
                  </PaginationItem>
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      className={`h-8 w-8 p-0 border rounded flex items-center justify-center font-desktop-body-s ${
                        page === currentPage
                          ? "border-[#0079c8] text-brandprimary-base"
                          : "border-[#ced4da] text-neutralneutral-8"
                      }`}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                </React.Fragment>
              );
            }

            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  className={`h-8 w-8 p-0 border rounded flex items-center justify-center font-desktop-body-s ${
                    page === currentPage
                      ? "border-[#0079c8] text-brandprimary-base"
                      : "border-[#ced4da] text-neutralneutral-8"
                  }`}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          <PaginationItem>
            <PaginationNext
              href="#"
              className="h-8 w-8 p-0 border border-[#ced4da] rounded flex items-center justify-center"
              icon={<ChevronRightIcon className="h-6 w-6" />}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
