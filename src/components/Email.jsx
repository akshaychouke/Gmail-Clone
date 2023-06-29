import React from "react";
import { Box, Typography, Checkbox, styled } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";

const Wrapper = styled(Box)({
  padding: "0 0 0 10px",
  background: "#f2f6fc",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  "& > div": {
    display: "flex",
    width: "100%",

    "& > P": {
      fontSize: "14px",
    },
  },
});

const Indicator = styled(Box)({
  fontSize: "12px !important",
  background: "#ddd",
  color: "#222",
  padding: "0 4px",
  borderRadius: "4px",
  marginRight: "6px",
});

const Date = styled(Box)({
  marginLeft: "auto",
  marginRight: "20px",
  fontSize: "12px !important",
  color: "#5F6368",
});
const Email = ({ email, selectedEmails }) => {
  return (
    <Wrapper>
      {/* here the checked will be true if selected emails includes that particular emails id */}
      <Checkbox size="small" checked={selectedEmails.includes(email._id)} />
      <StarBorder fontSize="small" style={{ marginRight: "10px" }} />

      <Box>
        <Typography style={{ width: "200px", overflow: "hidden" }}>
          {email.name}
        </Typography>
        <Indicator>Inbox</Indicator>
        <Typography>
          {email.subject} {email.body && "-"} {email.body}
        </Typography>
        <Date>
          {new window.Date(email.date).getDate()}
          {new window.Date(email.date).toLocaleString("default", {
            month: "short",
          })}
        </Date>
      </Box>
    </Wrapper>
  );
};

export default Email;
