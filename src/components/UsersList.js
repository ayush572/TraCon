import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { onSnapshot, collection } from "@firebase/firestore";
import "../styles/usersList.scss";

function UsersList() {
  const db_users = collection(db, "users");
  const [users, setUsers] = useState([]);
  const [details, setDetails] = useState({
    username: "vdv",
    report: [
      {
        count: [1, 5],
        name: "none",
        time_taken: "60sec",
      },
    ],
  });

  useEffect(() => {
    onSnapshot(db_users, (snapshot) => {
      const db_get_users = snapshot.docs.map((doc) => doc.data());
      setUsers(db_get_users);
    });
  }, []);

  function showDetails(u_name, u_report) {
    setDetails({
      username: u_name,
      report: u_report,
    });
    document.querySelector(".details-container").style.opacity = 1;
    document.querySelector(".details-container").style.zIndex = 5;
  }

  function closeDetails() {
    document.querySelector(".details-container").style.opacity = 0;
    document.querySelector(".details-container").style.zIndex = -5;
  }

  // const detailsPopUp = () => {
  //   return (

  //   );
  // };

  return (
    <div>
      <div className="users-list">
        {users.map(({ username, report }) => (
          <div className="user" onClick={() => showDetails(username, report)}>
            <p>{username}</p>
          </div>
        ))}
      </div>

      {/* Details Container */}

      <div className="details-container">
        <div className="details-pop-up">
          <div className="title">
            <p>Message Details</p>
            <div
              title="Close Pop-Up"
              className="close-details"
              onClick={closeDetails}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              </svg>
            </div>
          </div>
          <div className="details-data">
            <p>
              Username : <span>{details.username}</span>
            </p>
            <h2>Report</h2>
            {details.report.map(({ count, name, time_taken }) => (
              <p>
                The <span>{details.username}</span> does <span>{count[0]}</span>{" "}
                out of{" "}
                <span>
                  {count[1]} {name}{" "}
                </span>
                in <span>{time_taken}</span>.
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersList;
