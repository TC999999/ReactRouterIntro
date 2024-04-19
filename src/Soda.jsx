import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Soda.css";

const Soda = () => {
  const [rotate, setRotate] = useState(0);
  const timerId = useRef();
  useEffect(() => {
    timerId.current = setInterval(() => {
      if (rotate >= 360) {
        setRotate(0);
      } else {
        setRotate((deg) => deg + 5);
      }
    }, 50);

    return () => {
      clearInterval(timerId.current);
    };
  });

  return (
    <div className="soda">
      <div className="message-and-cans center">
        <div className="diet-coke-img-div">
          <img
            className="diet-coke-img left"
            style={{ transform: `rotate(${rotate}deg)` }}
            src="https://www.1001spirits.com/tuotekuvat/1200x1200/Coca%20Cola%20Classic%2024x0%2C33%20l.png"
            alt=""
          />
        </div>

        <div className="go-back">
          <h2>OMG SUGAR!!!!!</h2>
          <Link to="/">GO BACK</Link>
        </div>

        <div className="diet-coke-img-div">
          <img
            className="diet-coke-img right"
            style={{ transform: `rotate(${rotate}deg)` }}
            src="https://www.1001spirits.com/tuotekuvat/1200x1200/Coca%20Cola%20Classic%2024x0%2C33%20l.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Soda;
