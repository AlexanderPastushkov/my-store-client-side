import React, { useEffect, useState } from "react";
import s from "./HelloFormBack.module.css";

export default function HelloFormBack() {
  const [backendData, setBackendData] = useState([]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <div className={s.users}>
      {typeof backendData === "undefined" ? (
        <p>loading...</p>
      ) : (
        backendData.map((u) => (
          <div key={u.id}>
            <p>title: {u.title}</p>
            <p> price: {u.price}</p>
          </div>
        ))
      )}
    </div>
  );
}
