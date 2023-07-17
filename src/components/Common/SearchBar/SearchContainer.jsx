import { useState } from "react";
import { Search } from "./SearchBar";

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
