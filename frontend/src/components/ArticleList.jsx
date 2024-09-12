import React from 'react';

const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <div key={index} className="article-item">
          <img src={article.imageUrl} alt={article.title} />
          <div className="article-info">
            <h3>{article.title}</h3>
            <p>{article.author} • {article.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
