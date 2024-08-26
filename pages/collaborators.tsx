import { useState } from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white px-4 py-4 lg:px-4 lg:py-2 shadow-md flex items-center justify-between">
        <h1 className="text-xl lg:text-2xl font-semibold">Elite X</h1>
        <button 
          className="lg:hidden text-white" 
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </header>
      <main className="flex flex-1">
        <aside 
          className={`z-50 h-[90vh] lg:h-auto fixed lg:relative lg:top-0 top-[64px] left-0 w-full lg:w-[20%] bg-gray-200 text-gray-800 flex flex-col p-6 space-y-4 lg:space-y-6 lg:py-6 lg:px-6 lg:shadow-md transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
        >
          <ul className="flex flex-col space-y-4 lg:space-y-2">
            <li className="hover:bg-gray-300 px-4 py-2 rounded-md cursor-pointer text-sm transition duration-300">
              <Link href={'/'} className="block w-full h-full">Home</Link>
            </li>
            <li className="hover:bg-gray-300 px-4 py-2 rounded-md cursor-pointer text-sm transition duration-300">
              <Link href={'/dashboard'} className="block w-full h-full">Dashboard</Link>
            </li>
            <li className="hover:bg-gray-300 px-4 py-2 rounded-md cursor-pointer text-sm transition duration-300">
              <Link href={'/newDoc'} className="block w-full h-full">New Doc</Link>
            </li>
            <li className="hover:bg-gray-300 px-4 py-2 rounded-md cursor-pointer text-sm transition duration-300">
              <Link href={'/history'} className="block w-full h-full">History</Link>
            </li>
            <li className="hover:bg-gray-300 px-4 py-2 rounded-md cursor-pointer text-sm transition duration-300">
              <Link href={'/profile'} className="block w-full h-full">Profile</Link>
            </li>
            <li className="hover:bg-gray-300 px-4 py-2 rounded-md cursor-pointer text-sm transition duration-300">
              <Link href={'/collaborators'} className="block w-full h-full">Collaborators</Link>
            </li>
          </ul>

          <button 
            className="mt-auto access-btn bg-red-600 text-white text-sm hover:bg-red-700 px-4 py-2 rounded-md transition duration-300"
          >
            Logout
          </button>
        </aside>

        <div className="w-full lg:w-[80%] h-[80vh] p-4 lg:p-6 flex justify-center items-center">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-300 text-center w-[80%] lg:w-[50%]">
                <p className="text-sm lg:text-base text-gray-600">No collaborators available</p>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
