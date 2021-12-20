import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import React, { FC } from "react";

export const Layout: FC = ({ children }) => (
  <section>
    <Header />
    {children}
    <Footer />
  </section>
);
