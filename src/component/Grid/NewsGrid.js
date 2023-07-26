import React, { useEffect, useState } from "react";
import { getNews } from "../../api/newsApi";
import { motion } from "framer-motion";
import "./Style.css";

const NewsGrid = () => {
  const [news, setNews] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const articles = await getNews();
      setNews(articles);
    };
    fetchNews();
  }, []);

  const handleFavorite = (article) => {
    // Check if the article is already in favorites
    const isFavorite = favorites.some((fav) => fav.url === article.url);

    if (isFavorite) {
      // Remove the article from favorites
      setFavorites(favorites.filter((fav) => fav.url !== article.url));
    } else {
      // Add the article to favorites
      setFavorites([...favorites, article]);
    }
  };

  return (
    <div className="news-container">
      {news.map((article) => (
        <motion.div
          key={article.url} // Don't forget to add a unique key to each item when mapping
          className="news-items"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="img">
            <img src={article.urlToImage} alt={article.title} />
          </div>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
          <span onClick={() => handleFavorite(article)}>
            {favorites.some((fav) => fav.url === article.url) ? "❤️" : "♡"}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default NewsGrid;
