import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@mui/material";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Joker",
      image: "https://upload.wikimedia.org/wikipedia/en/9/90/HeathJoker.png",
      message: "What's up",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { name: "", message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">YOU MATCHED WITH X on X/X/XXXX</p>
      {messages.map((message, index) =>
        message.name ? (
          <div className="chatScreen_message" key={index}>
            <Avatar
              className="chatScreen_image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message" key={index}>
            <p className="chatScreen_textUser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen_input" onSubmit={handleSend}>
          <input
            type="text"
            placeholder="Type a message..."
            className="chatScreen_inputField"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="chatScreen_inputButton">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
