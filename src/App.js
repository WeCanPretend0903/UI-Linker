import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./Cards";
import SwipeButtons from "./SwipeButton";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Cards />
                <SwipeButtons />
              </>
            }
          />
          <Route
            path="/chats"
            element={
              <>
                <Header backButton="/" />
                <Chats />
              </>
            }
          />
          <Route
            path="/chats/:person"
            element={
              <>
                <Header backButton="/chats" />
                <ChatScreen />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header backButton="/" />
                <h1>Profile</h1>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
