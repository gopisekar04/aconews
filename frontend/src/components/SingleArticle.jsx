import React from 'react';

const SingleArticle = ({ article }) => {
  return (
    <div className="article-single">
      <h2>{article.title}</h2>
      <p>By {article.author} • {article.time}</p>
      <img src={article.imageUrl} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default SingleArticle;
