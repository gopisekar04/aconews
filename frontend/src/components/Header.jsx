import React, { useState } from 'react';
import loadingStatus from '../App'

const Header = ({setArticles, setLoading}) => {
  const [searchText, setSearchText] = useState('')

  const SearchNews = async() => {
    try{
      const response = await fetch(`http://localhost:3000/api/search?q=${searchText}`)
      const data = await response.json()
      setArticles(data.articles)
      setLoading(loadingStatus.success)
      setSearchText("")
    }catch(e){
      setLoading(loadingStatus.failure)
    }
  }
  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold">📰 AcoNews</span>
        </div>
        <div className="relative w-1/3">
          
          <form class="max-w-md mx-auto">   
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="search" id="default-search" class="outline-none block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search treding topics" />
                  <button type="submit" onClick={SearchNews} class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
          </form>

        </div>
        <div>
          <button className="p-3 bg-gray-200 rounded-full">
            <span className="material-icons p-2 text-xl  font-bold ">U</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
