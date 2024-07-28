import React, { useState } from "react";
import Card from "react-tinder-card";
import "./Card.css";
function Cards() {
  const [people, setPeople] = useState([
    {
      name: "Donald",
      url: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTHfRpKFKhm3AERxq8X7lEySL0TqfWeaNrV7rOrfLTYhJP8LbX59awytCf-7zwyipP8fTDmnjt7seoi3wU",
    },
    {
      name: "Sleepy Joe",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-sRq0X2qlQcnUgziT4KDR5hna6-a_xi-XHA&s",
    },
  ]);
  //const people = []
  return (
    <div>
      <div className="cardContainer">
        {people.map((person) => {
          return (
            <Card className="swipe" key={person.name}>
              <div
                className="card"
                style={{ backgroundImage: `url(${person.url})` }} // Dynamically set background image
              >
                <h3>{person.name}</h3>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
