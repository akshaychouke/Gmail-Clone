import React from "react";
import { AppBar, Toolbar, styled, InputBase, Box } from "@mui/material";
import {
  Menu as MenuIcon,
  Tune,
  Search,
  HelpOutlineOutlined,
  SettingsOutlined,
  AppsOutlined,
  AccountCircleOutlined,
} from "@mui/icons-material";

import { gmailLogo } from "../constants/constant";

//styling the mui components
const StyledAppBar = styled(AppBar)`
  background: #f5f5f5;
  box-shadow: none;
`;

const SearchWrapper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: "80px",
  borderRadius: "8px",
  minWidth: "690px",
  maxWidth: "720px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0px 20px",
  "& > div": {
    width: "100%",
    padding: "0 10px",
  },
});

const OptionsWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "end",

  "& > svg": {
    marginLeft: "20px",
  },
});

const Header = ({ toggleDrawer }) => {
  // console.log("This is in header")
  return (
    <>
      <StyledAppBar position="static">
        <Toolbar>
          <MenuIcon color="action" onClick={toggleDrawer} />
          <img
            src={gmailLogo}
            style={{ width: 110, marginLeft: 15 }}
            alt="gmailLogo"
          />
          <SearchWrapper>
            <Search color="action" />
            <InputBase placeholder="Search mail" />
            <Tune color="action" />
          </SearchWrapper>
          <OptionsWrapper>
            <HelpOutlineOutlined color="action" />
            <SettingsOutlined color="action" />
            <AppsOutlined color="action" />
            <AccountCircleOutlined color="action" />
          </OptionsWrapper>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Header;
