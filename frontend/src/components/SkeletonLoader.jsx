// SkeletonLoader.jsx
import React from 'react';

const SkeletonLoader = () => {
  return (
    <div role="status" class="max-w-sm animate-pulse"> <div class="h-48 bg-gray-200 rounded-lg overflow-hidden"> <div class="h-28 bg-gray-200 rounded-t-lg"></div> <div class="flex space-x-4 p-4"> <div class="h-12 w-12 bg-gray-200 rounded-full"></div> <div class="flex-1 space-y-2"> <div class="h-4 bg-gray-200 rounded-full w-48"></div> <div class="h-4 bg-gray-200 rounded-full max-w-[360px]"></div> <div class="h-4 bg-gray-200 rounded-full"></div> <div class="h-4 bg-gray-200 rounded-full max-w-[330px]"></div> <div class="h-4 bg-gray-200 rounded-full max-w-[300px]"></div> </div> </div> </div> <span class="sr-only">Loading...</span> </div>
  );
};

export default SkeletonLoader;
