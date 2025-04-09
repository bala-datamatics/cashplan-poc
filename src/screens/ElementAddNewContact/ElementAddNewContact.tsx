import { BuildingIcon, ChevronDownIcon, XIcon } from "lucide-react";
import React from "react";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { DialogTitle } from "../../components/ui/dialog";
import { ContactFormSection } from "./sections/ContactFormSection";
import { ModalContentSection } from "./sections/ModalContentSection/ModalContentSection";
import { OrganisationDetailsSection } from "./sections/OrganisationDetailsSection";

export const ElementAddNewContact = (): JSX.Element => {
  return (
    <div className="bg-[#f3f6f8] flex flex-row justify-center w-full">
      <div className="bg-[#f3f6f8] w-[1366px]">
        <div className="relative">
          {/* Header */}
          <div className="w-full">
            <div className="w-full h-14 bg-white shadow-[0px_1px_2px_#0000001a]">
              <div className="relative w-[102px] h-8 top-3 left-[1178px]">
                <ChevronDownIcon className="absolute w-8 h-8 top-0 left-[70px]" />
                <div className="absolute top-[5px] left-0 font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] text-right tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] whitespace-nowrap [font-style:var(--desktop-body-s-font-style)]">
                  John Smith
                </div>
              </div>

              <div className="absolute w-12 h-12 top-1 left-[83px]">
                <div className="h-12 bg-[url(https://c.animaapp.com/m99j4v3pZ3m5Io/img/vector.svg)] bg-[100%_100%]">
                  <div className="w-12 h-12 bg-[url(https://c.animaapp.com/m99j4v3pZ3m5Io/img/mask-group.png)] bg-[100%_100%]">
                    <div className="relative w-[45px] h-5 top-[5px] left-[3px] bg-[url(https://c.animaapp.com/m99j4v3pZ3m5Io/img/mask-group-1.png)] bg-[100%_100%]" />
                  </div>
                </div>
              </div>

              <Avatar className="absolute w-10 h-10 top-2 left-[1131px] bg-brandprimary-base rounded-[100px]">
                <img
                  className="w-10 h-10 object-cover"
                  alt="Profile"
                  src="https://c.animaapp.com/m99j4v3pZ3m5Io/img/image-1.png"
                />
              </Avatar>
            </div>

            {/* Page Title */}
            <div className="w-72 h-[27px] mt-[69px] ml-[83px]">
              <div className="inline-flex items-start gap-1">
                <BuildingIcon className="w-6 h-6" />
                <div className="w-fit mt-[-1.00px] font-desktop-h4-semibold font-[number:var(--desktop-h4-semibold-font-weight)] text-neutral-neutral-10 text-[length:var(--desktop-h4-semibold-font-size)] tracking-[var(--desktop-h4-semibold-letter-spacing)] leading-[var(--desktop-h4-semibold-line-height)] whitespace-nowrap [font-style:var(--desktop-h4-semibold-font-style)]">
                  Create New Organisation
                </div>
              </div>
            </div>

            {/* Main Content */}
            <OrganisationDetailsSection />

            {/* Footer */}
            <div className="w-full h-20 mt-4 bg-white">
              <Button className="h-10 gap-2 px-4 py-0 absolute top-[811px] left-[1065px] bg-brandprimary-base rounded">
                <img
                  className="w-6 h-6"
                  alt="Add circle"
                  src="https://c.animaapp.com/m99j4v3pZ3m5Io/img/add-circle-24dp-5f6368-fill1-wght400-grad0-opsz24--1--1.svg"
                />
                <span className="font-actions-s font-[number:var(--actions-s-font-weight)] text-neutral-neutral-0 text-[length:var(--actions-s-font-size)] text-center tracking-[var(--actions-s-letter-spacing)] leading-[var(--actions-s-line-height)] whitespace-nowrap [font-style:var(--actions-s-font-style)]">
                  Create New Organisation
                </span>
              </Button>
            </div>
          </div>

          {/* Modal Overlay */}
          <div className="absolute w-full h-[886px] top-0 left-0 bg-[#060e25] opacity-70" />

          {/* Modal Dialog */}
          <Card className="absolute w-[841px] h-[886px] top-0 left-[525px] bg-white rounded-none">
            <div className="flex w-[781px] items-center justify-between absolute top-3.5 left-[555px]">
              <DialogTitle className="w-fit mt-[-1.00px] font-m3-title-medium font-[number:var(--m3-title-medium-font-weight)] text-black text-[length:var(--m3-title-medium-font-size)] tracking-[var(--m3-title-medium-letter-spacing)] leading-[var(--m3-title-medium-line-height)] whitespace-nowrap [font-style:var(--m3-title-medium-font-style)]">
                Add New Contact
              </DialogTitle>
              <XIcon className="w-6 h-6" />
            </div>

            <ModalContentSection />

            <div className="absolute w-[243px] top-[346px] left-[554px] font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
              Address
            </div>

            <div className="absolute w-[243px] top-[618px] left-[554px] font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
              Notes
            </div>

            <ContactFormSection />

            <div className="inline-flex items-center gap-5 absolute top-[826px] left-[1009px]">
              <Button
                variant="outline"
                className="w-[153px] h-10 px-4 py-0 bg-neutral-neutral-0 rounded border border-solid border-[#0079c8]"
              >
                <span className="font-actions-s font-[number:var(--actions-s-font-weight)] text-brandprimary-base text-[length:var(--actions-s-font-size)] text-center tracking-[var(--actions-s-letter-spacing)] leading-[var(--actions-s-line-height)] whitespace-nowrap [font-style:var(--actions-s-font-style)]">
                  Cancel
                </span>
              </Button>

              <Button
                variant="outline"
                className="w-[153px] h-10 px-4 py-0 bg-neutral-neutral-2 rounded border border-solid border-[#dee2e6]"
                disabled
              >
                <span className="font-actions-s font-[number:var(--actions-s-font-weight)] text-neutralneutral-6 text-[length:var(--actions-s-font-size)] text-center tracking-[var(--actions-s-letter-spacing)] leading-[var(--actions-s-line-height)] whitespace-nowrap [font-style:var(--actions-s-font-style)]">
                  Add
                </span>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
