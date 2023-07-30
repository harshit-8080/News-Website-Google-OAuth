import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import "../style/NewComponents.css";
let input = {
  width: "250px",
  padding: "10px",
  border: "2px solid #ccc",
  borderRadius: "5px",
  outline: "none",
  transition: "border-color 0.3s ease-in-out",
  marginLeft: "calc((80vw)/2)",
  marginTop: "20px",
  marginBottom: "20px",
};

function NewComponents() {
  const [newData, setNewData] = useState([]);
  const [search, newSearch] = useState("tech");

  function handleOnChange(e) {
    newSearch(e.target.value);
  }

  useEffect(() => {
    (async function f1() {
      let url = `https://gnews.io/api/v4/search?q=${search}&lang=en&country=us&max=10&apikey=3e2eef6f4f330080a70940f91b4886c2`;
      const response = await fetch(url);
      const data = await response.json();

      setNewData(data["articles"]);
    })();
  }, [search]);
  return (
    <>
      <input
        style={input}
        type="text"
        placeholder="Search Your News"
        onChange={handleOnChange}
      />

      <div className="new-component">
        {newData?.map((item, index) => {
          return <NewsCard key={index} data={item} />;
        })}
      </div>
    </>
  );
}

export default NewComponents;
