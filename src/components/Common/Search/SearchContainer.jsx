import React, { useState } from "react";
import s from "./Search.module.css";
import { Search } from "./Search";

export const SearchContainer = () => {
  const [filteredData, setFilteredData] = useState([]);

  const [wordEntered, setWordEntered] = useState("");

  const fetchData = (value) => {
    fetch("/api/all")
      .then((response) => response.json())
      .then((data) => {
        const results = data.filter((product) => {
          return (
            value &&
            product &&
            product &&
            product.title &&
            product.title.toLowerCase().includes(value.toLowerCase())
          );
        });
        console.log(results);
        setFilteredData(results);
      });
  };

  const handleChange = (value) => {
    setWordEntered(value);
    if (value === "") {
      setFilteredData([]);
    } else {
      fetchData(value);
    }
  };

  return (
    <Search
      handleChange={handleChange}
      filteredData={filteredData}
      setFilteredData={setFilteredData}
      wordEntered={wordEntered}
      setWordEntered={setWordEntered}
    />
  );
};
