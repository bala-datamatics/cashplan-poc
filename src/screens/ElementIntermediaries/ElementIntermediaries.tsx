import { ChevronDownIcon, SearchIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import { FormWrapperSection } from "./sections/FormWrapperSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { IntermediariesListSection } from "./sections/IntermediariesListSection";
import { IntermediariesTableSection } from "./sections/IntermediariesTableSection";
import { IntermediaryDetailsSection } from "./sections/IntermediaryDetailsSection";
import { SearchSection } from "./sections/SearchSection/SearchSection";
import { TableContainerSection } from "./sections/TableContainerSection/TableContainerSection";
import { TableWrapperSection } from "./sections/TableWrapperSection/TableWrapperSection";
import { TabsContainerSection } from "./sections/TabsContainerSection";
import { TabsSection } from "./sections/TabsSection";

export const ElementIntermediaries = (): JSX.Element => {
  // Data for form fields
  const formFields = [
    {
      id: "intermediaryId",
      label: "Intermediary ID",
      placeholder: "Enter Here",
    },
    {
      id: "intermediaryName",
      label: "Intermediary Name",
      placeholder: "Enter Here",
    },
    { id: "postCode", label: "Post Code", placeholder: "Enter Here" },
    {
      id: "contactSurname",
      label: "Contact Surname",
      placeholder: "Enter Here",
    },
    {
      id: "status",
      label: "Status",
      value: "Approved",
      placeholder: "Select Status",
    },
  ];

  return (
    <div className="bg-[#f3f6f8] flex flex-row justify-center w-full">
      <div className="bg-[#f3f6f8] w-full max-w-[1366px]">
        <div className="relative w-full">
          {/* Main content */}
          <div className="w-full">
            {/* Header */}
            <header className="w-full h-14 bg-white shadow-[0px_1px_2px_#0000001a]">
              <div className="flex items-center justify-between h-full px-6">
                <div className="flex items-center h-12">
                  <div className="h-12 bg-[url(https://c.animaapp.com/m99lugy61ix3NT/img/vector.svg)] bg-[100%_100%]">
                    <div className="w-12 h-12 bg-[url(https://c.animaapp.com/m99lugy61ix3NT/img/mask-group.png)] bg-[100%_100%]">
                      <div className="relative w-[45px] h-5 top-[5px] left-[3px] bg-[url(https://c.animaapp.com/m99lugy61ix3NT/img/mask-group-1.png)] bg-[100%_100%]" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brandprimary-base rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="User profile"
                      src="https://c.animaapp.com/m99lugy61ix3NT/img/image-1.png"
                    />
                  </div>

                  <div className="flex items-center">
                    <span className="font-desktop-body-s text-neutralneutral-8">
                      John Smith
                    </span>
                    <ChevronDownIcon className="w-6 h-6 ml-2" />
                  </div>
                </div>
              </div>
            </header>

            {/* Breadcrumb */}
            <div className="flex items-center px-px py-0 mt-6 ml-[83px]">
              <div className="flex items-start h-6">
                <div className="font-desktop-body-s text-brandprimary-base">
                  Create Organisation
                </div>
                <img
                  className="w-6 h-6"
                  alt="Angle down"
                  src="https://c.animaapp.com/m99lugy61ix3NT/img/styles-icons-angle-down.svg"
                />
              </div>

              <div className="flex items-center gap-2.5 px-0 py-px flex-1">
                <div className="flex-1 h-[21px]">
                  <div className="font-desktop-body-s text-neutral-neutral-7">
                    Organisation Details
                  </div>
                </div>
              </div>
            </div>

            {/* Organization Title */}
            <div className="mt-6 ml-[86px]">
              <div className="inline-flex items-start gap-1">
                <h1 className="font-desktop-h4-semibold text-neutral-neutral-10">
                  Techno Wizards
                </h1>
              </div>
            </div>

            {/* Contacts Card */}
            <Card className="mt-6 mx-[86px] rounded border border-solid border-[#ced4da]">
              <div className="p-3.5 flex items-center justify-between">
                <h2 className="font-m3-title-medium text-black">Contacts</h2>
                <img
                  className="w-6 h-6"
                  alt="Edit"
                  src="https://c.animaapp.com/m99lugy61ix3NT/img/edit-square-24dp-5f6368-fill1-wght400-grad0-opsz24--1--1.svg"
                />
              </div>

              <Separator className="w-full" />

              <CardContent className="p-0">
                <TableWrapperSection />
              </CardContent>
            </Card>

            {/* Tabs and Table Container */}
            <div className="mt-6 mx-[86px] rounded">
              <TabsSection />
              <IntermediariesTableSection />
            </div>

            {/* Footer */}
            <div className="w-full h-20 bg-white mt-6 flex items-center justify-end px-6">
              <Button
                variant="outline"
                className="h-10 px-4 bg-neutral-neutral-2 text-neutralneutral-6 border-[#dee2e6] mr-4"
              >
                Save
              </Button>
            </div>
          </div>

          {/* Modal Overlay */}
          <Dialog open={true}>
            <DialogContent className="max-w-[841px] p-0 border-none">
              <DialogHeader className="p-3.5 border-b border-solid border-[#ced4da]">
                <DialogTitle className="font-m3-title-medium text-black">
                  Intermediary / Network SearchIcon
                </DialogTitle>
              </DialogHeader>

              {/* SearchIcon Form */}
              <div className="p-6 grid grid-cols-3 gap-6">
                {/* First Row */}
                <div className="flex flex-col gap-2">
                  <label className="font-desktop-body-s text-neutralneutral-8">
                    Intermediary ID
                  </label>
                  <Select>
                    <SelectTrigger className="h-10 bg-neutral-neutral-0 border-[#ced4da]">
                      <SelectValue placeholder="Enter Here" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-desktop-body-s text-neutralneutral-8">
                    Intermediary Name
                  </label>
                  <Select>
                    <SelectTrigger className="h-10 bg-neutral-neutral-0 border-[#ced4da]">
                      <SelectValue placeholder="Enter Here" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-desktop-body-s text-neutralneutral-8">
                    Post Code
                  </label>
                  <Select>
                    <SelectTrigger className="h-10 bg-neutral-neutral-0 border-[#ced4da]">
                      <SelectValue placeholder="Enter Here" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Second Row */}
                <div className="flex flex-col gap-2">
                  <label className="font-desktop-body-s text-neutralneutral-8">
                    Contact Surname
                  </label>
                  <Select>
                    <SelectTrigger className="h-10 bg-neutral-neutral-0 border-[#ced4da]">
                      <SelectValue placeholder="Enter Here" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Option 1</SelectItem>
                      <SelectItem value="option2">Option 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-desktop-body-s text-neutralneutral-8">
                    Status
                  </label>
                  <Select defaultValue="approved">
                    <SelectTrigger className="h-10 bg-neutral-neutral-0 border-[#ced4da]">
                      <SelectValue>Approved</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center self-end">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="nonRegulated"
                      className="w-6 h-6 rounded border-[#ced4da]"
                    />
                    <label
                      htmlFor="nonRegulated"
                      className="font-phone-body-s text-neutral-neutral-9"
                    >
                      Non Regulated
                    </label>
                  </div>
                </div>
              </div>

              {/* SearchIcon Button */}
              <div className="flex justify-end p-4">
                <Button
                  variant="outline"
                  className="h-10 border-brandprimary-base text-brandprimary-base flex items-center gap-2"
                >
                  <SearchIcon className="w-6 h-6" />
                  <span className="font-actions-s">SearchIcon</span>
                </Button>
              </div>

              <Separator className="w-full" />

              {/* Intermediaries List */}
              <div className="p-4">
                <div className="flex items-center gap-[5px] mb-4">
                  <h3 className="font-phone-h5-semibold text-black">
                    Intermediaries
                  </h3>
                  <div className="w-6 h-6 bg-semanticwarningbase rounded-full flex items-center justify-center">
                    <span className="font-medium text-neutral-neutral-0 text-sm">
                      5
                    </span>
                  </div>
                </div>

                <div className="flex w-full border border-solid border-[#ced4da]">
                  <div className="w-14">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-center h-14 ${
                          index === 2
                            ? "bg-extended-palette-blue-lightest"
                            : index % 2 === 1
                              ? "bg-neutral-neutral-1"
                              : "bg-neutral-neutral-0"
                        } border-b border-solid border-[#ced4da]`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full ${
                            index === 2
                              ? "bg-brandprimary-base"
                              : "bg-neutral-neutral-0 border border-solid border-[#ced4da]"
                          }`}
                        >
                          {index === 2 && (
                            <div className="w-3 h-3 mx-auto mt-1.5 bg-neutral-neutral-0 rounded-full" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex-1">
                    <IntermediariesListSection />
                    <TableContainerSection />
                    <FormWrapperSection />
                    <SearchSection />
                    <HeaderSection />
                    <IntermediaryDetailsSection />
                  </div>
                </div>
              </div>

              <Separator className="w-full" />

              {/* Action Buttons */}
              <div className="flex justify-end gap-4 p-5">
                <Button
                  variant="outline"
                  className="h-10 border-brandprimary-base text-brandprimary-base"
                >
                  Cancel
                </Button>
                <Button className="h-10 bg-brandprimary-base text-neutral-neutral-0">
                  Select
                </Button>
              </div>

              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3"
              >
                <XIcon className="w-6 h-6" />
              </Button>
            </DialogContent>
          </Dialog>

          <TabsContainerSection />
        </div>
      </div>
    </div>
  );
};
