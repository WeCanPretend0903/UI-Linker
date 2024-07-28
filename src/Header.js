import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <ChatIcon fontSize="large" className="header_icon" />
      </IconButton>
      <img className="logo" src={require("./img/icon.png")} />
      <IconButton>
        <AccountCircleIcon className="header_icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
