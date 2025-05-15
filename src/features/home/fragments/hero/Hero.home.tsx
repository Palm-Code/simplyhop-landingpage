import * as React from "react";
import Image from "next/image";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";

export const HeroHome = () => {
  const dictionaries = getDictionaries();
  return (
    <div
      className={clsx(
        "grid grid-cols-1 items-start content-start justify-center justify-items-center gap-[2.5rem]",
        "w-full",
        "py-[3rem]"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 items-start content-start justify-center justify-items-center gap-[0.75rem]",
          "w-full"
        )}
      >
        <div
          className={clsx(
            "flex items-center justify-center",
            "rounded-[99px]",
            "px-[17px] py-[0.625rem]",
            "border border-[#E9E6E6]",
            "text-[#000000] text-[1rem] font-bold"
          )}
        >
          {dictionaries.hero.badge.label}
        </div>

        <div
          className={clsx(
            "grid grid-cols-1 items-start content-start justify-center justify-items-center gap-[22px]",
            "w-full"
          )}
        >
          <h1
            className={clsx("text-[2rem] lg:text-[5rem] text-[#919292] font-bold text-center")}
          >
            {dictionaries.hero.title}
            <span className={clsx("text-[#33CC33]")}>
              {dictionaries.hero.title_2.replaceAll("'", '"')}
            </span>
          </h1>
          <p className={clsx("text-[1.125rem] text-[#232323] font-bold text-center")}>
            {dictionaries.hero.description}
          </p>
        </div>
      </div>

      <Image {...dictionaries.hero.image} />
    </div>
  );
};
