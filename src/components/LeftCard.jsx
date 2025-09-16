import { useEffect, useState } from "react";
import LeftCar from "./LeftCar";

const LeftCard = () => {
       const [leftCard, setLeftCard] = useState([]);
        useEffect(() => {
          fetch("/news.json")
            .then((res) => res.json())
            .then((data) => setLeftCard(data));
        }, []);
      return (
            <div>
                  {
                  leftCard.map((card) => (
                      <LeftCar key={card.title} card={card}></LeftCar>

                  ))
                  }
            </div>
      );
};

export default LeftCard;