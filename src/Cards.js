import React, { useEffect, useState } from "react";
import Card from "react-tinder-card";
import "./Card.css";
import firestore from "./firebase"; // Import Firestore instance
import { collection, getDocs } from "firebase/firestore"; // Import Firestore methods

function Cards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(firestore, "people"));
      setPeople(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="cardContainer">
        {people.map((person) => (
          <Card className="swipe" key={person.name}>
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }} // Dynamically set background image
            >
              <h3>{person.name}</h3>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Cards;
