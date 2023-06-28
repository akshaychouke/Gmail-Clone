import React from "react";
import { Box, Button, styled, List, ListItem } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";
import { SIDEBAR_DATA } from "../config/sidebar.config";

//STYLING THE MUI COMPONENTS

const Container = styled(Box)({
  padding: "8px",
  "& > ul": {
    padding: "10px 0 0 5px",
    fontSize: "14px",
    fontWeight: 500,
    cursor: "pointer",
  },
  "& > ul > li > svg": {
    marginRight: "20px",
  },
});

const ComposeButton = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  padding: "15px",
  borderRadius: "16px",
  minWidth: "140px",
  textTransform: "none",
});

const SideBarContent = () => {
  return (
    <>
      <Container>
        <ComposeButton>
          <CreateOutlined /> Compose
        </ComposeButton>
        <List>
          {SIDEBAR_DATA.map((data) => (
            <ListItem key={data.title}>
              <data.icon fontSize="small" />
              {data.title}
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
};

export default SideBarContent;