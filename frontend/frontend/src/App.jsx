import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import ItemDetail from "./pages/ItemsDetail";

const App = () => {
  return (
    <Router>
      <div>
        <SearchBar />

        <Routes>
          <Route path="/" element={SearchBar}/>
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
