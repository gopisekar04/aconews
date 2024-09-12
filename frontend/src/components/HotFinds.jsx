// HotFinds.jsx
import React from 'react';

const tags = ['Technology', 'Sports', 'Entertainment', 'Health'];

const HotFinds = ({ onTagClick }) => {
  return (
    <section className="p-4 bg-gray-100">
      <h2 className="text-xl font-semibold mb-4">Hot Finds</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagClick(tag)}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HotFinds;
