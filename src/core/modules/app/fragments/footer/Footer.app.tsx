"use client";
import * as React from "react";
import clsx from "clsx";
import Link from "next/link";
import { getDictionaries } from "../../i18n";
import SVGIcon from "@/core/icons";

export const FooterApp = () => {
  const dictionaries = getDictionaries();
  return (
    <div
      className={clsx(
        "grid grid-flow-row lg:grid-flow-col items-start content-start justify-center justify-items-center lg:justify-between lg:justify-items-start gap-[2rem]",
        "w-full",
        "px-[1rem] py-[2rem]"
      )}
    >
      <div
        className={clsx(
          "grid grid-flow-row lg:grid-flow-col items-center content-center justify-center justify-items-center lg:justify-start lg:justify-items-start gap-[1.5rem]",
          "w-full"
        )}
      >
        {dictionaries.footer.legal.items.map((item, itemIndex) => (
          <Link
            key={itemIndex}
            href={item.href}
            className={clsx(
              "text-[#5B5B5B] hover:text-green-500 text-[0.875rem] font-normal hover:font-medium"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* credit */}
      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]",
          "w-full"
        )}
      >
        <SVGIcon
          name="Copyright"
          className={clsx("w-[1rem] h-[1rem]", "text-[#5B5B5B]")}
        />
        <span
          className={clsx(
            "text-[#767676] text-[0.875rem] lg:text-[1rem] font-normal"
          )}
        >
          {dictionaries.footer.credit.label}
        </span>
      </div>
    </div>
  );
};
