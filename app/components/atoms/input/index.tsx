"use client";

import { forwardRef, useState } from "react";

import type { FC } from "react";
import type { InputProps } from "./types";

const Input: FC<InputProps> = forwardRef(
  (
    { className, defaultValue, type, onChange, ...props }: InputProps,
    _: unknown,
  ): JSX.Element => {
    const [value, setValue] = useState("");
    const [focused, setOnFocused] = useState<boolean>(false);

    const update = ({ target: { value } }: any) => {
      setValue(value);
    };

    return (
      <input
        {...props}
        type={type ?? "text"}
        value={defaultValue ?? value}
        className={`text-black rounded-lg p-2 ${focused ? "border-dotted border-2 border-sky-500" : ""} ${className}`}
        onChange={(e) => {
          onChange && onChange(e);
          update(e);
        }}
        onFocus={() => setOnFocused(true)}
        onBlur={() => setOnFocused(false)}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
