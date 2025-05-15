import * as React from "react";
import clsx from "clsx";
import { Avatar, AvatarProps } from "../avatar";
import SVGIcon, { SVGIconProps } from "@/core/icons";

export interface DriverProfileLabelProps {
  id?: string;
  avatar?: AvatarProps;
  name?: string;
  icon?: SVGIconProps | null;
}

export const DriverProfileLabel = ({
  id,
  avatar,
  name = "",
  icon = {
    name: "User",
  },
}: DriverProfileLabelProps) => {
  return (
    <div
      id={id}
      className={clsx(
        "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem] lg:gap-[1.5rem]"
      )}
    >
      <Avatar {...avatar} className={clsx("w-[2rem] h-[2rem]")} />
      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.625rem]"
        )}
      >
        {!!icon && (
          <SVGIcon
            {...icon}
            className={clsx("w-[1rem] h-[1rem]", "text-[black]")}
          />
        )}

        <p className={clsx("text-[1rem] text-[black] font-medium")}>{name}</p>
      </div>
    </div>
  );
};
