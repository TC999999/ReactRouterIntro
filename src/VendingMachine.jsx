import { Link } from "react-router-dom";
import "./VendingMachine.css";

const VendingMachine = () => {
  return (
    <div className="vending-machine">
      <div className="vending-machine-messages">
        <div className="vending-machine-intro">
          <h3>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h3>
        </div>

        <div className="pick-a-snack">
          <div className="menu">
            <div className="link">
              <Link to="/sardines">SARDINES</Link>
            </div>

            <div className="link">
              <Link to="/chips">CHIPS</Link>
            </div>

            <div className="link">
              <Link to="/soda">SODA</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendingMachine;
