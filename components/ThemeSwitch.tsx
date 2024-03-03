"use client";

import React, { useEffect, useState } from "react";
import { useSwitch, VisuallyHidden, SwitchProps } from "@nextui-org/react";
import { IoMoonOutline } from "react-icons/io5";
import { CiSun } from "react-icons/ci";
import { useTheme } from "next-themes";

const ThemeSwitch = (props: SwitchProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
              "md:text-base text-xs",
            ],
          })}
          onClick={() => setTheme(isSelected ? "light" : "dark")}
        >
          {isSelected ? <CiSun /> : <IoMoonOutline />}
        </div>
      </Component>
    </div>
  );
};

export default ThemeSwitch;
