import { ChevronRightIcon, PenSquareIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { ContactsSection } from "./sections/ContactsSection/ContactsSection";
import { HeaderSection } from "./sections/HeaderSection";
import { PaginationSection } from "./sections/PaginationSection";
import { SalesActivitiesTableSection } from "./sections/SalesActivitiesTableSection/SalesActivitiesTableSection";
import { TabsSection } from "./sections/TabsSection";

export const Element = (): JSX.Element => {
  return (
    <div className="bg-[#f3f6f8] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#f3f6f8] w-full max-w-[1366px] flex flex-col">
        {/* Header Bar */}
        <header className="w-full h-14 bg-white shadow-[0px_1px_2px_#0000001a] flex items-center justify-between px-6">
          <div className="flex items-center">
            <div className="w-12 h-12">
              <div className="h-12 bg-[url(https://c.animaapp.com/m99n8ruzeMpeiP/img/vector.svg)] bg-[100%_100%]">
                <div className="w-12 h-12 bg-[url(https://c.animaapp.com/m99n8ruzeMpeiP/img/mask-group.png)] bg-[100%_100%]">
                  <div className="relative w-[45px] h-5 top-[5px] left-[3px] bg-[url(https://c.animaapp.com/m99n8ruzeMpeiP/img/mask-group-1.png)] bg-[100%_100%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Avatar className="w-10 h-10 bg-brandprimary-base rounded-full">
              <AvatarImage
                src="https://c.animaapp.com/m99n8ruzeMpeiP/img/image-1.png"
                alt="Profile"
              />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>

            <div className="flex items-center">
              <span className="font-desktop-body-s text-neutralneutral-8">
                John Smith
              </span>
              <img
                className="w-8 h-8 ml-2"
                alt="Angle down"
                src="https://c.animaapp.com/m99n8ruzeMpeiP/img/angle-down.svg"
              />
            </div>
          </div>
        </header>

        {/* Breadcrumb Navigation */}
        <div className="px-[83px] pt-[86px]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#"
                  className="font-desktop-body-s text-brandprimary-base"
                >
                  Organisations
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRightIcon className="h-6 w-6" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink className="font-desktop-body-s text-neutral-neutral-7">
                  Organisation Details
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Page Title */}
        <div className="px-[86px] pt-[20px]">
          <h1 className="font-desktop-h4-semibold text-neutral-neutral-10">
            Techno Wizards
          </h1>
        </div>

        {/* Contacts Card */}
        <div className="px-[86px] pt-[20px]">
          <Card className="w-full border border-solid border-[#ced4da] rounded">
            <CardHeader className="flex flex-row items-center justify-between p-3.5 border-b border-solid border-[#ced4da]">
              <h2 className="font-m3-title-medium text-black">Contacts</h2>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <PenSquareIcon className="h-6 w-6" />
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <HeaderSection />
            </CardContent>
          </Card>
        </div>

        {/* Main Content Area */}
        <div className="px-[86px] pt-[20px] pb-[20px] flex flex-col gap-4">
          <Card className="w-full border border-solid border-[#ced4da] rounded">
            <CardContent className="p-0">
              <ContactsSection />
              <TabsSection />
              <SalesActivitiesTableSection />
            </CardContent>
          </Card>
        </div>

        {/* Pagination */}
        <div className="px-[86px]">
          <PaginationSection />
          <div className="w-[82px] h-0.5 mt-4 ml-[309px] bg-neutralneutral-6 rounded-[10px]" />
        </div>

        {/* Footer */}
        <footer className="w-full h-20 mt-auto bg-white shadow-shadow-XS flex items-center justify-end px-[86px]">
          <Button className="bg-brandprimary-base text-neutral-neutral-0 font-actions-s h-10 px-4">
            Save
          </Button>
        </footer>
      </div>
    </div>
  );
};
