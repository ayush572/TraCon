import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { onSnapshot, collection } from "@firebase/firestore";
import { query, orderBy } from "firebase/firestore";

function UsersList() {
  const db_users = collection(db, "users");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    onSnapshot(db_users, (snapshot) => {
      const db_get_users = snapshot.docs.map((doc) => doc.data());
      setUsers(db_get_users);
    });
  }, []);

  return (
    <div>
      <p></p>
      <p onClick={() => console.log(users)}>xhbkjhbjksh</p>
    </div>
  );
}

export default UsersList;
