import { ChevronDownIcon, EditIcon } from "lucide-react";
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
import { Separator } from "../../components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

export const ElementSalesActivities = (): JSX.Element => {
  // Organization data
  const organizationInfo = [
    {
      label: "SIC Code",
      value: "Computer Software and Services",
    },
    {
      label: "Business Sector",
      value: "Software Development",
    },
    {
      label: "No of Employees",
      value: "100",
    },
    {
      label: "Organisation ID",
      value: "12792009009",
    },
  ];

  return (
    <div className="bg-[#f3f6f8] flex flex-row justify-center w-full">
      <div className="bg-[#f3f6f8] w-[1366px] relative">
        {/* Header */}
        <header className="w-full h-14 bg-white shadow-[0px_1px_2px_#0000001a] flex items-center justify-between px-6">
          <div className="flex items-center">
            <div className="w-12 h-12">
              <div className="h-12 bg-[url(https://c.animaapp.com/m99k3boxU4HlXm/img/vector.svg)] bg-[100%_100%]">
                <div className="w-12 h-12 bg-[url(https://c.animaapp.com/m99k3boxU4HlXm/img/mask-group.png)] bg-[100%_100%]">
                  <div className="relative w-[45px] h-5 top-[5px] left-[3px] bg-[url(https://c.animaapp.com/m99k3boxU4HlXm/img/mask-group-1.png)] bg-[100%_100%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Avatar className="w-10 h-10 bg-brandprimary-base">
              <AvatarImage
                src="https://c.animaapp.com/m99k3boxU4HlXm/img/image-1.png"
                alt="Profile"
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

        {/* Breadcrumb */}
        <nav className="flex w-72 items-center px-px py-0 mt-[86px] ml-[83px]">
          <div className="inline-flex h-6 items-start">
            <span className="font-desktop-body-s text-brandprimary-base">
              Organisations
            </span>
            <img
              className="w-6 h-6"
              alt="Angle down"
              src="https://c.animaapp.com/m99k3boxU4HlXm/img/styles-icons-angle-down.svg"
            />
          </div>
          <div className="flex h-6 items-center gap-2.5 px-0 py-px flex-1 grow">
            <div className="relative flex-1 grow h-[21px]">
              <div className="absolute -top-px left-0 font-desktop-body-s text-neutral-neutral-7">
                Organisation Details
              </div>
            </div>
          </div>
        </nav>

        {/* Organization Title */}
        <div className="mt-[20px] ml-[86px]">
          <h1 className="font-desktop-h4-semibold text-neutral-neutral-10">
            Techno Wizards
          </h1>
        </div>

        {/* Organization Info Card */}
        <Card className="w-[1197px] h-[135px] mt-[20px] ml-[86px] border-[#ced4da]">
          <CardHeader className="p-3.5 pb-0 flex flex-row justify-between items-center">
            <CardTitle className="font-m3-title-medium text-black">
              Contacts
            </CardTitle>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <EditIcon className="h-6 w-6 text-neutral-neutral-7" />
            </Button>
          </CardHeader>
          <Separator className="mt-3" />
          <CardContent className="p-0">
            <div className="flex items-center gap-[100px] mt-5 ml-[21px]">
              {organizationInfo.map((item, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="font-desktop-body-s text-neutralneutral-8">
                    {item.label}
                  </div>
                  <div className="font-desktop-body-s text-neutral-neutral-9">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Card className="w-[1197px] mt-[20px] ml-[86px] border-[#ced4da]">
          <Tabs defaultValue="sales-activities">
            <TabsList className="w-full bg-transparent h-[55px] p-0">
              <TabsTrigger
                value="contacts"
                className="w-[227px] h-[55px] rounded-none data-[state=inactive]:border-b data-[state=inactive]:border-neutral-neutral-5 data-[state=inactive]:text-neutral-neutral-7 data-[state=active]:border-b-2 data-[state=active]:border-brandprimary-base data-[state=active]:text-neutral-neutral-9 font-desktop-body-s"
              >
                Contacts
              </TabsTrigger>
              <TabsTrigger
                value="sales-activities"
                className="w-[227px] h-[55px] rounded-none data-[state=inactive]:border-b data-[state=inactive]:border-neutral-neutral-5 data-[state=inactive]:text-neutral-neutral-7 data-[state=active]:border-b-2 data-[state=active]:border-brandprimary-base data-[state=active]:text-neutral-neutral-9 font-actions-s"
              >
                Sales Activities
              </TabsTrigger>
              <TabsTrigger
                value="prospect-details"
                className="w-[227px] h-[55px] rounded-none data-[state=inactive]:border-b data-[state=inactive]:border-neutral-neutral-5 data-[state=inactive]:text-neutral-neutral-7 data-[state=active]:border-b-2 data-[state=active]:border-brandprimary-base data-[state=active]:text-neutral-neutral-9 font-desktop-body-s"
              >
                Prospect Details
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sales-activities" className="mt-0 p-0">
              <CardContent className="flex flex-col items-center justify-center py-16">
                <div className="w-[437px] h-32 relative mb-4">
                  <img
                    className="top-[74px] left-0 absolute w-[179px] h-[35px]"
                    alt="Background left"
                    src="https://c.animaapp.com/m99k3boxU4HlXm/img/bg-left.png"
                  />
                  <img
                    className="top-[41px] left-[258px] absolute w-[179px] h-[35px]"
                    alt="Background right"
                    src="https://c.animaapp.com/m99k3boxU4HlXm/img/bg-right.png"
                  />
                  <div className="absolute w-[100px] h-32 top-0 left-[168px]">
                    <div className="relative w-[103px] h-[130px] -top-px -left-0.5">
                      <img
                        className="absolute w-[103px] h-[120px] top-[9px] left-0"
                        alt="Rectangle"
                        src="https://c.animaapp.com/m99k3boxU4HlXm/img/rectangle-43.svg"
                      />
                      <img
                        className="absolute w-[100px] h-[55px] top-[11px] left-0.5"
                        alt="Rectangle"
                        src="https://c.animaapp.com/m99k3boxU4HlXm/img/rectangle-43-1.svg"
                      />
                      <img
                        className="absolute w-[57px] h-[65px] top-px left-6"
                        alt="Rectangle"
                        src="https://c.animaapp.com/m99k3boxU4HlXm/img/rectangle-46.svg"
                      />
                      <img
                        className="absolute w-[59px] h-[51px] top-0 left-[23px]"
                        alt="Rectangle"
                        src="https://c.animaapp.com/m99k3boxU4HlXm/img/rectangle-46-1.svg"
                      />
                      <img
                        className="absolute w-[101px] h-[90px] top-[39px] left-px"
                        alt="Path"
                        src="https://c.animaapp.com/m99k3boxU4HlXm/img/path-38---path-38-copy.png"
                      />
                      <img
                        className="absolute w-[38px] h-[3px] top-[33px] left-[33px]"
                        alt="Line"
                        src="https://c.animaapp.com/m99k3boxU4HlXm/img/line-copy-32.svg"
                      />
                      <img
                        className="absolute w-[13px] h-[3px] top-[41px] left-[31px]"
                        alt="Line"
                        src="https://c.animaapp.com/m99k3boxU4HlXm/img/line-copy-32.svg"
                      />
                      <img
                        className="absolute w-3 h-[3px] top-[41px] left-12"
                        alt="Line"
                        src="https://c.animaapp.com/m99k3boxU4HlXm/img/line-copy-32.svg"
                      />
                      <img
                        className="absolute w-[7px] h-[3px] top-[41px] left-[63px]"
                        alt="Line"
                        src="https://c.animaapp.com/m99k3boxU4HlXm/img/line-copy-31.svg"
                      />
                      <img
                        className="absolute w-3.5 h-[5px] top-[21px] left-[57px]"
                        alt="Line"
                        src="https://c.animaapp.com/m99k3boxU4HlXm/img/line-copy-32.svg"
                      />
                      <img
                        className="absolute w-[19px] h-[5px] top-[21px] left-[33px]"
                        alt="Line"
                        src="https://c.animaapp.com/m99k3boxU4HlXm/img/line-copy-32.svg"
                      />
                      <img
                        className="absolute w-[21px] h-[3px] top-[51px] left-[45px]"
                        alt="Line"
                        src="https://c.animaapp.com/m99k3boxU4HlXm/img/line-copy-32.svg"
                      />
                      <img
                        className="absolute w-1.5 h-[3px] top-[51px] left-[33px]"
                        alt="Line"
                        src="https://c.animaapp.com/m99k3boxU4HlXm/img/line-copy-31.svg"
                      />
                      <img
                        className="absolute w-[29px] h-[3px] top-3.5 left-[33px]"
                        alt="Line"
                        src="https://c.animaapp.com/m99k3boxU4HlXm/img/line-copy-32.svg"
                      />
                      <img
                        className="absolute w-1.5 h-[3px] top-3.5 left-[65px]"
                        alt="Line"
                        src="https://c.animaapp.com/m99k3boxU4HlXm/img/line-copy-31.svg"
                      />
                    </div>
                  </div>
                </div>

                <p className="font-desktop-body-s text-neutral-neutral-9 text-center mb-8">
                  No sales&nbsp;&nbsp;activities have been added yet.
                </p>

                <Button className="bg-neutral-neutral-0 text-brandprimary-base border border-[#0079c8] hover:bg-neutral-neutral-2">
                  <img
                    className="w-6 h-6 mr-2"
                    alt="Add circle"
                    src="https://c.animaapp.com/m99k3boxU4HlXm/img/add-circle-24dp-5f6368-fill1-wght400-grad0-opsz24--1--1.svg"
                  />
                  Add Sales Activities
                </Button>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Footer */}
        <footer className="w-full h-20 bg-white fixed bottom-0 left-0 flex items-center justify-end pr-6">
          <Button
            variant="outline"
            className="h-10 px-4 bg-neutral-neutral-2 text-neutralneutral-6 border-[#dee2e6]"
          >
            Save
          </Button>
        </footer>
      </div>
    </div>
  );
};
