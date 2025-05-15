import * as React from "react";
import clsx from "clsx";
import SVGIcon from "@/core/icons";

export interface RideBookingListItemProps {
  booking?: {
    number: string;
    name: string;
  };
  route?: {
    origin: string;
    destination: string;
  };
  passenger?: {
    adult: string;
    children: string;
  };
  price?: {
    value: string;
  };
}

export const RideBookingListItem = ({
  booking = {
    number: "1",
    name: "askodakos",
  },
  route = {
    origin: "Living Hotel Das Viktualiearkt",
    destination: "Media Markt",
  },
  passenger = {
    adult: "1",
    children: "1",
  },
  price = {
    value: "",
  },
}: RideBookingListItemProps) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[0.5rem]",
        "w-full"
      )}
    >
      {/* booking name */}
      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]",
          "w-full"
        )}
      >
        <span className={clsx("text-[0.875rem] text-[black] font-medium")}>
          {booking.number}
        </span>
        <span className={clsx("text-[0.875rem] text-[black] font-medium")}>
          {booking.name}
        </span>
      </div>

      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start",
          "w-full",
          "border border-[#F6F6F6]",
          "rounded-[0.375rem]",
          "overflow-clip"
        )}
      >
        {/* route */}
        <div
          className={clsx(
            "grid grid-cols-[1fr_1rem_1fr] items-center content-center justify-start justify-items-start gap-[0.5rem]",
            "w-full",
            "bg-[#F9FDF9]",
            "px-[0.5rem] py-[5px]"
          )}
        >
          <span
            className={clsx(
              "text-[0.875rem] text-[black] font-medium truncate text-ellipsis",
              "max-w-[144px]"
            )}
          >
            {route.origin}
          </span>
          <SVGIcon
            name="ArrowRight"
            className={clsx("w-[1rem] h-[1rem]", "text-[#5B5B5B]")}
          />
          <span
            className={clsx(
              "text-[0.875rem] text-[black] font-medium truncate text-ellipsis",
              "max-w-[144px]"
            )}
          >
            {route.destination}
          </span>
        </div>
        {/* passenger price */}
        <div
          className={clsx(
            "grid grid-flow-col items-center content-center justify-between justify-items-start gap-[0.5rem]",
            "w-full",
            "px-[0.5rem] py-[0.5rem]"
          )}
        >
          <div
            className={clsx(
              "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]",
              "w-full"
            )}
          >
            <div
              className={clsx(
                "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.25rem]",
                "w-full"
              )}
            >
              <SVGIcon
                name="User2"
                className={clsx("w-[1rem] h-[1rem]", "text-[#5B5B5B]")}
              />
              <span
                className={clsx("text-[0.75rem] text-[#5B5B5B] font-normal")}
              >
                {passenger.adult}
              </span>
            </div>

            <div
              className={clsx(
                "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.25rem]",
                "w-full"
              )}
            >
              <SVGIcon
                name="Baby"
                className={clsx("w-[1rem] h-[1rem]", "text-[#5B5B5B]")}
              />
              <span
                className={clsx("text-[0.75rem] text-[#5B5B5B] font-normal")}
              >
                {passenger.children}
              </span>
            </div>
          </div>

          <div
            className={clsx(
              "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.25rem]",
              "w-full"
            )}
          >
            <SVGIcon
              name="BadgeEuro"
              className={clsx("w-[1rem] h-[1rem]", "text-[#5B5B5B]")}
            />
            <span className={clsx("text-[0.75rem] text-[#5B5B5B] font-normal")}>
              {price.value}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
