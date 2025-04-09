import { ChevronDownIcon, XIcon } from "lucide-react";
import React from "react";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
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

export const ElementAddNewSales = (): JSX.Element => {
  // Company information data
  const companyInfo = [
    { label: "SIC Code", value: "Computer Software and Services" },
    { label: "Business Sector", value: "Software Development" },
    { label: "No of Employees", value: "100" },
    { label: "Organisation ID", value: "12792009009" },
  ];

  return (
    <div className="bg-[#f3f6f8] flex flex-row justify-center w-full">
      <div className="bg-[#f3f6f8] w-[1366px] h-[886px]">
        <div className="relative h-[886px]">
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
                <div className="h-12 bg-[url(https://c.animaapp.com/m99kfy1nVWgqjn/img/vector.svg)] bg-[100%_100%]">
                  <div className="w-12 h-12 bg-[url(https://c.animaapp.com/m99kfy1nVWgqjn/img/mask-group.png)] bg-[100%_100%]">
                    <div className="relative w-[45px] h-5 top-[5px] left-[3px] bg-[url(https://c.animaapp.com/m99kfy1nVWgqjn/img/mask-group-1.png)] bg-[100%_100%]" />
                  </div>
                </div>
              </div>
            </div>

            <Avatar className="absolute w-10 h-10 top-2 left-[1131px] bg-brandprimary-base rounded-[100px]">
              <img
                className="absolute w-10 h-10 top-0 left-0 object-cover"
                alt="User avatar"
                src="https://c.animaapp.com/m99kfy1nVWgqjn/img/image-1.png"
              />
            </Avatar>
          </div>

          {/* Company Name */}
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
              className="w-[133px] h-10 absolute top-5 left-[1150px] bg-neutral-neutral-2 rounded overflow-hidden border border-solid border-[#dee2e6]"
            >
              <span className="font-actions-s font-[number:var(--actions-s-font-weight)] text-neutralneutral-6 text-[length:var(--actions-s-font-size)] text-center tracking-[var(--actions-s-letter-spacing)] leading-[var(--actions-s-line-height)] whitespace-nowrap [font-style:var(--actions-s-font-style)]">
                Save
              </span>
            </Button>
          </div>

          {/* Main Content Area */}
          <div className="absolute w-[1197px] h-[453px] top-[334px] left-[86px] rounded">
            <Card className="absolute w-[1197px] h-[453px] top-0 left-0 bg-white rounded overflow-hidden border border-solid border-[#ced4da]">
              <CardContent className="p-0">
                <img
                  className="absolute w-[519px] h-px top-[54px] left-[679px]"
                  alt="Border"
                  src="https://c.animaapp.com/m99kfy1nVWgqjn/img/rectangle-34.svg"
                />

                {/* Empty state content */}
                <div className="absolute w-[437px] h-[167px] top-[127px] left-[380px]">
                  <div className="absolute w-[377px] top-[145px] left-[30px] font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutral-neutral-9 text-[length:var(--desktop-body-s-font-size)] text-center tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                    No sales&nbsp;&nbsp;activities have been added yet.
                  </div>

                  <div className="absolute w-[436px] h-32 top-0 left-px">
                    <div className="relative w-[437px] h-32">
                      <img
                        className="top-[74px] left-0 absolute w-[179px] h-[35px]"
                        alt="Background left"
                        src="https://c.animaapp.com/m99kfy1nVWgqjn/img/bg-left.png"
                      />

                      <img
                        className="top-[41px] left-[258px] absolute w-[179px] h-[35px]"
                        alt="Background right"
                        src="https://c.animaapp.com/m99kfy1nVWgqjn/img/bg-right.png"
                      />

                      <div className="absolute w-[100px] h-32 top-0 left-[168px]">
                        <div className="relative w-[103px] h-[130px] -top-px -left-0.5">
                          <img
                            className="absolute w-[103px] h-[120px] top-[9px] left-0"
                            alt="Rectangle"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/rectangle-43-1.svg"
                          />

                          <img
                            className="absolute w-[100px] h-[55px] top-[11px] left-0.5"
                            alt="Rectangle"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/rectangle-43.svg"
                          />

                          <img
                            className="absolute w-[57px] h-[65px] top-px left-6"
                            alt="Rectangle"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/rectangle-46.svg"
                          />

                          <img
                            className="absolute w-[59px] h-[51px] top-0 left-[23px]"
                            alt="Rectangle"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/rectangle-46-1.svg"
                          />

                          <img
                            className="absolute w-[101px] h-[90px] top-[39px] left-px"
                            alt="Path path copy"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/path-38---path-38-copy.png"
                          />

                          <img
                            className="absolute w-[38px] h-[3px] top-[33px] left-[33px]"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/line-copy-30.svg"
                          />

                          <img
                            className="absolute w-[13px] h-[3px] top-[41px] left-[31px]"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/line-copy-30.svg"
                          />

                          <img
                            className="absolute w-3 h-[3px] top-[41px] left-12"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/line-copy-30.svg"
                          />

                          <img
                            className="absolute w-[7px] h-[3px] top-[41px] left-[63px]"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/line-copy-31.svg"
                          />

                          <img
                            className="absolute w-3.5 h-[5px] top-[21px] left-[57px]"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/line-copy-30.svg"
                          />

                          <img
                            className="absolute w-[19px] h-[5px] top-[21px] left-[33px]"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/line-copy-30.svg"
                          />

                          <img
                            className="absolute w-[21px] h-[3px] top-[51px] left-[45px]"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/line-copy-30.svg"
                          />

                          <img
                            className="absolute w-1.5 h-[3px] top-[51px] left-[33px]"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/line-copy-31.svg"
                          />

                          <img
                            className="absolute w-[29px] h-[3px] top-3.5 left-[33px]"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/line-copy-30.svg"
                          />

                          <img
                            className="absolute w-1.5 h-[3px] top-3.5 left-[65px]"
                            alt="Line copy"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/line-copy-31.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add Sales Activities Button */}
                <Button
                  variant="outline"
                  className="h-10 absolute top-[324px] left-[503px] bg-neutral-neutral-0 rounded overflow-hidden border border-solid border-[#0079c8] text-brandprimary-base"
                >
                  <img
                    className="w-6 h-6 mr-2"
                    alt="Add circle"
                    src="https://c.animaapp.com/m99kfy1nVWgqjn/img/add-circle-24dp-5f6368-fill1-wght400-grad0-opsz24--1--1.svg"
                  />
                  <span className="font-actions-s font-[number:var(--actions-s-font-weight)] text-brandprimary-base text-[length:var(--actions-s-font-size)] text-center tracking-[var(--actions-s-letter-spacing)] leading-[var(--actions-s-line-height)] whitespace-nowrap [font-style:var(--actions-s-font-style)]">
                    Add Sales Activities
                  </span>
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
                    className="w-[227px] h-[55px] rounded-none data-[state=inactive]:border-b data-[state=inactive]:border-neutral-neutral-5 data-[state=inactive]:bg-transparent"
                  >
                    <span className="font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutral-neutral-7 text-[length:var(--desktop-body-s-font-size)] text-center tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] whitespace-nowrap [font-style:var(--desktop-body-s-font-style)]">
                      Contacts
                    </span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="salesActivities"
                    className="w-[227px] h-[55px] rounded-none data-[state=active]:border-b-2 data-[state=active]:border-brandprimary-base data-[state=active]:bg-transparent"
                  >
                    <span className="font-actions-s font-[number:var(--actions-s-font-weight)] text-neutral-neutral-9 text-[length:var(--actions-s-font-size)] text-center tracking-[var(--actions-s-letter-spacing)] leading-[var(--actions-s-line-height)] whitespace-nowrap [font-style:var(--actions-s-font-style)]">
                      Sales Activities
                    </span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="prospectDetails"
                    className="w-[227px] h-[55px] rounded-none data-[state=inactive]:border-b data-[state=inactive]:border-neutral-neutral-5 data-[state=inactive]:bg-transparent"
                  >
                    <span className="font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutral-neutral-7 text-[length:var(--desktop-body-s-font-size)] text-center tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] whitespace-nowrap [font-style:var(--desktop-body-s-font-style)]">
                      Prospect Details
                    </span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </Card>
          </div>

          {/* Company Info Card */}
          <Card className="absolute w-[1197px] h-[135px] top-[180px] left-[86px] rounded">
            <CardHeader className="p-3.5">
              <CardTitle className="font-m3-title-medium font-[number:var(--m3-title-medium-font-weight)] text-black text-[length:var(--m3-title-medium-font-size)] tracking-[var(--m3-title-medium-letter-spacing)] leading-[var(--m3-title-medium-line-height)] [font-style:var(--m3-title-medium-font-style)]">
                Contacts
              </CardTitle>
              <img
                className="absolute w-6 h-6 top-[15px] right-[21px]"
                alt="Edit square"
                src="https://c.animaapp.com/m99kfy1nVWgqjn/img/edit-square-24dp-5f6368-fill1-wght400-grad0-opsz24--1--1.svg"
              />
            </CardHeader>
            <Separator className="w-[1196px] mx-auto" />
            <CardContent className="pt-5 pb-3 px-[21px]">
              <div className="flex items-center gap-10">
                {companyInfo.map((item, index) => (
                  <div key={index} className="flex flex-col items-start">
                    <div className="font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] whitespace-nowrap [font-style:var(--desktop-body-s-font-style)]">
                      {item.label}
                    </div>
                    <div className="font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutral-neutral-9 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] whitespace-nowrap [font-style:var(--desktop-body-s-font-style)]">
                      {item.value}
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
                src="https://c.animaapp.com/m99kfy1nVWgqjn/img/styles-icons-angle-down.svg"
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

          {/* Modal Overlay */}
          <div className="absolute w-[1366px] h-[886px] top-0 left-0 bg-[#060e25] opacity-70" />

          {/* Add New Sales Activity Dialog */}
          <Dialog defaultOpen>
            <DialogContent className="absolute w-[841px] h-[886px] top-0 left-[525px] p-0 border-none rounded-none">
              <DialogHeader className="px-[29px] pt-[13px] pb-0">
                <DialogTitle className="font-m3-title-medium font-[number:var(--m3-title-medium-font-weight)] text-black text-[length:var(--m3-title-medium-font-size)] tracking-[var(--m3-title-medium-letter-spacing)] leading-[var(--m3-title-medium-line-height)] whitespace-nowrap [font-style:var(--m3-title-medium-font-style)]">
                  Add New Sales Activity
                </DialogTitle>
                <XIcon className="absolute w-6 h-6 top-3.5 right-[29px]" />
              </DialogHeader>
              <Separator className="w-full mt-[15px]" />

              {/* Form Fields */}
              <div className="px-[29px] pt-[30px] flex flex-col gap-[30px]">
                {/* Row 1 */}
                <div className="flex gap-[22px]">
                  {/* Sale Activity Name */}
                  <div className="flex flex-col w-[380px] items-start gap-2">
                    <label className="font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                      <span className="text-[#4f575e]">
                        Sale Activity Name{" "}
                      </span>
                      <span className="text-[#dc2020]">*</span>
                    </label>
                    <Select defaultValue="cashPlanM">
                      <SelectTrigger className="w-full h-10 bg-neutral-neutral-0 rounded border border-solid border-[#ced4da]">
                        <SelectValue placeholder="Select activity name">
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
                    <label className="font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                      <span className="text-[#4f575e]">
                        Product Configuration Base{" "}
                      </span>
                      <span className="text-[#dc2020]">*</span>
                    </label>
                    <Select defaultValue="cashPlan" disabled>
                      <SelectTrigger className="w-full h-10 bg-neutral-neutral-2 rounded border border-solid border-[#dee2e6]">
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
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="bespokePricing"
                    className="w-6 h-6 rounded border border-solid border-[#ced4da]"
                  />
                  <label
                    htmlFor="bespokePricing"
                    className="font-phone-body-s font-[number:var(--phone-body-s-font-weight)] text-neutral-neutral-9 text-[length:var(--phone-body-s-font-size)] tracking-[var(--phone-body-s-letter-spacing)] leading-[var(--phone-body-s-line-height)] whitespace-nowrap [font-style:var(--phone-body-s-font-style)]"
                  >
                    Use Bespoke Pricing Matrix
                  </label>
                </div>

                {/* Row 2 */}
                <div className="flex gap-[22px]">
                  {/* Pricing Matrix */}
                  <div className="flex flex-col w-[380px] items-start gap-2">
                    <label className="font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                      <span className="text-[#4f575e]">Pricing Matrix </span>
                      <span className="text-[#dc2020]">*</span>
                    </label>
                    <Select defaultValue="cashPlan" disabled>
                      <SelectTrigger className="w-full h-10 bg-neutral-neutral-2 rounded border border-solid border-[#dee2e6]">
                        <SelectValue placeholder="Select pricing matrix">
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
                    <label className="font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                      <span className="text-[#4f575e]">Sales Sources </span>
                      <span className="text-[#dc2020]">*</span>
                    </label>
                    <Select defaultValue="other" disabled>
                      <SelectTrigger className="w-full h-10 bg-neutral-neutral-2 rounded border border-solid border-[#dee2e6]">
                        <SelectValue placeholder="Select sales source">
                          Other
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex gap-[22px]">
                  {/* Campaign Code */}
                  <div className="w-[380px] h-[69px]">
                    <div className="flex flex-col w-[333px] items-start gap-2">
                      <label className="font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                        <span className="text-[#4f575e]">Campaign Code </span>
                        <span className="text-[#dc2020]">*</span>
                      </label>
                      <div className="relative w-full">
                        <Input
                          defaultValue="0001"
                          className="h-10 pl-4 bg-neutral-neutral-0 rounded border border-solid border-[#ced4da] text-neutral-neutral-9"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute right-[-47px] top-0 w-10 h-10 p-0 flex items-center justify-center bg-neutral-neutral-0 rounded border border-solid border-[#ced4da]"
                        >
                          <img
                            className="w-6 h-6"
                            alt="Magic"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/magic.svg"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Intermediary */}
                  <div className="w-[380px] h-[69px]">
                    <div className="flex flex-col w-[333px] items-start gap-2">
                      <label className="font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                        Intermediary
                      </label>
                      <div className="relative w-full">
                        <Input
                          placeholder="Enter"
                          className="h-10 pl-4 bg-neutral-neutral-0 rounded border border-solid border-[#ced4da] text-neutral-neutral-7"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute right-[-47px] top-0 w-10 h-10 p-0 flex items-center justify-center bg-neutral-neutral-0 rounded border border-solid border-[#ced4da]"
                        >
                          <img
                            className="w-6 h-6"
                            alt="Magic"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/magic.svg"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="flex gap-[22px]">
                  {/* Select Contact */}
                  <div className="w-[380px] h-[69px]">
                    <div className="flex flex-col w-[333px] items-start gap-2">
                      <label className="font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                        <span className="text-[#4f575e]">Select Contact </span>
                        <span className="text-[#dc2020]">*</span>
                      </label>
                      <div className="relative w-full">
                        <Input
                          defaultValue="Pallavi Singh"
                          className="h-10 pl-4 bg-neutral-neutral-0 rounded border border-solid border-[#ced4da] text-neutral-neutral-9"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute right-[-47px] top-0 w-10 h-10 p-0 flex items-center justify-center bg-neutral-neutral-0 rounded border border-solid border-[#ced4da]"
                        >
                          <img
                            className="w-6 h-6"
                            alt="Magic"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/magic.svg"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Auto Allocate Portfolio Checkbox */}
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="autoAllocate"
                    className="w-6 h-6 rounded border border-solid border-[#ced4da]"
                  />
                  <label
                    htmlFor="autoAllocate"
                    className="font-phone-body-s font-[number:var(--phone-body-s-font-weight)] text-neutral-neutral-9 text-[length:var(--phone-body-s-font-size)] tracking-[var(--phone-body-s-letter-spacing)] leading-[var(--phone-body-s-line-height)] whitespace-nowrap [font-style:var(--phone-body-s-font-style)]"
                  >
                    Auto Allocate Portfoilio
                  </label>
                </div>

                {/* Row 5 */}
                <div className="flex gap-[22px]">
                  {/* Portfolio Name */}
                  <div className="w-[380px] h-[69px]">
                    <div className="flex flex-col w-[333px] items-start gap-2">
                      <label className="font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
                        <span className="text-[#4f575e]">Portfolio Name </span>
                        <span className="text-[#dc2020]">*</span>
                      </label>
                      <div className="relative w-full">
                        <Input
                          placeholder="Select Portfolio"
                          className="h-10 pl-4 bg-neutral-neutral-0 rounded border border-solid border-[#ced4da] text-neutral-neutral-7"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute right-[-47px] top-0 w-10 h-10 p-0 flex items-center justify-center bg-neutral-neutral-0 rounded border border-solid border-[#ced4da]"
                        >
                          <img
                            className="w-6 h-6"
                            alt="Magic"
                            src="https://c.animaapp.com/m99kfy1nVWgqjn/img/magic.svg"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="w-full mt-auto" />

              {/* Dialog Footer */}
              <DialogFooter className="px-[29px] py-5 flex justify-end gap-5">
                <Button
                  variant="outline"
                  className="w-[153px] h-10 bg-neutral-neutral-0 rounded border border-solid border-[#0079c8] text-brandprimary-base"
                >
                  Cancel
                </Button>
                <Button className="w-[153px] h-10 bg-brandprimary-base rounded text-neutral-neutral-0">
                  Add
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
