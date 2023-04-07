import React from "react";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarActionItem,
  TopAppBarFixedAdjust,
} from "@rmwc/top-app-bar";
import { Route, useMatch, useNavigate } from "react-router-dom";

import logo from "../images/Header.logo.svg";

export const Header: React.FC = ({ children }) => (
  <>
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection>
          <img src={logo} alt="People logo" />
        </TopAppBarSection>
        <TopAppBarSection alignEnd>{children}</TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
    <TopAppBarFixedAdjust />
  </>
);

export const HeaderActionItem: React.FC<{
  to: string;
  icon: string;
}> = ({ to, icon }) => {
  const match = useMatch(to);
  const navigate = useNavigate();
  return (
    match == null && (
      <TopAppBarActionItem icon={icon} onClick={() => navigate(to)} />
    )
  );
};
