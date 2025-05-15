import * as React from "react";
import clsx from "clsx";
import { HeroHome } from "../fragments/hero";
import { AboutUsHome } from "../fragments/about_us";
import { BenefitHome } from "../fragments/benefit";
import { ContactUsHome } from "../fragments/contact_us";

export const HomeContainer = () => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 items-start content-start justify-center justify-items-center",
        "w-full h-full",
        "relative"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[1.5rem] lg:gap-[0rem]",
          "max-w-[1200px]",
          "px-[1.5rem]"
        )}
      >
        <HeroHome />
        <AboutUsHome />
        <BenefitHome />
        <ContactUsHome />
      </div>
    </div>
  );
};
