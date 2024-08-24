import React, { useState } from 'react';
import { EyeIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface HistoryItem {
  id: string;
  lastModified: string;
  title: string;
}

const historyData: HistoryItem[] = [
  { id: '1', lastModified: '2024-08-01', title: 'Article 1' },
  { id: '2', lastModified: '2024-08-02', title: 'Article 2' },
  { id: '3', lastModified: '2024-08-03', title: 'Article 3' },
  { id: '4', lastModified: '2024-08-04', title: 'Article 4' },
  { id: '5', lastModified: '2024-08-05', title: 'Article 5' },
];

const History: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">History</h2>
      <ul className="space-y-2">
        {historyData.map((item) => (
          <li
            key={item.id}
            className="relative p-4 bg-gray-50 border border-gray-300 rounded-lg transition-transform transform hover:scale-[1.02] hover:shadow-lg group"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
                <p className="text-xs text-gray-600">Last modified: {item.lastModified}</p>
              </div>
              <div
                className={`absolute right-4 top-4 flex space-x-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300`}
              >
                <button
                  className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  <EyeIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                </button>
                <button
                  className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-300"
                >
                  <XMarkIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
