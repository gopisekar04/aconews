import React, { useState, useEffect } from 'react';
import Article from './Article';
// import Skeleton from 'react-loading-skeleton';
// import { TailwindLoader } from 'react-tailwindcss-loaders';
import SkeletonLoader from '../components/SkeletonLoader'

function Content({ selectedTab, searchQuery }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/api/top-headlines`);
        const data = await response.json();
        console.log(data);
        const {articles} = data
        
        setArticles(articles);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedTab, searchQuery]);

  return (
    <div className="p-4">
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array(6).fill(0).map((_, index) => (
            <div key={index} className="h-64 bg-gray-200 rounded-lg">
              <SkeletonLoader />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Content;