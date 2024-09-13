import React from 'react';
// import { Link } from 'react-router-dom';

const NewsCard = ({ article }) => {
  const { title, description, content, image, publishedAt, source, url } = article;
  const formattedDate = new Date(publishedAt).toLocaleDateString();
  

  return (
    <div className='w-50 bg-white rounded-md shadow-md overflow-hidden'>
      <img src={image} alt={title} className='w-full h-40 object-cover' />
      <div className='p-4'>
        <h3 className='text-lg font-semibold mb-2'>{title}</h3>
        <p className="text-sm text-gray-500 mb-2" >{formattedDate} - {source.name}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href={url} target='_blank' className="text-blue-500 hover:underline">Read more</a>
      </div>
    </div>

  );
};

export default NewsCard;
