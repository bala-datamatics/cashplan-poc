import { PlusCircleIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const IntermediariesTableSection = (): JSX.Element => {
  // Sample data for the intermediaries table
  const intermediaries = [
    {
      id: "1235677780",
      name: "2 Plan Wealth Policy",
      postcode: "LS115BZ",
      networkName: "-",
      status: "Approved",
      address: "BUPA",
    },
    {
      id: "1990002015",
      name: "AN Capital LTD",
      postcode: "DA110DJ",
      networkName: "-",
      status: "Approved",
      address: "BUPA",
    },
    {
      id: "7896541236",
      name: "3 Secure Future Insurance",
      postcode: "M123CX",
      networkName: "-",
      status: "Approved",
      address: "BUPA",
    },
    {
      id: "1123654789",
      name: "FutureGuard Holdings",
      postcode: "GR145FY",
      networkName: "-",
      status: "Approved",
      address: "BUPA",
    },
    {
      id: "0022556699",
      name: "HealthWise Life Insurance",
      postcode: "EX200DK",
      networkName: "-",
      status: "Approved",
      address: "BUPA",
    },
  ];

  return (
    <Card className="w-full border border-solid border-[#ced4da] rounded overflow-hidden">
      <CardContent className="p-0">
        <div className="border-b border-solid border-[#ced4da]">
          <Tabs defaultValue="sales" className="w-full">
            <TabsList className="bg-transparent h-auto border-b">
              <TabsTrigger
                value="contacts"
                className="px-4 py-2 data-[state=inactive]:bg-transparent data-[state=inactive]:text-neutral-neutral-9"
              >
                Contacts
              </TabsTrigger>
              <TabsTrigger
                value="sales"
                className="px-4 py-2 data-[state=active]:border-b-2 data-[state=active]:border-brandprimary-base data-[state=active]:rounded-none data-[state=active]:bg-transparent data-[state=active]:text-brandprimary-base"
              >
                Sales Activities
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="p-4">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-medium flex items-center">
              Intermediaries
              <Badge className="ml-2 bg-brandprimary-base text-white rounded-full w-6 h-6 flex items-center justify-center p-0">
                5
              </Badge>
            </h2>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10">
                  <input
                    type="checkbox"
                    className="rounded border-neutral-neutral-5"
                  />
                </TableHead>
                <TableHead className="font-medium">ID</TableHead>
                <TableHead className="font-medium">Name</TableHead>
                <TableHead className="font-medium">Postcode</TableHead>
                <TableHead className="font-medium">Network Name</TableHead>
                <TableHead className="font-medium">Status</TableHead>
                <TableHead className="font-medium">Address</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {intermediaries.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="py-2">
                    {index === 1 ? (
                      <div className="w-4 h-4 rounded-full bg-brandprimary-base"></div>
                    ) : (
                      <input
                        type="checkbox"
                        className="rounded border-neutral-neutral-5"
                      />
                    )}
                  </TableCell>
                  <TableCell className="py-2">{item.id}</TableCell>
                  <TableCell className="py-2">{item.name}</TableCell>
                  <TableCell className="py-2">{item.postcode}</TableCell>
                  <TableCell className="py-2">{item.networkName}</TableCell>
                  <TableCell className="py-2">
                    <Badge className="bg-[#639C13] text-white font-normal">
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="py-2">{item.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* This is the empty state that would show when there's no data */}
        {intermediaries.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="relative w-[437px] h-32 mb-4">
              <img
                className="top-[74px] left-0 absolute w-[179px] h-[35px]"
                alt="Bg left"
                src="https://c.animaapp.com/m99lugy61ix3NT/img/bg-left.png"
              />
              <img
                className="top-[41px] left-[258px] absolute w-[179px] h-[35px]"
                alt="Bg right"
                src="https://c.animaapp.com/m99lugy61ix3NT/img/bg-right.png"
              />
              <div className="absolute w-[100px] h-32 top-0 left-[168px]">
                <div className="relative w-[103px] h-[130px] -top-px -left-0.5">
                  <img
                    className="absolute w-[103px] h-[120px] top-[9px] left-0"
                    alt="Rectangle"
                    src="https://c.animaapp.com/m99lugy61ix3NT/img/rectangle-43.svg"
                  />
                  <img
                    className="absolute w-[100px] h-[55px] top-[11px] left-0.5"
                    alt="Rectangle"
                    src="https://c.animaapp.com/m99lugy61ix3NT/img/rectangle-43-1.svg"
                  />
                  <img
                    className="absolute w-[57px] h-[65px] top-px left-6"
                    alt="Rectangle"
                    src="https://c.animaapp.com/m99lugy61ix3NT/img/rectangle-46.svg"
                  />
                  <img
                    className="absolute w-[59px] h-[51px] top-0 left-[23px]"
                    alt="Rectangle"
                    src="https://c.animaapp.com/m99lugy61ix3NT/img/rectangle-46-1.svg"
                  />
                  <img
                    className="absolute w-[101px] h-[90px] top-[39px] left-px"
                    alt="Path path copy"
                    src="https://c.animaapp.com/m99lugy61ix3NT/img/path-38---path-38-copy.png"
                  />
                  <img
                    className="absolute w-[38px] h-[3px] top-[33px] left-[33px]"
                    alt="Line copy"
                    src="https://c.animaapp.com/m99lugy61ix3NT/img/line-copy-30.svg"
                  />
                  <img
                    className="absolute w-[13px] h-[3px] top-[41px] left-[31px]"
                    alt="Line copy"
                    src="https://c.animaapp.com/m99lugy61ix3NT/img/line-copy-30.svg"
                  />
                  <img
                    className="absolute w-3 h-[3px] top-[41px] left-12"
                    alt="Line copy"
                    src="https://c.animaapp.com/m99lugy61ix3NT/img/line-copy-30.svg"
                  />
                  <img
                    className="absolute w-[7px] h-[3px] top-[41px] left-[63px]"
                    alt="Line copy"
                    src="https://c.animaapp.com/m99lugy61ix3NT/img/line-copy-31.svg"
                  />
                  <img
                    className="absolute w-3.5 h-[5px] top-[21px] left-[57px]"
                    alt="Line copy"
                    src="https://c.animaapp.com/m99lugy61ix3NT/img/line-copy-30.svg"
                  />
                  <img
                    className="absolute w-[19px] h-[5px] top-[21px] left-[33px]"
                    alt="Line copy"
                    src="https://c.animaapp.com/m99lugy61ix3NT/img/line-copy-30.svg"
                  />
                  <img
                    className="absolute w-[21px] h-[3px] top-[51px] left-[45px]"
                    alt="Line copy"
                    src="https://c.animaapp.com/m99lugy61ix3NT/img/line-copy-30.svg"
                  />
                  <img
                    className="absolute w-1.5 h-[3px] top-[51px] left-[33px]"
                    alt="Line copy"
                    src="https://c.animaapp.com/m99lugy61ix3NT/img/line-copy-31.svg"
                  />
                  <img
                    className="absolute w-[29px] h-[3px] top-3.5 left-[33px]"
                    alt="Line copy"
                    src="https://c.animaapp.com/m99lugy61ix3NT/img/line-copy-30.svg"
                  />
                  <img
                    className="absolute w-1.5 h-[3px] top-3.5 left-[65px]"
                    alt="Line copy"
                    src="https://c.animaapp.com/m99lugy61ix3NT/img/line-copy-31.svg"
                  />
                </div>
              </div>
            </div>
            <p className="text-center text-neutral-neutral-9 font-desktop-body-s text-[14px] leading-[21px]">
              No sales activities have been added yet.
            </p>
            <Button className="mt-6 bg-neutral-neutral-0 text-brandprimary-base border border-solid border-[#0079c8] hover:bg-neutral-neutral-1">
              <PlusCircleIcon className="mr-2 h-5 w-5" />
              Add Sales Activities
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
