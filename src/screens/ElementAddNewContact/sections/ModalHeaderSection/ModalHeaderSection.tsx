import { PlusCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const ModalHeaderSection = (): JSX.Element => {
  // Empty state illustration data
  const emptyStateIllustration = {
    bgLeft: "https://c.animaapp.com/m99j4v3pZ3m5Io/img/bg-left.png",
    bgRight: "https://c.animaapp.com/m99j4v3pZ3m5Io/img/bg-right.png",
    rectangle: "https://c.animaapp.com/m99j4v3pZ3m5Io/img/rectangle-43-1.svg",
    rectangle2: "https://c.animaapp.com/m99j4v3pZ3m5Io/img/rectangle-43.svg",
    rectangle3: "https://c.animaapp.com/m99j4v3pZ3m5Io/img/rectangle-46.svg",
    rectangle4: "https://c.animaapp.com/m99j4v3pZ3m5Io/img/rectangle-46-1.svg",
    pathPathCopy:
      "https://c.animaapp.com/m99j4v3pZ3m5Io/img/path-38---path-38-copy.png",
    lineCopy: "https://c.animaapp.com/m99j4v3pZ3m5Io/img/line-copy-28.svg",
    lineCopy2: "https://c.animaapp.com/m99j4v3pZ3m5Io/img/line-copy-31.svg",
  };

  return (
    <Card className="w-[838px] h-[649px] bg-white rounded overflow-hidden border border-solid border-[#ced4da]">
      <div className="p-3.5">
        <div className="font-m3-title-medium font-[number:var(--m3-title-medium-font-weight)] text-black text-[length:var(--m3-title-medium-font-size)] tracking-[var(--m3-title-medium-letter-spacing)] leading-[var(--m3-title-medium-line-height)] [font-style:var(--m3-title-medium-font-style)]">
          Contacts
        </div>
      </div>

      <Separator className="w-full" />

      <CardContent className="flex flex-col items-center justify-center pt-[183px]">
        <div className="w-[437px] h-[167px] flex flex-col items-center">
          <div className="relative w-[437px] h-32">
            <img
              className="absolute w-[179px] h-[35px] top-[74px] left-0"
              alt="Background left"
              src={emptyStateIllustration.bgLeft}
            />

            <img
              className="absolute w-[179px] h-[35px] top-[41px] left-[258px]"
              alt="Background right"
              src={emptyStateIllustration.bgRight}
            />

            <div className="absolute w-[100px] h-32 top-0 left-[168px]">
              <div className="relative w-[103px] h-[130px] -top-px -left-0.5">
                <img
                  className="absolute w-[103px] h-[120px] top-[9px] left-0"
                  alt="Rectangle"
                  src={emptyStateIllustration.rectangle}
                />

                <img
                  className="absolute w-[100px] h-[55px] top-[11px] left-0.5"
                  alt="Rectangle"
                  src={emptyStateIllustration.rectangle2}
                />

                <img
                  className="absolute w-[57px] h-[65px] top-px left-6"
                  alt="Rectangle"
                  src={emptyStateIllustration.rectangle3}
                />

                <img
                  className="absolute w-[59px] h-[51px] top-0 left-[23px]"
                  alt="Rectangle"
                  src={emptyStateIllustration.rectangle4}
                />

                <img
                  className="absolute w-[101px] h-[90px] top-[39px] left-px"
                  alt="Path path copy"
                  src={emptyStateIllustration.pathPathCopy}
                />

                <img
                  className="absolute w-[38px] h-[3px] top-[33px] left-[33px]"
                  alt="Line copy"
                  src={emptyStateIllustration.lineCopy}
                />

                <img
                  className="absolute w-[13px] h-[3px] top-[41px] left-[31px]"
                  alt="Line copy"
                  src={emptyStateIllustration.lineCopy}
                />

                <img
                  className="absolute w-3 h-[3px] top-[41px] left-12"
                  alt="Line copy"
                  src={emptyStateIllustration.lineCopy}
                />

                <img
                  className="absolute w-[7px] h-[3px] top-[41px] left-[63px]"
                  alt="Line copy"
                  src={emptyStateIllustration.lineCopy2}
                />

                <img
                  className="absolute w-3.5 h-[5px] top-[21px] left-[57px]"
                  alt="Line copy"
                  src={emptyStateIllustration.lineCopy}
                />

                <img
                  className="absolute w-[19px] h-[5px] top-[21px] left-[33px]"
                  alt="Line copy"
                  src={emptyStateIllustration.lineCopy}
                />

                <img
                  className="absolute w-[21px] h-[3px] top-[51px] left-[45px]"
                  alt="Line copy"
                  src={emptyStateIllustration.lineCopy}
                />

                <img
                  className="absolute w-1.5 h-[3px] top-[51px] left-[33px]"
                  alt="Line copy"
                  src={emptyStateIllustration.lineCopy2}
                />

                <img
                  className="absolute w-[29px] h-[3px] top-3.5 left-[33px]"
                  alt="Line copy"
                  src={emptyStateIllustration.lineCopy}
                />

                <img
                  className="absolute w-1.5 h-[3px] top-3.5 left-[65px]"
                  alt="Line copy"
                  src={emptyStateIllustration.lineCopy2}
                />
              </div>
            </div>
          </div>

          <div className="mt-[25px] font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutral-neutral-9 text-[length:var(--desktop-body-s-font-size)] text-center tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)] [font-style:var(--desktop-body-s-font-style)]">
            No contacts have been added yet.
          </div>
        </div>

        <Button
          className="mt-8 h-10 px-4 py-0 bg-neutral-neutral-0 text-brandprimary-base border border-solid border-[#0079c8]"
          variant="outline"
        >
          <PlusCircleIcon className="w-6 h-6 mr-2" />
          <span className="font-actions-s font-[number:var(--actions-s-font-weight)] text-[length:var(--actions-s-font-size)] tracking-[var(--actions-s-letter-spacing)] leading-[var(--actions-s-line-height)] [font-style:var(--actions-s-font-style)]">
            Add Contact
          </span>
        </Button>
      </CardContent>
    </Card>
  );
};
