import { Link } from "react-router-dom";
import "./ExploreAPIs.css";

function APIList() {
  return (
    <div className="api-list-container">
      <h2>Explore API Examples</h2>
      <ul className="api-list">
        <li className="api-choice">
          <Link to="/weather" className="api-link">
            Weather API
          </Link>
        </li>
        <li className="api-choice">
          <Link to="/breaking-bad-quotes" className="api-link">
            Breaking Bad Quotes
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default APIList;
