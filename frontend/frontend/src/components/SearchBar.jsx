import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 1) {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/search?q=${value}`
        );
        setSuggestions(res.data);
      } catch (err) {
        console.error(err);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (item) => {
    setQuery("");
    setSuggestions([]);
    navigate(`/item/${item._id}`);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search items..."
        style={styles.input}
      />

      {suggestions.length > 0 && (
        <ul style={styles.dropdown}>
          {suggestions.map((item) => (
            <li
              key={item._id}
              onClick={() => handleSelect(item)}
              style={styles.listItem}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: "350px",
    margin: "50px auto",
    position: "relative",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
  },
  dropdown: {
    position: "absolute",
    top: "45px",
    width: "100%",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    listStyle: "none",
    padding: 0,
    margin: 0,
    zIndex: 1000,
  },
  listItem: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #eee",
  },
};

export default SearchBar;
