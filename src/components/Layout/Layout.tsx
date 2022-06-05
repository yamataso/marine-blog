import React from "react";
import { Footer } from "../ui/Footer/Footer";

import { ReactElement } from "react";
import { Header } from "../ui/Header/Header";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
