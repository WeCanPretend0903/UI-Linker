import React from "react";
import "./App.css";
import Header from "./Header";
import {
  createBrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import Cards from "./Cards";
import SwipeButtons from "./SwipeButton";

const router = Router([
  {
    path: "/Card",
    element: (
      <>
        <Cards />
        <SwipeButtons />
      </>
    ),
  },
  {
    path: "/",
    element: <h1>Head</h1>,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
