import { Avatar } from "@mui/material";
import React from "react";
import "./Chat.css";
import { Link } from "react-router-dom";

function Chat({ name, message, profilePic, timestamps }) {
  return (
    <Link to={`/chats/${name}`}>
      <div className="chat">
        <Avatar className="chat_image" alt="chat img" src={profilePic} />
        <div className="chat_details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat_timestamp">{timestamps}</p>
      </div>
    </Link>
  );
  <div>
    <form>
      <input type="text" />
      <button>Send</button>
    </form>
  </div>;
}

export default Chat;
