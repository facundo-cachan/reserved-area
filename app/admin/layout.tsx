import type { FC } from "react";
import type { LayoutProps } from "./types";

const DashboardLayout: FC<LayoutProps> = ({
  children,
}: LayoutProps): JSX.Element => (
  <main className="grid grid-rows-3">
    <header className="header-menu">
      <nav className="hidden">
        <ul>
          <li>Menu item</li>
          <li>Menu item</li>
          <li>Menu item</li>
        </ul>
      </nav>
    </header>
    {children}
  </main>
);

export default DashboardLayout;
