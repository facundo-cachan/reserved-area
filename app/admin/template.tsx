import type { FC } from "react";
import type { TemplateProps } from "./types";

const Template: FC<TemplateProps> = ({
  children,
}: TemplateProps): JSX.Element => (
  <section className="grid grid-rows-subgrid">{children}</section>
);

export default Template;
