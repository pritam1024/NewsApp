import React from "react";

const News = ({ articles }) => {
  return (
    <div className="news">
      {articles.map((article, index) => {
        return (
          <div key={index}>
            <h1>{article.title}</h1>
            <a href={article.url}>
              <img src={article.urlToImage} alt="img" />

              <p>{article.description}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default News;
