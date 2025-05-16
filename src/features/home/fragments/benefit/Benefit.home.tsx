import * as React from "react";
import Image from "next/image";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";

export const BenefitHome = () => {
  const dictionaries = getDictionaries();
  return (
    <div
      className={clsx(
        "grid grid-cols-1 lg:grid-cols-[492px_1fr] items-center content-center justify-start justify-items-start gap-[1rem]",
        "w-full min-h-[680px]",
        "px-[1.5rem]",
        "max-w-[1224px]"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[1.5rem] lg:gap-[2.5rem]",
          "w-full"
        )}
      >
        <h2
          className={clsx(
            "text-[1.5rem] lg:text-[2rem] text-[#33CC33] font-bold"
          )}
        >
          {dictionaries.benefit.title}
        </h2>
        <ol className={clsx("list-disc", "pl-[1.5rem]")}>
          {dictionaries.benefit.contents.map((content, index) => (
            <li
              key={index}
              className={clsx("text-[1rem] text-[#5B5B5B] font-normal")}
            >
              {content}
            </li>
          ))}
        </ol>
      </div>

      <div
        className={clsx(
          "hidden lg:grid grid-cols-1 items-center content-center justify-start justify-items-start gap-[0rem]",
          "w-full",
          "relative",
          "min-h-[480px]"
        )}
      >
        <Image
          {...dictionaries.benefit.image.rectangle}
          className={clsx("absolute top-0 left-0", "w-[312px] h-[289px]")}
        />
        <Image
          {...dictionaries.benefit.image.rectangle}
          className={clsx("absolute bottom-0 right-0", "w-[312px] h-[289px]")}
        />
        {dictionaries.benefit.image.desktop.items.map((image, index) => (
          <div
            key={index}
            className={clsx(index == 1 ? "pl-[4rem]" : "pl-[0rem]", "relative")}
          >
            <Image
              key={index}
              {...image}
              className={clsx("object-contain", "relative z-10")}
            />
          </div>
        ))}
      </div>

      <div
        className={clsx(
          "grid lg:hidden grid-cols-1 items-start content-start justify-center justify-items-center gap-[0rem]",
          "w-full",
          "relative"
        )}
      >
        <Image
          {...dictionaries.benefit.image.mobile}
          className={clsx("object-contain")}
        />
      </div>
    </div>
  );
};
