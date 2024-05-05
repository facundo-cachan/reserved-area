"use client";

import { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";

interface IFormValues {
  "First Name": string;
  Age: number;
}

const Select = forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));

Select.displayName = "Input";

export default Select;
