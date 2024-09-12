import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [selectedTab, setSelectedTab] = useState('Politics');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="app">
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Content selectedTab={selectedTab} searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}

export default App;