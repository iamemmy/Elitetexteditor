import React, { useState } from 'react';
import { PlusIcon, UserGroupIcon, ChartPieIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const Dashboard: React.FC = () => {

    const [creatingDoc, setCreatingDoc] = useState<boolean>(false);
    const router = useRouter();

    const createNewDoc = (): void => {
        // router.push('/newDoc');
        setCreatingDoc(true);

        setTimeout(( ) => {
            router.push('/newDoc');
            setCreatingDoc(false);
        }, 3000)
    };

    return (
        <div className="w-full">
        <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-semibold text-gray-500">Welcome, <span className='text-blue-700'>Steph!</span></h1>
            <button
                className="bg-blue-700 text-white text-sm px-4 py-2 rounded-md flex items-center hover:bg-blue-600 transition duration-300"
                onClick={createNewDoc}
                disabled={creatingDoc}
            >
                {creatingDoc ? (
                    <>
                    <span className="animate-spin">
                        <PlusIcon className="h-5 w-5" />
                    </span>
                    <span className='ml-2'>Creating...</span>
                    </>
                ) : (
                    <>
                    <PlusIcon className="h-5 w-5 mr-2" />
                    Create New
                    </>
                )}
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
