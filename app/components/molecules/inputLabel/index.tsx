"use client";

import { Input } from "@/components";
import { forwardRef } from "react";

import type { FC } from "react";
import type { InputLabelProps } from "./types";

const InputLabel: FC<InputLabelProps> = forwardRef(
  (
    { label, className, style, ...props }: InputLabelProps,
    _: unknown,
  ): JSX.Element => {
    return (
      <div className={className}>
        <label htmlFor={props.id}>{label}</label>
        <Input {...props} className={style} />
      </div>
    );
  },
);

InputLabel.displayName = "Input";

export default InputLabel;
