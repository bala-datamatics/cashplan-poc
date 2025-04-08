import { PlusIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { OrganisationsTableSection } from "./sections/OrganisationsTableSection/OrganisationsTableSection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";

export const ElementOrganisations = (): JSX.Element => {
  return (
    <div className="bg-[#f3f6f8] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#f3f6f8] w-full max-w-[1366px] relative flex flex-col">
        {/* Header */}
        <header className="w-full h-14 bg-white shadow-[0px_1px_2px_#0000001a] flex items-center justify-between px-[83px]">
          {/* Logo */}
          <div className="h-12 w-12">
            <div className="h-12 bg-[url(https://c.animaapp.com/m98jlqtklKgnIm/img/vector.svg)] bg-[100%_100%]">
              <div className="w-12 h-12 bg-[url(https://c.animaapp.com/m98jlqtklKgnIm/img/mask-group.png)] bg-[100%_100%]">
                <div className="relative w-[45px] h-5 top-[5px] left-[3px] bg-[url(https://c.animaapp.com/m98jlqtklKgnIm/img/mask-group-1.png)] bg-[100%_100%]" />
              </div>
            </div>
          </div>

          {/* User profile */}
          <div className="flex items-center gap-4">
            <Avatar className="w-10 h-10 bg-brandprimary-base rounded-full">
              <img
                className="w-10 h-10 object-cover"
                alt="User profile"
                src="https://c.animaapp.com/m98jlqtklKgnIm/img/image-1.png"
              />
            </Avatar>

            <div className="flex items-center">
              <span className="font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                John Smith
              </span>
              <img
                className="w-8 h-8 ml-2"
                alt="Angle down"
                src="https://c.animaapp.com/m98jlqtklKgnIm/img/angle-down.svg"
              />
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex flex-col px-[83px] pt-[83px] pb-6 gap-6">
          {/* Page title and action button */}
          <div className="flex justify-between items-center">
            <div className="inline-flex items-start gap-1">
              <img
                className="w-6 h-6"
                alt="Organisation"
                src="https://c.animaapp.com/m98jlqtklKgnIm/img/organisation.svg"
              />
              <h1 className="font-desktop-h4-semibold font-[number:var(--desktop-h4-semibold-font-weight)] text-neutral-neutral-10 text-[length:var(--desktop-h4-semibold-font-size)] tracking-[var(--desktop-h4-semibold-letter-spacing)] leading-[var(--desktop-h4-semibold-line-height)] [font-style:var(--desktop-h4-semibold-font-style)]">
                Organisations
              </h1>
            </div>

            <Button className="h-10 gap-2 bg-brandprimary-base text-neutral-neutral-0">
              <PlusIcon className="w-6 h-6" />
              <span className="font-actions-s font-[number:var(--actions-s-font-weight)] text-[length:var(--actions-s-font-size)] tracking-[var(--actions-s-letter-spacing)] leading-[var(--actions-s-line-height)] [font-style:var(--actions-s-font-style)]">
                Create New
              </span>
            </Button>
          </div>

          {/* SearchIcon and filter */}
          <div className="flex justify-between items-center">
            <div className="w-[688px]">
              <div className="relative">
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[17px] h-[17px] text-neutral-neutral-7" />
                <Input
                  className="h-10 pl-10 border-[#ced4da]"
                  placeholder="Search"
                />
              </div>
            </div>

            <Button
              variant="outline"
              className="h-10 gap-2 border-[#0079c8] text-brandprimary-base"
            >
              <img
                className="w-6 h-6"
                alt="Filter"
                src="https://c.animaapp.com/m98jlqtklKgnIm/img/icons---filter.svg"
              />
              <span className="font-actions-s font-[number:var(--actions-s-font-weight)] text-[length:var(--actions-s-font-size)] tracking-[var(--actions-s-letter-spacing)] leading-[var(--actions-s-line-height)] [font-style:var(--actions-s-font-style)]">
                FilterIcon
              </span>
            </Button>
          </div>

          {/* Table section */}
          <OrganisationsTableSection />

          {/* Pagination section */}
          <PaginationSection />
        </main>
      </div>
    </div>
  );
};
