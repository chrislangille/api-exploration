import React, { useState, useEffect } from "react";
import "./BreakingBadQuotes.css";

function BreakingBadQuotes() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const api_url = "https://api.breakingbadquotes.xyz/v1/quotes/5";

  const fetchData = async () => {
    try {
      const response = await fetch(api_url);
      const json = await response.json();
      setData(json);
      setCount(0);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };

  // Initial load
  useEffect(() => {
    fetchData();
  }, []);

  const nextQuote = () => {
    if (count === data.length - 1) {
      // Last quote, call API to fetch more quotes
      fetchData();
    } else {
      // Go to next quote
      setCount((prev) => prev + 1);
    }
  };

  const current = data[count];

  return (
    <div className="quote-container">
      {current ? (
        <>
          <h2 className="quote">{current.quote}</h2>
          <h3 className="author">{current.author}</h3>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <button className="next-button" onClick={nextQuote}>
        Next Quote
      </button>
    </div>
  );
}

export default BreakingBadQuotes;
