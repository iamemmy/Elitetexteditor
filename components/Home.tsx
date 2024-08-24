import React from 'react';
import { PlusIcon, UserGroupIcon, ChartPieIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <button
            className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-md flex items-center hover:bg-indigo-700 transition duration-300"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Create New
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
          <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <UserGroupIcon className="h-6 w-6 text-indigo-600 mr-3" />
              <h3 className="text-base lg:text-lg font-semibold text-gray-800">Team Overview</h3>
            </div>
            <p className="text-sm lg:text-base text-gray-600">Manage and view details about your team members.</p>
          </div>
          
          <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <ChartPieIcon className="h-6 w-6 text-green-600 mr-3" />
              <h3 className="text-base lg:text-lg font-semibold text-gray-800">Analytics</h3>
            </div>
            <p className="text-sm lg:text-base text-gray-600">View your project's performance and analytics.</p>
          </div>
          
          <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <DocumentTextIcon className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-base lg:text-lg font-semibold text-gray-800">Documentation</h3>
            </div>
            <p className="text-sm lg:text-base text-gray-600">Access project documentation and guidelines.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
