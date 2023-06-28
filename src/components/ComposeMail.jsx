import React from "react";
import {
  Dialog,
  Box,
  Typography,
  InputBase,
  TextField,
  Button,
  styled,
} from "@mui/material";
import { Close, DeleteOutline } from "@mui/icons-material";
import { useState } from "react";
//to style the mui components
const dialogStyle = {
  height: "90%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  borderRadius: "10px 10px 0 0",
};

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  background: "#f2f6fc",
  "& > p": {
    fontSize: "14px",
    fontWeight: "500",
  },
});

const RecipientWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "& > div": {
    fontSize: "14px",
    borderBottom: "1px solid #F5F5F5",
    marginTop: "10px",
  },
});

const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  alignItems: "center",
});

const SendButton = styled(Button)({
  background: "#0B57D0",
  color: "#fff",
  fontWeight: "500",
  textTransform: "none",
  borderRadius: "18px",
  width: "100px",
});
// Note - sx is used to change the css of internal classes of given MUI components
const ComposeMail = ({ openDialog, setOpenDialog }) => {
  const [data, setData] = useState({});

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  //basic config for smtp configuration
  // const config = {
  //   Host: "smtp.gmail.com",
  //   Username: "akshaychauke50@gmail.com",
  //   Password: "pobivobvjejywjtx",
  //   Port: 25,
  // };

  const config = {
    Host: "smtp-relay.sendinblue.com",
    Username: "akshaychauke50@gmail.com",
    Password: "Rp5XhwW1raZxjLU4",
    Port: 587,
  };

  //to close the compose mail dialog box
  const closeComposeMail = (e) => {
    e.preventDefault();
    setOpenDialog(false);
  };

  //to send send mail when user clicks on send button in compose dialog
  const sendMail = (e) => {
    e.preventDefault();
    //setting up the smtp server
    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "akshaychauke50@gmail.com",
        Subject: data.subject,
        Body: data.body,
      }).then((message) => alert(message));
    }

    setOpenDialog(false);
  };

  return (
    <>
      <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
        <Header>
          <Typography>New Message</Typography>
          <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
        </Header>
        <RecipientWrapper>
          <InputBase
            placeholder="Recipients"
            name="to"
            onChange={(e) => onValueChange(e)}
          />
          <InputBase
            placeholder="Subject"
            name="subject"
            onChange={(e) => onValueChange(e)}
          />
        </RecipientWrapper>
        <TextField
          multiline
          rows={18}
          sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
          name="body"
          onChange={(e) => onValueChange(e)}
        />
        <Footer>
          <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
          <DeleteOutline onClick={() => setOpenDialog(false)} />
        </Footer>
      </Dialog>
    </>
  );
};

export default ComposeMail;
