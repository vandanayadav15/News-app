// src/components/NewsPage.js
import React, { useState } from "react";
import NewsGrid from "../Grid/NewsGrid";
import NewsList from "../List/NewsList";
import "./Style.css"

const NewsPage = () => {
  const [isGridView, setIsGridView] = useState(false);

  const handleViewToggle = () => {
    setIsGridView((prevState) => !prevState);
  };

  return (
    <div className="switch">
      <button className="btn" onClick={handleViewToggle}>
        {isGridView ? "Switch to Grid View" : "Switch to List View"}
      </button>
      {isGridView ? <NewsList />:<NewsGrid /> }
    </div>
  );
};

export default NewsPage;
