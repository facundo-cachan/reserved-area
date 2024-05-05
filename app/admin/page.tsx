"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { Input, InputLabel } from "@/components";

const styles = {
  className: "flex flex-col py-4",
  style: "border border-green-400 shadow-2xl",
};
const errorFont = "text-red-500";
const ReservedAreaPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  const onChange = ({ target: { name, value } }: any) => {
    setValue(name, value);
  };

  return (
    <article className="row-start-2 px-[30%]">
      <h3 className="py-2">Admin Page</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <InputLabel
            {...styles}
            {...register("email", { required: true })}
            label="User Account"
            placeholder="Enter your User"
            onChange={onChange}
          />
          {errors.email && (
            <span className={errorFont}>User Account is required</span>
          )}
        </div>
        <div>
          <Input
            className={styles.className}
            {...register("password", { required: true })}
            placeholder="Enter your Password"
            onChange={onChange}
          />
          {errors.password && (
            <span className={errorFont}>Your Password is required</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </article>
  );
};

export default ReservedAreaPage;
