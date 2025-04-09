import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const ElementLoginScreen = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1366px] h-[886px] relative">
        <footer className="absolute bottom-[56px] right-[375px]">
          <a
            className="font-['Roboto',Helvetica] font-normal text-neutral-neutral-9 text-xs tracking-[0] leading-[21px] whitespace-nowrap"
            href="https://www.bupa.com/important-notices/copyright-notice"
            rel="noopener noreferrer"
            target="_blank"
          >
            © 2025 Bupa
          </a>
        </footer>

        <div className="flex flex-col w-[295px] items-center gap-[54px] absolute top-40 right-[193px]">
          {/* Bupa Logo */}
          <div className="relative w-[89px] h-[89px]">
            <div className="h-[89px] bg-[url(https://c.animaapp.com/m98jaraoXs6x2X/img/vector.svg)] bg-[100%_100%]">
              <div className="w-[89px] h-[89px] bg-[url(https://c.animaapp.com/m98jaraoXs6x2X/img/mask-group.png)] bg-[100%_100%]">
                <div className="relative w-[83px] h-[37px] top-[9px] left-1.5 bg-[url(https://c.animaapp.com/m98jaraoXs6x2X/img/mask-group-1.png)] bg-[100%_100%]" />
              </div>
            </div>
          </div>

          {/* Login Form */}
          <Card className="border-none shadow-none w-full">
            <CardContent className="p-0 flex flex-col items-start gap-[31px]">
              <h2 className="self-stretch mt-[-1.00px] font-['Roboto',Helvetica] font-bold text-neutral-neutral-10 text-[22px] tracking-[0] leading-[27px]">
                Sign In
              </h2>

              {/* Username Field */}
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                <label
                  htmlFor="username"
                  className="self-stretch mt-[-1.00px] font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)]"
                >
                  Username
                </label>
                <Input
                  id="username"
                  className="h-10 bg-neutral-neutral-0 border-[#adb5bd] pl-4"
                  placeholder="Enter Username"
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                <label
                  htmlFor="password"
                  className="self-stretch mt-[-1.00px] font-desktop-body-s font-[number:var(--desktop-body-s-font-weight)] text-neutralneutral-8 text-[length:var(--desktop-body-s-font-size)] tracking-[var(--desktop-body-s-letter-spacing)] leading-[var(--desktop-body-s-line-height)]"
                >
                  Password
                </label>
                <div className="relative w-full">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="h-10 bg-neutral-neutral-0 border-[#adb5bd] pl-4 pr-10"
                    placeholder="Enter Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-0 h-10 flex items-center px-2 bg-neutral-neutral-0"
                  >
                    <img
                      className="w-6 h-6"
                      alt="Visibility toggle"
                      src="https://c.animaapp.com/m98jaraoXs6x2X/img/visibility-off-24dp-5f6368-fill1-wght400-grad0-opsz24.svg"
                    />
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <a
                href="#"
                className="self-stretch font-['Roboto',Helvetica] font-medium text-brandprimary-base text-sm tracking-[0] leading-[21px] cursor-pointer"
              >
                Forgot Password ?
              </a>

              {/* Sign In Button */}
              <Button className="h-10 w-full justify-center bg-neutral-neutral-2 hover:bg-neutral-neutral-4 text-neutralneutral-6 border border-solid border-[#dee2e6] rounded">
                <span className="font-actions-s font-[number:var(--actions-s-font-weight)] text-[length:var(--actions-s-font-size)] text-center tracking-[var(--actions-s-letter-spacing)] leading-[var(--actions-s-line-height)] whitespace-nowrap [font-style:var(--actions-s-font-style)]">
                  Sign In
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Left Side Image */}
        <div className="absolute w-[686px] h-[890px] -top-1 left-[-3px]">
          <img
            className="absolute w-[683px] h-[886px] top-1 left-[3px]"
            alt="Bupa brand image"
            src="https://c.animaapp.com/m98jaraoXs6x2X/img/group-61.png"
          />
        </div>
      </div>
    </div>
  );
};
