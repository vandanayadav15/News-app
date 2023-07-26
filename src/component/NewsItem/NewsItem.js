// src/components/NewsItem.js
import React from "react";
import "./style.css"

const NewsItem = ({ article, isFavorite, onFavorite }) => {
  return (
    <div className="news-item">
      <td className="img"><img src={article.urlToImage} alt={article.title} /></td>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read More
      </a>
      <span onClick={onFavorite}>{isFavorite ? "❤️" : "♡"}</span>
    </div>
  );
};

export default NewsItem;
