import React from "react";
import { useNavigate } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function Header({ backButton }) {
  const navigate = useNavigate();

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => navigate(backButton)}>
          <ArrowBackIcon fontSize="large" className="header_icon" />
        </IconButton>
      ) : (
        <IconButton>
          <Link to="/chats">
            <ChatIcon fontSize="large" className="header_icon" />
          </Link>
        </IconButton>
      )}
      <img className="logo" src={require("./img/icon.png")} alt="logo" />
      <IconButton>
        <Link to="/profile">
          <AccountCircleIcon className="header_icon" fontSize="large" />
        </Link>
      </IconButton>
    </div>
  );
}

export default Header;
