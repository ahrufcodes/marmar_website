import React from "react";
import Header from "@/components/sections/Header";
import { ReactNode } from "react";
import Footer from "@/components/sections/Footer";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default layout;
