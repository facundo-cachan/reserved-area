import type { InputHTMLAttributes } from "react";

export type OptionProps = {
  id: string | number;
  label: string;
};
export type DropDownProps = InputHTMLAttributes<HTMLUListElement> & {
  options: Array<OptionProps>;
  style?: {
    ul?: string;
    li?: string;
  };
};
