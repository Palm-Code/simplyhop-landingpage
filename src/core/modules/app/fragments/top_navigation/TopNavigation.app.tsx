"use client";
import * as React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { getDictionaries } from "../../i18n";

export const TopNavigation = () => {
  const dictionaries = getDictionaries();

  return (
    <nav className={clsx("fixed top-0 left-0 right-0", "w-full", "z-[200]")}>
      <div
        className={clsx(
          "grid grid-cols-1 items-center content-center justify-center justify-items-center",
          "w-full h-full",
          "bg-[white]",
          "px-[1rem]"
        )}
      >
        <div
          className={clsx(
            "grid grid-flow-col items-center content-center justify-between justify-items-start",
            "max-w-container w-full h-[90px]"
          )}
        >
          {/* NOTES: logo */}
          <Link href={dictionaries.logo.href}>
            <div className="w-[170px] h-[62px] flex items-center justify-center">
              <Image
                {...dictionaries.logo.image}
                className={clsx("w-[170px] h-[170px]", "object-contain")}
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
