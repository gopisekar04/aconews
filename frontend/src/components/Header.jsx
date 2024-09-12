import React from 'react';

function Header({ selectedTab, setSelectedTab, searchQuery, setSearchQuery }) {
  return (
    <header className="bg-gray-800 text-white h-16 flex items-center justify-between px-4">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <input
          type="text"
          className="bg-gray-900 text-white border-b border-gray-700 py-2 px-3 focus:outline-none"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <nav className="flex space-x-4">
        <button
          className={`text-gray-300 hover:text-white ${selectedTab === 'Politics' ? 'text-white' : ''}`}
          onClick={() => setSelectedTab('Politics')}
        >
          Politics
        </button>
        {/* ... other tabs */}
      </nav>
    </header>
  );
}

export default Header;