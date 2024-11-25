import React from "react";
import Header from "@/components/sections/Header";
import { ReactNode } from "react";
import Footer from "@/components/sections/Footer";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="max-w-[1400px] h-full px-5 mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default layout;
