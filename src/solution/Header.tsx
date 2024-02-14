import React from "react";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarActionItem,
  TopAppBarFixedAdjust,
} from "@rmwc/top-app-bar";
import { Route } from "react-router-dom";

import logo from "../images/Header.logo.svg";

type HeaderProps = {
  children?: React.ReactNode;
};

export const Header = ({ children }: HeaderProps) => (
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

type HeaderActionItemProps = {
  to: string;
  icon: string;
};

export const HeaderActionItem = ({ to, icon }: HeaderActionItemProps) => (
  <Route path={to}>
    {({ history, match }) => (
      <TopAppBarActionItem
        icon={icon}
        onClick={() => !match && history.push(to)}
      />
    )}
  </Route>
);
