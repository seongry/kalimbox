import { render } from "@testing-library/react";
import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";

export const renderWithRecoil = (children: ReactNode) => {
    render(<RecoilRoot>{children}</RecoilRoot>);
};
