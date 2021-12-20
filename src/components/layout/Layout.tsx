/** @jsx jsx */

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { contents, layout } from "@/components/layout/styles";
import { jsx } from "@emotion/react";
import { FC } from "react";

export const Layout: FC = ({ children }) => (
    <section css={layout}>
        <Header />
        <section css={contents}>{children}</section>
        <Footer />
    </section>
);
