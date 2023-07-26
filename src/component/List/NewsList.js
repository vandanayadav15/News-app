// src/components/NewsList.js
import React, { useEffect, useState } from "react";
import { getNews } from "../../api/newsApi";
import "./style.css";
import { motion } from "framer-motion";

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const articles = await getNews();
      setNews(articles);
    };
    fetchNews();
  }, []);


  return (
    <div className="container">
      <motion.tr
        className="list-row"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {news.map((article) => (
          <div className="list-row" key={article.url}>
            <td className="news-item">
              <img src={article.urlToImage} alt={article.title} />
              <div className="info">
                <h2 className="heading">{article.title}</h2>
                <p className="n-p">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
            </td>
          </div>
        ))}
      </motion.tr>
    </div>
  );
};

export default NewsList;
