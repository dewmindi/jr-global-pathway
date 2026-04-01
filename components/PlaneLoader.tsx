import React from 'react';

const PlaneLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="relative w-64 h-20 flex items-center">
        
        {/* The Stripped Line (Runway) */}
        <div className="absolute w-full h-[2px] border-t-2 border-dashed border-gray-300"></div>

        {/* The Airplane Wrapper */}
        <div className="animate-fly-right absolute">
          <svg 
            viewBox="0 0 24 24" 
            className="w-10 h-10 text-blue-600 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21,16L22,13L22,10L21,7L19,7L18,4L14,4L16,10L8,10L10,5L8,5L3,10L2,10L2,13L3,13L8,18L10,18L8,13L16,13L14,19L18,19L19,16L21,16Z" />
          </svg>
        </div>
      </div>
      
      <p className="mt-4 font-medium text-gray-600 animate-pulse">
        Migrating your data...
      </p>
    </div>
  );
};

export default PlaneLoader;