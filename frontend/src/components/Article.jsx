import React from 'react';

function Article({ article }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold">{article.title}</h2>
      <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-lg" />
      <p className="mt-2 text-gray-700">{article.content}</p>
    </div>
  );
}

export default Article;