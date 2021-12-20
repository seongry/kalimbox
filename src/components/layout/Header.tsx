/** @jsx jsx */

import { header } from "@/components/layout/styles";
import { jsx } from "@emotion/react";
import { FC } from "react";

export const Header: FC = () => <nav css={[header]}>칼림바 악보생성기</nav>;
