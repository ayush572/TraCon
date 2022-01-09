import React from "react";
import "../styles/homepage.scss";
import bg from "../images/home-img.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homepage">
      <div className="buttons">
        <a href="/users">
          <Link to="/users">
            <button className="users" on>
              USERS
            </button>
          </Link>
        </a>
        <a href="/planlvl">
          <Link to="/planlvl">
            <button className="planlist">PLANLIST</button>
          </Link>
        </a>
      </div>
      <div className="home-img">
        <img src={bg}></img>
      </div>
      <div className="home-texts">
        <h2>TraCon</h2>
        <p>Trainer Interface</p>
      </div>
      <div className="circle"></div>
      <div className="circle circle-2"></div>
    </div>
  );
}

export default HomePage;
