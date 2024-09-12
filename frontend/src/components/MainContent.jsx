// MainContent.jsx
import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import SkeletonLoader from './SkeletonLoader';
import HotFinds from './HotFinds';

const MainContent = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news
    setLoading(false);
  }, []);

  const handleTagClick = (tag) => {
    // Search and update news based on tag
  };

  return (
    <div>
      <HotFinds onTagClick={handleTagClick} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {loading ? (
          <SkeletonLoader />
        ) : (
          news.map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              description={item.description}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MainContent;
