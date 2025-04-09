import {
  ChevronDownIcon,
  PlusCircleIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";
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
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

export const Element = (): JSX.Element => {
  // Data for organization details
  const organizationDetails = [
    { label: "SIC Code", value: "Computer Software and Services" },
    { label: "Business Sector", value: "Software Development" },
    { label: "No of Employees", value: "100" },
    { label: "Organisation ID", value: "12792009009" },
  ];

  return (
    <div className="bg-[#f3f6f8] flex flex-row justify-center w-full">
      <div className="bg-[#f3f6f8] w-[1366px] h-[886px]">
        <div className="relative h-[886px]">
          {/* Main Content */}
          <div className="absolute w-[1366px] h-[886px] top-0 left-0">
            {/* Header */}
            <div className="absolute w-[1366px] h-14 top-0 left-0">
              <div className="absolute w-[1366px] h-14 top-0 left-0 bg-white shadow-[0px_1px_2px_#0000001a]">
                <div className="absolute w-[106px] h-8 top-3 left-[1177px]">
                  <div className="relative w-[102px] h-8 left-1">
                    <ChevronDownIcon className="absolute w-8 h-8 top-0 left-[70px]" />
                    <div className="absolute top-[5px] left-0 font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] text-right tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] whitespace-nowrap [font-style:var(--desktop-body-s-font-style)]">
                      John Smith
                    </div>
                  </div>
                </div>

                <div className="absolute w-12 h-12 top-1 left-[83px]">
                  <div className="h-12 bg-[url(https://c.animaapp.com/m99mhmasZ9S13z/img/vector.svg)] bg-[100%_100%]">
                    <div className="w-12 h-12 bg-[url(https://c.animaapp.com/m99mhmasZ9S13z/img/mask-group.png)] bg-[100%_100%]">
                      <div className="relative w-[45px] h-5 top-[5px] left-[3px] bg-[url(https://c.animaapp.com/m99mhmasZ9S13z/img/mask-group-1.png)] bg-[100%_100%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute w-10 h-10 top-2 left-[1131px] bg-brandprimary-base rounded-[100px]">
                <img
                  className="absolute w-10 h-10 top-0 left-0 object-cover"
                  alt="Profile"
                  src="https://c.animaapp.com/m99mhmasZ9S13z/img/image-1.png"
                />
              </div>
            </div>

            {/* Organization Title */}
            <div className="absolute w-72 h-[27px] top-[133px] left-[86px]">
              <div className="inline-flex items-start gap-1 relative">
                <div className="relative w-fit mt-[-1.00px] font-desktop-h4-semibold font-[number:var(--desktop-h4-semibold-font-weight)] text-neutral-neutral-10 text-[length:var(--desktop-h4-semibold-font-size)] tracking-[var(--desktop-h4-semibold-letter-spacing)] leading-[var(--desktop-h4-semibold-line-height)] whitespace-nowrap [font-style:var(--desktop-h4-semibold-font-style)]">
                  Techno Wizards
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="absolute w-[1366px] h-20 top-[806px] left-0 bg-white">
              <Button
                variant="outline"
                className="w-[133px] h-10 absolute top-5 left-[1150px] bg-neutral-neutral-2 text-neutralneutral-6"
              >
                Save
              </Button>
            </div>

            {/* Main Content Card */}
            <Card className="absolute w-[1197px] h-[453px] top-[334px] left-[86px] rounded border-[#ced4da]">
              <CardContent className="p-0">
                <img
                  className="absolute w-[519px] h-px top-[54px] left-[679px]"
                  alt="Border"
                  src="https://c.animaapp.com/m99mhmasZ9S13z/img/rectangle-34.svg"
                />

                {/* Empty State */}
                <div className="absolute w-[437px] h-[167px] top-[127px] left-[380px]">
                  <div className="absolute w-[377px] top-[145px] left-[30px] font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutral-neutral-9 text-[length:var(--desktop-body-s-font-size)] text-center tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                    No sales&nbsp;&nbsp;activities have been added yet.
                  </div>

                  <div className="absolute w-[436px] h-32 top-0 left-px">
                    <div className="relative w-[437px] h-32">
                      <img
                        className="top-[74px] left-0 absolute w-[179px] h-[35px]"
                        alt="Bg left"
                        src="https://c.animaapp.com/m99mhmasZ9S13z/img/bg-left.png"
                      />

                      <img
                        className="top-[41px] left-[258px] absolute w-[179px] h-[35px]"
                        alt="Bg right"
                        src="https://c.animaapp.com/m99mhmasZ9S13z/img/bg-right.png"
                      />

                      <div className="absolute w-[100px] h-32 top-0 left-[168px]">
                        <div className="relative w-[103px] h-[130px] -top-px -left-0.5">
                          <img
                            className="absolute w-[103px] h-[120px] top-[9px] left-0"
                            alt="Rectangle"
                            src="https://c.animaapp.com/m99mhmasZ9S13z/img/rectangle-43.svg"
                          />

                          <img
                            className="absolute w-[100px] h-[55px] top-[11px] left-0.5"
                            alt="Rectangle"
                            src="https://c.animaapp.com/m99mhmasZ9S13z/img/rectangle-43-1.svg"
                          />

                          <img
                            className="absolute w-[57px] h-[65px] top-px left-6"
                            alt="Rectangle"
                            src="https://c.animaapp.com/m99mhmasZ9S13z/img/rectangle-46-1.svg"
                          />

                          <img
                            className="absolute w-[59px] h-[51px] top-0 left-[23px]"
                            alt="Rectangle"
                            src="https://c.animaapp.com/m99mhmasZ9S13z/img/rectangle-46.svg"
                          />

                          <img
                            className="absolute w-[101px] h-[90px] top-[39px] left-px"
                            alt="Path path copy"
                            src="https://c.animaapp.com/m99mhmasZ9S13z/img/path-38---path-38-copy.png"
                          />

                          <img
                            className="absolute w-[38px] h-[3px] top-[33px] left-[33px]"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99mhmasZ9S13z/img/line-copy-28.svg"
                          />

                          <img
                            className="absolute w-[13px] h-[3px] top-[41px] left-[31px]"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99mhmasZ9S13z/img/line-copy-28.svg"
                          />

                          <img
                            className="absolute w-3 h-[3px] top-[41px] left-12"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99mhmasZ9S13z/img/line-copy-28.svg"
                          />

                          <img
                            className="absolute w-[7px] h-[3px] top-[41px] left-[63px]"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99mhmasZ9S13z/img/line-copy-27.svg"
                          />

                          <img
                            className="absolute w-3.5 h-[5px] top-[21px] left-[57px]"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99mhmasZ9S13z/img/line-copy-28.svg"
                          />

                          <img
                            className="absolute w-[19px] h-[5px] top-[21px] left-[33px]"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99mhmasZ9S13z/img/line-copy-28.svg"
                          />

                          <img
                            className="absolute w-[21px] h-[3px] top-[51px] left-[45px]"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99mhmasZ9S13z/img/line-copy-28.svg"
                          />

                          <img
                            className="absolute w-1.5 h-[3px] top-[51px] left-[33px]"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99mhmasZ9S13z/img/line-copy-27.svg"
                          />

                          <img
                            className="absolute w-[29px] h-[3px] top-3.5 left-[33px]"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99mhmasZ9S13z/img/line-copy-28.svg"
                          />

                          <img
                            className="absolute w-1.5 h-[3px] top-3.5 left-[65px]"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99mhmasZ9S13z/img/line-copy-27.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add Sales Activities Button */}
                <Button
                  variant="outline"
                  className="absolute top-[324px] left-[503px] border-[#0079c8] text-brandprimary-base"
                >
                  <PlusCircleIcon className="w-6 h-6 mr-2" />
                  Add Sales Activities
                </Button>
              </CardContent>

              {/* Tabs */}
              <Tabs
                defaultValue="salesActivities"
                className="absolute w-[682px] h-[55px] top-0 left-px"
              >
                <TabsList className="flex h-[55px] p-0 bg-transparent">
                  <TabsTrigger
                    value="contacts"
                    className="w-[227px] h-[55px] rounded-none data-[state=inactive]:border-b data-[state=inactive]:border-neutral-neutral-5 data-[state=inactive]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-brandprimary-base data-[state=inactive]:text-neutral-neutral-7"
                  >
                    Contacts
                  </TabsTrigger>
                  <TabsTrigger
                    value="salesActivities"
                    className="w-[227px] h-[55px] rounded-none data-[state=inactive]:border-b data-[state=inactive]:border-neutral-neutral-5 data-[state=active]:border-b-2 data-[state=active]:border-brandprimary-base data-[state=inactive]:text-neutral-neutral-7"
                  >
                    Sales Activities
                  </TabsTrigger>
                  <TabsTrigger
                    value="prospectDetails"
                    className="w-[227px] h-[55px] rounded-none data-[state=inactive]:border-b data-[state=inactive]:border-neutral-neutral-5 data-[state=active]:border-b-2 data-[state=active]:border-brandprimary-base data-[state=inactive]:text-neutral-neutral-7"
                  >
                    Prospect Details
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </Card>

            {/* Organization Details Card */}
            <Card className="absolute w-[1197px] h-[135px] top-[180px] left-[86px] rounded border-[#ced4da]">
              <CardContent className="p-0">
                <div className="absolute w-[363px] h-6 top-3.5 left-[21px] font-m3-title-medium font-[number:var(--m3-title-medium-font-weight)] text-black text-[length:var(--m3-title-medium-font-size)] tracking-[var(--m3-title-medium-letter-spacing)] leading-[var(--m3-title-medium-line-height)] [font-style:var(--m3-title-medium-font-style)]">
                  Contacts
                </div>

                <Separator className="absolute w-[1196px] h-px top-[52px] left-px" />

                <img
                  className="absolute w-6 h-6 top-[15px] left-[1153px]"
                  alt="Edit square"
                  src="https://c.animaapp.com/m99mhmasZ9S13z/img/edit-square-24dp-5f6368-fill1-wght400-grad0-opsz24--1--1.svg"
                />

                {/* Organization Details */}
                <div className="inline-flex items-center gap-10 absolute top-[72px] left-[21px]">
                  {organizationDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="inline-flex flex-col items-start relative flex-[0_0_auto]"
                    >
                      <div className="relative w-fit mt-[-1.00px] font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] whitespace-nowrap [font-style:var(--desktop-body-s-font-style)]">
                        {detail.label}
                      </div>
                      <div className="relative w-fit font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutral-neutral-9 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] whitespace-nowrap [font-style:var(--desktop-body-s-font-style)]">
                        {detail.value}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Breadcrumb */}
            <div className="flex w-72 items-center px-px py-0 absolute top-[86px] left-[83px]">
              <div className="inline-flex h-6 items-start relative flex-[0_0_auto]">
                <div className="relative w-fit font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-brandprimary-base text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] whitespace-nowrap [font-style:var(--desktop-body-s-font-style)]">
                  Create Organisation
                </div>
                <img
                  className="relative w-6 h-6"
                  alt="Styles icons angle"
                  src="https://c.animaapp.com/m99mhmasZ9S13z/img/styles-icons-angle-down.svg"
                />
              </div>

              <div className="flex h-6 items-center gap-2.5 px-0 py-px relative flex-1 grow">
                <div className="relative flex-1 grow h-[21px]">
                  <div className="absolute -top-px left-0 font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutral-neutral-7 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] whitespace-nowrap [font-style:var(--desktop-body-s-font-style)]">
                    Organisation Details
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Overlay */}
          <div className="absolute w-[1366px] h-[886px] top-0 left-0 bg-[#060e25] opacity-70" />

          {/* Modal Dialog */}
          <Dialog defaultOpen={true}>
            <DialogContent className="absolute w-[841px] h-[886px] top-0 left-[525px] p-0 rounded-none border-none max-w-none">
              <DialogHeader className="px-[30px] pt-[13px] pb-0">
                <DialogTitle className="font-m3-title-medium font-[number:var(--m3-title-medium-font-weight)] text-black text-[length:var(--m3-title-medium-font-size)] tracking-[var(--m3-title-medium-letter-spacing)] leading-[var(--m3-title-medium-line-height)] [font-style:var(--m3-title-medium-font-style)]">
                  Add New Sales Activity
                </DialogTitle>
                <XIcon className="absolute w-6 h-6 top-3.5 right-[30px] cursor-pointer" />
              </DialogHeader>

              <Separator className="w-full mt-[15px]" />

              {/* Form Fields - First Row */}
              <div className="flex gap-6 px-[30px] mt-[30px]">
                {/* Sale Activity Name */}
                <div className="flex flex-col w-[380px] items-start gap-2">
                  <label className="text-neutralneutral-8 relative self-stretch mt-[-1.00px] font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                    <span className="text-[#4f575e]">Sale Activity Name </span>
                    <span className="text-[#dc2020]">*</span>
                  </label>
                  <Select defaultValue="cashPlanM">
                    <SelectTrigger className="h-10 bg-neutral-neutral-0 border-[#ced4da]">
                      <SelectValue placeholder="Select activity">
                        Cash Plan M
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cashPlanM">Cash Plan M</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Product Configuration Base */}
                <div className="flex flex-col w-[380px] items-start gap-2">
                  <label className="text-neutralneutral-8 relative self-stretch mt-[-1.00px] font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                    <span className="text-[#4f575e]">
                      Product Configuration Base{" "}
                    </span>
                    <span className="text-[#dc2020]">*</span>
                  </label>
                  <Select defaultValue="cashPlan">
                    <SelectTrigger className="h-10 bg-neutral-neutral-2 border-[#dee2e6]">
                      <SelectValue placeholder="Select configuration">
                        Cash Plan
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cashPlan">Cash Plan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Bespoke Pricing Matrix Checkbox */}
              <div className="flex items-center gap-2 mt-[30px] px-[30px]">
                <Checkbox
                  id="bespokePricing"
                  className="w-6 h-6 rounded border-[#ced4da]"
                />
                <label
                  htmlFor="bespokePricing"
                  className="font-phone-body-s font-[number:var(--phone-body-s-font-weight)] text-neutral-neutral-9 text-[length:var(--phone-body-s-font-size)] tracking-[var(--phone-body-s-letter-spacing)] leading-[var(--phone-body-s-line-height)] [font-style:var(--phone-body-s-font-style)]"
                >
                  Use Bespoke Pricing Matrix
                </label>
              </div>

              {/* Form Fields - Second Row */}
              <div className="flex gap-6 px-[30px] mt-[25px]">
                {/* Pricing Matrix */}
                <div className="flex flex-col w-[380px] items-start gap-2">
                  <label className="text-neutralneutral-8 relative self-stretch mt-[-1.00px] font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                    <span className="text-[#4f575e]">Pricing Matrix </span>
                    <span className="text-[#dc2020]">*</span>
                  </label>
                  <Select defaultValue="cashPlan">
                    <SelectTrigger className="h-10 bg-neutral-neutral-2 border-[#dee2e6]">
                      <SelectValue placeholder="Select pricing">
                        Cash Plan
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cashPlan">Cash Plan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Sales Sources */}
                <div className="flex flex-col w-[380px] items-start gap-2">
                  <label className="text-neutralneutral-8 relative self-stretch mt-[-1.00px] font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                    <span className="text-[#4f575e]">Sales Sources </span>
                    <span className="text-[#dc2020]">*</span>
                  </label>
                  <Select defaultValue="other">
                    <SelectTrigger className="h-10 bg-neutral-neutral-2 border-[#dee2e6]">
                      <SelectValue placeholder="Select source">
                        Other
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Form Fields - Third Row */}
              <div className="flex gap-6 px-[30px] mt-[25px]">
                {/* Campaign Code */}
                <div className="flex items-start gap-2 w-[380px]">
                  <div className="flex flex-col w-[333px] items-start gap-2">
                    <label className="text-neutralneutral-8 relative self-stretch mt-[-1.00px] font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                      <span className="text-[#4f575e]">Campaign Code </span>
                      <span className="text-[#dc2020]">*</span>
                    </label>
                    <Input
                      defaultValue="0001"
                      className="h-10 bg-neutral-neutral-0 border-[#ced4da] pl-4"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 mt-[29px] bg-neutral-neutral-0 border-[#ced4da]"
                  >
                    <img
                      className="w-6 h-6"
                      alt="Magic"
                      src="https://c.animaapp.com/m99mhmasZ9S13z/img/magic.svg"
                    />
                  </Button>
                </div>

                {/* Intermediary */}
                <div className="flex items-start gap-2 w-[380px]">
                  <div className="flex flex-col w-[333px] items-start gap-2">
                    <label className="text-neutralneutral-8 relative self-stretch mt-[-1.00px] font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                      Intermediary
                    </label>
                    <Input
                      defaultValue="AN Capital LTD"
                      className="h-10 bg-neutral-neutral-0 border-[#ced4da] pl-4"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 mt-[29px] bg-neutral-neutral-0 border-[#ced4da]"
                  >
                    <SearchIcon className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              {/* Form Fields - Fourth Row */}
              <div className="flex gap-6 px-[30px] mt-[30px]">
                {/* Select Contact */}
                <div className="flex items-start gap-2 w-[380px]">
                  <div className="flex flex-col w-[333px] items-start gap-2">
                    <label className="text-neutralneutral-8 relative self-stretch mt-[-1.00px] font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                      <span className="text-[#4f575e]">Select Contact </span>
                      <span className="text-[#dc2020]">*</span>
                    </label>
                    <Input
                      defaultValue="Pallavi Singh"
                      className="h-10 bg-neutral-neutral-0 border-[#ced4da] pl-4"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 mt-[29px] bg-neutral-neutral-0 border-[#ced4da]"
                  >
                    <SearchIcon className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              {/* Auto Allocate Portfolio Checkbox */}
              <div className="flex items-center gap-2 mt-[30px] px-[30px]">
                <Checkbox
                  id="autoAllocate"
                  className="w-6 h-6 rounded border-[#ced4da]"
                />
                <label
                  htmlFor="autoAllocate"
                  className="font-phone-body-s font-[number:var(--phone-body-s-font-weight)] text-neutral-neutral-9 text-[length:var(--phone-body-s-font-size)] tracking-[var(--phone-body-s-letter-spacing)] leading-[var(--phone-body-s-line-height)] [font-style:var(--phone-body-s-font-style)]"
                >
                  Auto Allocate Portfoilio
                </label>
              </div>

              {/* Form Fields - Fifth Row */}
              <div className="flex gap-6 px-[30px] mt-[25px]">
                {/* Portfolio Name */}
                <div className="flex items-start gap-2 w-[380px]">
                  <div className="flex flex-col w-[333px] items-start gap-2">
                    <label className="text-neutralneutral-8 relative self-stretch mt-[-1.00px] font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                      <span className="text-[#4f575e]">Portfolio Name </span>
                      <span className="text-[#dc2020]">*</span>
                    </label>
                    <Input
                      defaultValue="1909002016"
                      className="h-10 bg-neutral-neutral-0 border-[#ced4da] pl-4"
                    />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-10 h-10 mt-[29px] bg-neutral-neutral-0 border-[#ced4da]"
                  >
                    <SearchIcon className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              {/* Footer with buttons */}
              <div className="absolute bottom-0 left-0 w-full">
                <Separator className="w-full" />
                <div className="flex justify-end gap-5 p-5">
                  <Button
                    variant="outline"
                    className="w-[153px] h-10 border-[#0079c8] text-brandprimary-base"
                  >
                    Cancel
                  </Button>
                  <Button className="w-[153px] h-10 bg-brandprimary-base text-neutral-neutral-0">
                    Add
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
