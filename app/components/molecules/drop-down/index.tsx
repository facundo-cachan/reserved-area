"use client";

import type { FC } from "react";
import type { DropDownProps, OptionProps } from "./types";

const DropDown: FC<DropDownProps> = ({
  options,
  style,
}: DropDownProps): JSX.Element => {
  const onClick = (id: OptionProps["id"]) => {
    console.log(id);
  };
  return (
    <ul className={`shadow-lg bg-white ${style?.ul}`}>
      {options.map(({ id, label }: OptionProps) => (
        <li key={id} className={style?.li}>
          <button onClick={() => onClick(id)} className="text-black">
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
