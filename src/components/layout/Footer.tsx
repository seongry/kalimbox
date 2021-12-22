/** @jsx jsx */

import { footer, introLink } from "@/components/layout/styles";
import { jsx } from "@emotion/react";
import { FC } from "react";

interface IntroLinkProps {
    href: string;
}
export const IntroLink: FC<IntroLinkProps> = ({ children, ...props }) => (
    <a
        css={[introLink]}
        target="_blank"
        rel="author external noopener noreferrer"
        {...props}
    >
        {children}
    </a>
);
export const Footer: FC = () => (
    <section css={[footer]}>
        Designed by{" "}
        <IntroLink href="https://www.behance.net/1000yjc">@1000yjc</IntroLink>{" "}
        Developed by{" "}
        <IntroLink href="https://github.com/seongry">@seongry</IntroLink>
    </section>
);
