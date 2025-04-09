import { CalendarIcon, XIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { DropdownContainerSection } from "./sections/DropdownContainerSection/DropdownContainerSection";
import { FormSection } from "./sections/FormSection";
import { InputFieldSection } from "./sections/InputFieldSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationTabsSection } from "./sections/NavigationTabsSection";
import { OrganisationDetailsSection } from "./sections/OrganisationDetailsSection";
import { RoleDropdownSection } from "./sections/RoleDropdownSection";

export const ElementAddNewContact = (): JSX.Element => {
  // Role badges data
  const roleBadges = [
    { id: 1, title: "Group Secretary" },
    { id: 2, title: "Legal Secretary" },
    { id: 3, title: "Corporate Affairs Manager" },
    { id: 4, title: "Compliance Officer" },
  ];

  return (
    <div className="bg-[#f3f6f8] flex flex-row justify-center w-full">
      <div className="bg-[#f3f6f8] w-[1366px] relative">
        {/* Background page content */}
        <div className="relative">
          <div className="w-full">
            {/* Top navigation bar */}
            <div className="w-full h-14 bg-white shadow-[0px_1px_2px_#0000001a]">
              <div className="relative w-[106px] h-8 top-3 left-[1177px]">
                <div className="relative w-[102px] h-8 left-1">
                  <img
                    className="absolute w-8 h-8 top-0 left-[70px]"
                    alt="Angle down"
                    src="https://c.animaapp.com/m99j8sczqM5BpF/img/icons---angle-down.svg"
                  />
                  <div className="absolute top-[5px] left-0 font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] text-right tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] whitespace-nowrap [font-style:var(--desktop-body-s-font-style)]">
                    John Smith
                  </div>
                </div>
              </div>

              <div className="absolute w-12 h-12 top-1 left-[83px]">
                <div className="h-12 bg-[url(https://c.animaapp.com/m99j8sczqM5BpF/img/vector.svg)] bg-[100%_100%]">
                  <div className="w-12 h-12 bg-[url(https://c.animaapp.com/m99j8sczqM5BpF/img/mask-group.png)] bg-[100%_100%]">
                    <div className="relative w-[45px] h-5 top-[5px] left-[3px] bg-[url(https://c.animaapp.com/m99j8sczqM5BpF/img/mask-group-1.png)] bg-[100%_100%]" />
                  </div>
                </div>
              </div>

              <div className="absolute w-10 h-10 top-2 left-[1131px] bg-brandprimary-base rounded-[100px]">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  alt="Profile"
                  src="https://c.animaapp.com/m99j8sczqM5BpF/img/image-1.png"
                />
              </div>
            </div>

            {/* Page title */}
            <div className="w-72 h-[27px] mt-[83px] ml-[83px] flex items-start gap-1">
              <img
                className="w-6 h-6"
                alt="Organisation"
                src="https://c.animaapp.com/m99j8sczqM5BpF/img/organisation.svg"
              />
              <div className="font-desktop-h4-semibold font-[number:var(--desktop-h4-semibold-font-weight)] text-neutral-neutral-10 text-[length:var(--desktop-h4-semibold-font-size)] tracking-[var(--desktop-h4-semibold-letter-spacing)] leading-[var(--desktop-h4-semibold-line-height)] whitespace-nowrap [font-style:var(--desktop-h4-semibold-font-style)]">
                Create New Organisation
              </div>
            </div>

            {/* Organisation Details Section */}
            <OrganisationDetailsSection />

            {/* Footer */}
            <div className="w-full h-20 bg-white fixed bottom-0 left-0">
              <Button className="h-10 absolute top-5 right-[301px] bg-brandprimary-base text-neutral-neutral-0">
                <img
                  className="w-6 h-6 mr-2"
                  alt="Add circle"
                  src="https://c.animaapp.com/m99j8sczqM5BpF/img/add-circle-24dp-5f6368-fill1-wght400-grad0-opsz24--1--1.svg"
                />
                Create New Organisation
              </Button>
            </div>

            {/* Main Content Section */}
            <MainContentSection />
          </div>

          {/* Modal overlay */}
          <div className="fixed inset-0 bg-[#060e25] opacity-70 z-40" />

          {/* Modal dialog */}
          <Dialog open={true}>
            <DialogContent
              className="max-w-[841px] p-0 border-none rounded-none"
              style={{ left: "525px", top: 0, transform: "none" }}
            >
              <DialogHeader className="px-4 py-3 border-b">
                <DialogTitle className="font-m3-title-medium text-black">
                  Add New Contact
                </DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-3.5"
                >
                  <XIcon className="h-6 w-6" />
                </Button>
              </DialogHeader>

              {/* Navigation Tabs */}
              <NavigationTabsSection />

              <div className="p-8 space-y-6">
                {/* Input Fields and Dropdown Container */}
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <DropdownContainerSection />
                  </div>
                  <div className="w-1/2">
                    <InputFieldSection />
                  </div>
                </div>

                {/* Form Section */}
                <FormSection />

                {/* Role Dropdown Section */}
                <RoleDropdownSection />

                {/* Role badges */}
                <div className="flex flex-wrap gap-2">
                  {roleBadges.map((badge) => (
                    <Badge
                      key={badge.id}
                      variant="outline"
                      className="h-7 pl-3 pr-2 py-0 bg-neutral-neutral-3 rounded-[100px] text-neutral-neutral-7 font-actions-XS-bold"
                    >
                      {badge.title}
                      <div className="relative w-[22px] h-[22px] ml-1">
                        <img
                          className="absolute w-3.5 h-3.5 top-1 left-1"
                          alt="Remove"
                          src="https://c.animaapp.com/m99j8sczqM5BpF/img/times-circle.svg"
                        />
                      </div>
                    </Badge>
                  ))}
                  <Button variant="ghost" size="sm" className="p-0">
                    <img
                      className="w-[25px] h-[25px]"
                      alt="Add role"
                      src="https://c.animaapp.com/m99j8sczqM5BpF/img/fi-rr-plus-small-1.svg"
                    />
                  </Button>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label className="font-desktop-body-s text-neutralneutral-8">
                    Address
                  </label>
                  <Textarea
                    className="h-[120px] p-4 bg-neutral-neutral-0 border-[#ced4da] font-desktop-body-s"
                    defaultValue="2B Jeansfeild, PERTH, PH1 , Gayathri Chambers, 270563, 
1219 Sack Building"
                  />
                </div>

                {/* Date fields */}
                <div className="flex gap-4">
                  <div className="w-[183px] space-y-2">
                    <label className="font-desktop-body-s text-neutralneutral-8">
                      From Date
                    </label>
                    <div className="relative">
                      <Input
                        className="h-10 pl-4 bg-neutral-neutral-0 border-[#ced4da] font-desktop-body-s"
                        defaultValue="20-03-2025"
                      />
                      <div className="absolute right-4 top-2">
                        <CalendarIcon className="h-6 w-6 text-neutral-neutral-10" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[183px] space-y-2">
                    <label className="font-desktop-body-s text-neutralneutral-8">
                      To Date
                    </label>
                    <div className="relative">
                      <Input
                        className="h-10 pl-4 bg-neutral-neutral-0 border-[#ced4da] font-desktop-body-s"
                        defaultValue="15-05-2025"
                      />
                      <div className="absolute right-4 top-2">
                        <CalendarIcon className="h-6 w-6 text-neutral-neutral-10" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label className="font-desktop-body-s text-neutralneutral-8">
                    Notes
                  </label>
                  <Textarea
                    className="h-[120px] p-4 bg-neutral-neutral-0 border-[#ced4da] font-desktop-body-s"
                    defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="w-full h-20 flex justify-end items-center gap-4 px-8 py-5 border-t">
                <Button
                  variant="outline"
                  className="w-[153px] h-10 border-brandprimary-base text-brandprimary-base font-actions-s"
                >
                  Cancel
                </Button>
                <Button className="w-[153px] h-10 bg-brandprimary-base text-neutral-neutral-0 font-actions-s">
                  Add
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
