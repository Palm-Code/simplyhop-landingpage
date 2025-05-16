import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";
import Link from "next/link";

export const ContactUsHome = () => {
  const dictionaries = getDictionaries();
  return (
    <div
      className={clsx(
        "grid ggrid-cols-1 place-content-center place-items-center gap-[1.5rem]",
        "h-[294px] lg:h-[384px] w-full",
        "bg-[#FBFFFB]",
        "px-[1.5rem]"
      )}
    >
      <div
        className={clsx(
          "grid ggrid-cols-1 place-content-center place-items-center gap-[1.5rem]",
          "h-[294px] lg:h-[384px] w-full",
          "max-w-[1054px]"
        )}
      >
        <h2
          className={clsx(
            "text-[1.5rem] lg:text-[2rem] text-[#232323] font-bold"
          )}
        >
          {dictionaries.contact_us.title}
        </h2>
        <p
          className={clsx(
            "text-[0.875rem] lg:text-[1.5rem] text-[#5B5B5B] font-normal text-center"
          )}
        >
          {dictionaries.contact_us.description}
        </p>
        <Link
          href={dictionaries.contact_us.email.href}
          className={clsx(
            "text-[1.5rem] text-[#33CC33] font-normal text-center"
          )}
          dangerouslySetInnerHTML={{
            __html: dictionaries.contact_us.email.children,
          }}
        />
      </div>
    </div>
  );
};
