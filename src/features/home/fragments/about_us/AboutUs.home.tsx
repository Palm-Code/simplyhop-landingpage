import * as React from "react";
import Image from "next/image";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";

export const AboutUsHome = () => {
  const dictionaries = getDictionaries();
  return (
    <div
      className={clsx(
        "grid grid-cols-1 lg:grid-cols-[492px_1fr] items-center content-center justify-start justify-items-start gap-[1.5rem] lg:gap-[5rem]",
        "w-full min-h-[680px]"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[1.25rem]",
          "w-full"
        )}
      >
        <Image {...dictionaries.about_us.image} />
      </div>
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
          {dictionaries.about_us.title}
        </h2>
        <ol>
          {dictionaries.about_us.contents.map((content) => (
            <li
              className={clsx("text-[0.875rem] lg:text-[1rem] text-[#5B5B5B] font-normal")}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};
