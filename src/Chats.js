import "./Chats.css";
import Chat from "./Chat";
import firestore from "./firebase"; // Import Firestore instance

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; // Import Firestore methods

function Chats() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestore, "Chats"));
      setChats(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  return (
    <div className="chats">
      {chats.map((chat, index) => (
        <Chat
          key={index} // Use index as key, but ideally, use a unique id
          name={chat.name}
          message={chat.message}
          timestamps={chat.timestamps}
          profilePic={chat.profilePic}
        />
      ))}
    </div>
  );
}

export default Chats;
