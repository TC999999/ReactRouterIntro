import { Link } from "react-router-dom";
import "./Sardines.css";

const Sardines = () => {
  return (
    <div className="sardines">
      <div className="go-back center">
        <h2>YOU DON'T EAT THE SARDINES. THE SARDINES EAT YOU!</h2>
        <Link to="/">GO BACK</Link>
      </div>
    </div>
  );
};

export default Sardines;
