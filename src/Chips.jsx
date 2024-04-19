import { useState } from "react";
import { Link } from "react-router-dom";
import "./Chips.css";

function getRandom(min = 0, max = 100) {
  return Math.random() * (max - min) + min;
}

const Chips = () => {
  const [chipCount, setChipCount] = useState(0);
  const [chips, setChips] = useState([]);

  const addChips = () => {
    setChipCount((count) => count + 1);
    setChips((chips) => [...chips, { x: getRandom(), y: getRandom() }]);
  };
  return (
    <div className="got-chips">
      <div className="go-back center">
        <h2>BAGS EATEN: {chipCount}</h2>
        <button onClick={addChips}>OM NOM NOM</button>
        <p>
          <Link to="/">GO BACK</Link>
        </p>
      </div>
      <div className="chip-bags">
        {chips.map(({ x, y }) => (
          <img
            style={{
              width: "200px",
              height: "200px",
              position: "absolute",
              top: `${y}vh`,
              left: `${x}vw`,
              zIndex: "-1",
            }}
            src="https://m.media-amazon.com/images/I/813axPlVxBL.jpg"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Chips;
