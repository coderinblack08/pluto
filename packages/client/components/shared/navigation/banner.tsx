import React from 'react';

export const Banner: React.FC = () => (
  <div className="flex items-center justify-center py-2 bg-gray-900 relative z-20 text-white font-medium">
    <div className="flex items-center bg-gray-800 bg-opacity-50 rounded-full px-4 py-1">
      Now available in alpha release.
      <a href="#" className="ml-2 hover:underline text-indigo-200">
        Learn More →
      </a>
    </div>
  </div>
);
