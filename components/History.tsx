import React, { useState } from 'react';

interface HistoryItem {
  id: string;
  lastModified: string;
  title: string;
}

// Sample data for history
const historyData: HistoryItem[] = [
  { id: '1', lastModified: '2024-08-01', title: 'Article 1' },
  { id: '2', lastModified: '2024-08-02', title: 'Article 2' },
];

const History: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-4">History</h2>
      <ul className="space-y-4">
        {historyData.map((item) => (
          <li
            key={item.id}
            className="relative p-4 bg-gray-50 border border-gray-300 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg group"
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">Last modified: {item.lastModified}</p>
              </div>
              {hoveredId === item.id && (
                <div className="absolute right-4 top-4 flex space-x-2 opacity-100 transition-opacity duration-300">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Preview
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
