import { useState } from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    console.log("clicked!");
    
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
        <aside 
          className={`z-50 h-[90vh] lg:h-auto fixed lg:relative lg:top-0 top-[60px] left-0 w-full lg:w-auto bg-gray-200 lg:bg-transparent text-gray-800 lg:text-white flex flex-col justify-center items-center lg:flex-row p-6 space-y-4 lg:space-y-0 lg:py-6 lg:px-6 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
            <li className="hover:bg-gray-300 lg:hover:bg-indigo-500 px-4 py-2 rounded-md cursor-pointer text-sm transition duration-300">
              <Link href={'/'} className="block w-full h-full">Home</Link>
            </li>
            <li className="hover:bg-gray-300 lg:hover:bg-indigo-500 px-4 py-2 rounded-md cursor-pointer text-sm transition duration-300">
              <Link href={'/'} className="block w-full h-full">About</Link>
            </li>
            <li className="hover:bg-gray-300 lg:hover:bg-indigo-500 px-4 py-2 rounded-md cursor-pointer text-sm transition duration-300">
              <Link href={'/'} className="block w-full h-full">Guide</Link>
            </li>
            <li className="hover:bg-gray-300 lg:hover:bg-indigo-500 px-4 py-2 rounded-md cursor-pointer text-sm transition duration-300">
              <Link href={'/'} className="block w-full h-full">Contact</Link>
            </li>
          </ul>

          <Link 
            href={'/dashboard'}
            className="mt-auto access-btn lg:hidden bg-indigo-600 text-white text-sm hover:bg-indigo-700 border border-indigo-200 px-4 py-2 rounded-md transition duration-300"
          >
            Dashboard
          </Link>
        </aside>

        <Link 
          className="mt-0 hidden lg:block bg-indigo-600 text-white text-sm hover:bg-indigo-700 border border-indigo-200 px-4 py-2 rounded-md transition duration-300"
          href={'/dashboard'}
        >
          Dashboard
        </Link>
      </header>
      <main className="w-full">
        <div className="w-full">
          <div className="relative flex items-center justify-center h-[90vh] bg-white">
            <div className="relative z-10 p-6 text-center text-black">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                Welcome to Elite X
              </h1>
              <p className="text-lg lg:text-xl max-w-2xl mx-auto mb-6">
                Discover the next level of collaboration with our cutting-edge platform. Join us and take your projects to new heights.
              </p>
                <Link href={'/authentication'} className="inline-block px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-md shadow-lg hover:bg-indigo-700 transition duration-300">
                  Get Started
                </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
