import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SkeletonLoader from './components/SkeletonLoader';
import TagFilter from './components/TagFilter.jsx';
import NewsCard from './components/NewsCard.jsx';
import './App.css'

export const loadingStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
  initial: 'INITIAL'
}

const tagFilter = ['Entertainment', 'Technology', 'Lifestyle', 'Education', 'Latest']

function App() {
  const [loading, setLoading] = useState(loadingStatus.loading)
  const [articles, setArticles] = useState([])
  const [total,setTotal] = useState(null)
  const [page, setPage] = useState(1)

  

  useEffect(() => {

    const fetchTopHeadlines = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/top-headlines/?page=${page}`)
        if (!response.ok) {
          if (response.status === 403) {
            throw new Error('API request limit reached. Please wait 24 hours.');
          } else {
            throw new Error('Failed to fetch data. Please try again later.');
          }
        }
        const data = await response.json();
        
        setArticles(data.articles);
        setLoading(loadingStatus.success);
        setTotal(data.totalArticles)
        
      } catch (error) {
        console.log('Error fetching data:', error);
        setLoading(loading.failure);
      }
    };
    fetchTopHeadlines();
  }, []);
  return (
    <div className="bg-customYellow min-h-screen ">
      <Header setLoading={setLoading} setArticles={setArticles} />
      <div className="container mx-auto p-4">
      <div className="flex space-x-2 mb-4">
        {tagFilter.map((eachTag, index) => (
            <TagFilter key={index} label={eachTag} />
        ))}    
      </div>
      
        <h2 className="text-xl font-semibold mb-4">Top Headlines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {
            loading == loadingStatus.loading && <>
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
            </>
          }
          {loading == loadingStatus.failure && <p>
            Sorry for the inconvenience caused. Please try again tomorrow.. 
          </p>}
          {
            loading == loadingStatus.success && <>
          {articles.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))}
            </>
          }
          <div class="flex justify-center w-screen">
            <a href="#" class="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"  d="M13 5H1m0 0 4 4M1 5l4-4"/>
              </svg>
              <button onClick={() => {
                if(page>2){
                  setPage(page-1)
                }
              }} >
                Previous
              </button>
              
            </a>
            <a  onClick={() => {
              if(page<total){
                setPage(page+1)
              }
            }} href="#" class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <button onClick={() => {
              if(page<total){
                setPage(page+1)
              }
            }} >
              Next
              </button>
              <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
