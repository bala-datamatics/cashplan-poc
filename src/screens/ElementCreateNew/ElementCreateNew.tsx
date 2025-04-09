import { BuildingIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";

export const ElementCreateNew = (): JSX.Element => {
  // Form field data
  const formFields = [
    {
      id: "organisation-name",
      label: "Organisation Name",
      type: "text",
      placeholder: "Organisation Name",
      required: true,
      disabled: false,
    },
    {
      id: "sic-code",
      label: "SIC Code",
      type: "select",
      placeholder: "Select SIC Code",
      required: true,
      disabled: false,
    },
    {
      id: "business-sector",
      label: "Business Sector",
      type: "select",
      placeholder: "Select Business Sector",
      required: true,
      disabled: false,
    },
    {
      id: "no-of-employees",
      label: "No of Employees",
      type: "select",
      placeholder: "No of Employees",
      required: true,
      disabled: false,
    },
    {
      id: "organisation-id",
      label: "Organisation ID",
      type: "text",
      placeholder: "Organisation ID",
      required: true,
      disabled: true,
    },
    {
      id: "group-prefix",
      label: "Group Prefix",
      type: "text",
      placeholder: "Group Prefix",
      required: false,
      disabled: false,
    },
  ];

  return (
    <main className="bg-[#f3f6f8] min-h-screen">
      <header className="w-full h-14 bg-white shadow-[0px_1px_2px_#0000001a] flex items-center justify-between px-6">
        <div className="flex items-center h-12">
          <div className="w-12 h-12 bg-[url(https://c.animaapp.com/m99it0a6qPNW2s/img/vector.svg)] bg-[100%_100%]">
            <div className="w-12 h-12 bg-[url(https://c.animaapp.com/m99it0a6qPNW2s/img/mask-group.png)] bg-[100%_100%]">
              <div className="relative w-[45px] h-5 top-[5px] left-[3px] bg-[url(https://c.animaapp.com/m99it0a6qPNW2s/img/mask-group-1.png)] bg-[100%_100%]" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Avatar className="w-10 h-10 bg-brandprimary-base">
            <AvatarImage
              src="https://c.animaapp.com/m99it0a6qPNW2s/img/image-1.png"
              alt="User avatar"
            />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>

          <div className="flex items-center">
            <span className="font-desktop-body-s text-neutralneutral-8">
              John Smith
            </span>
            <ChevronDownIcon className="w-8 h-8 ml-2" />
          </div>
        </div>
      </header>

      <div className="container max-w-[1200px] py-6">
        <div className="flex items-center gap-1 mb-6">
          <BuildingIcon className="w-6 h-6" />
          <h1 className="font-desktop-h4-semibold text-neutral-neutral-10">
            Create New Organisation
          </h1>
        </div>

        <div className="flex gap-5">
          {/* Organisation Details Card */}
          <Card className="w-[343px] border-[#ced4da]">
            <CardHeader className="pb-0 pt-3.5 px-6">
              <CardTitle className="font-m3-title-medium text-black">
                Organisation Details
              </CardTitle>
              <Separator className="mt-3" />
            </CardHeader>
            <CardContent className="pt-4 px-6">
              <div className="flex flex-col gap-[30px]">
                {formFields.map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label className="font-desktop-body-s text-neutralneutral-8">
                      {field.label}{" "}
                      {field.required && (
                        <span className="text-[#dc2020]">*</span>
                      )}
                    </label>

                    {field.type === "select" ? (
                      <Select>
                        <SelectTrigger
                          className={`h-10 ${field.disabled ? "bg-neutral-neutral-2 border-[#dee2e6] text-neutralneutral-6" : "bg-neutral-neutral-0 border-[#adb5bd] text-neutral-neutral-7"}`}
                          disabled={field.disabled}
                        >
                          <SelectValue placeholder={field.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option-1">Option 1</SelectItem>
                          <SelectItem value="option-2">Option 2</SelectItem>
                          <SelectItem value="option-3">Option 3</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input
                        placeholder={field.placeholder}
                        className={`h-10 ${field.disabled ? "bg-neutral-neutral-2 border-[#dee2e6] text-neutralneutral-6" : "bg-neutral-neutral-0 border-[#adb5bd] text-neutral-neutral-7"}`}
                        disabled={field.disabled}
                      />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contacts Card */}
          <Card className="flex-1 border-[#ced4da]">
            <CardHeader className="pb-0 pt-3.5 px-6">
              <CardTitle className="font-m3-title-medium text-black">
                Contacts
              </CardTitle>
              <Separator className="mt-3" />
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center h-[550px]">
              <div className="flex flex-col items-center">
                <div className="w-[437px] h-32 relative mb-4">
                  <img
                    className="absolute w-[179px] h-[35px] top-[74px] left-0"
                    alt="Background left"
                    src="https://c.animaapp.com/m99it0a6qPNW2s/img/bg-left.png"
                  />
                  <img
                    className="absolute w-[179px] h-[35px] top-[41px] left-[258px]"
                    alt="Background right"
                    src="https://c.animaapp.com/m99it0a6qPNW2s/img/bg-right.png"
                  />
                  <div className="absolute w-[100px] h-32 top-0 left-[168px]">
                    <div className="relative w-[103px] h-[130px] -top-px -left-0.5">
                      <img
                        className="absolute w-[103px] h-[120px] top-[9px] left-0"
                        alt="Rectangle"
                        src="https://c.animaapp.com/m99it0a6qPNW2s/img/rectangle-43.svg"
                      />
                      <img
                        className="absolute w-[100px] h-[55px] top-[11px] left-0.5"
                        alt="Rectangle"
                        src="https://c.animaapp.com/m99it0a6qPNW2s/img/rectangle-43-1.svg"
                      />
                      <img
                        className="absolute w-[57px] h-[65px] top-px left-6"
                        alt="Rectangle"
                        src="https://c.animaapp.com/m99it0a6qPNW2s/img/rectangle-46-1.svg"
                      />
                      <img
                        className="absolute w-[59px] h-[51px] top-0 left-[23px]"
                        alt="Rectangle"
                        src="https://c.animaapp.com/m99it0a6qPNW2s/img/rectangle-46.svg"
                      />
                      <img
                        className="absolute w-[101px] h-[90px] top-[39px] left-px"
                        alt="Path path copy"
                        src="https://c.animaapp.com/m99it0a6qPNW2s/img/path-38---path-38-copy.png"
                      />
                      <img
                        className="absolute w-[38px] h-[3px] top-[33px] left-[33px]"
                        alt="Line copy"
                        src="https://c.animaapp.com/m99it0a6qPNW2s/img/line-copy-32.svg"
                      />
                      <img
                        className="absolute w-[13px] h-[3px] top-[41px] left-[31px]"
                        alt="Line copy"
                        src="https://c.animaapp.com/m99it0a6qPNW2s/img/line-copy-32.svg"
                      />
                      <img
                        className="absolute w-3 h-[3px] top-[41px] left-12"
                        alt="Line copy"
                        src="https://c.animaapp.com/m99it0a6qPNW2s/img/line-copy-32.svg"
                      />
                      <img
                        className="absolute w-[7px] h-[3px] top-[41px] left-[63px]"
                        alt="Line copy"
                        src="https://c.animaapp.com/m99it0a6qPNW2s/img/line-copy-31.svg"
                      />
                      <img
                        className="absolute w-3.5 h-[5px] top-[21px] left-[57px]"
                        alt="Line copy"
                        src="https://c.animaapp.com/m99it0a6qPNW2s/img/line-copy-32.svg"
                      />
                      <img
                        className="absolute w-[19px] h-[5px] top-[21px] left-[33px]"
                        alt="Line copy"
                        src="https://c.animaapp.com/m99it0a6qPNW2s/img/line-copy-32.svg"
                      />
                      <img
                        className="absolute w-[21px] h-[3px] top-[51px] left-[45px]"
                        alt="Line copy"
                        src="https://c.animaapp.com/m99it0a6qPNW2s/img/line-copy-32.svg"
                      />
                      <img
                        className="absolute w-1.5 h-[3px] top-[51px] left-[33px]"
                        alt="Line copy"
                        src="https://c.animaapp.com/m99it0a6qPNW2s/img/line-copy-31.svg"
                      />
                      <img
                        className="absolute w-[29px] h-[3px] top-3.5 left-[33px]"
                        alt="Line copy"
                        src="https://c.animaapp.com/m99it0a6qPNW2s/img/line-copy-32.svg"
                      />
                      <img
                        className="absolute w-1.5 h-[3px] top-3.5 left-[65px]"
                        alt="Line copy"
                        src="https://c.animaapp.com/m99it0a6qPNW2s/img/line-copy-31.svg"
                      />
                    </div>
                  </div>
                </div>
                <p className="font-desktop-body-s text-neutral-neutral-9 text-center">
                  No contacts have been added yet.
                </p>
                <Button
                  variant="outline"
                  className="mt-8 border-[#0079c8] text-brandprimary-base"
                >
                  <img
                    className="w-6 h-6 mr-2"
                    alt="Add circle"
                    src="https://c.animaapp.com/m99it0a6qPNW2s/img/add-circle-24dp-5f6368-fill1-wght400-grad0-opsz24--1--1.svg"
                  />
                  Add Contact
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="fixed bottom-0 w-full h-20 bg-white flex items-center justify-end px-6">
        <Button
          variant="outline"
          className="h-10 px-4 bg-neutral-neutral-2 text-neutralneutral-6 border-[#dee2e6]"
        >
          Create
        </Button>
      </footer>
    </main>
  );
};
