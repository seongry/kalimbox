import { KalimbaView } from "@/views/Kalimba";
import React from "react";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import "./theme/global.css";

render(
    <RecoilRoot>
        <KalimbaView />
    </RecoilRoot>,
    document.getElementById("app")
);
