import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../ReduxStore/store';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useRouter } from 'next/router';

function DashboardSidebar() {

    const isSidebarOpen = useSelector((state: RootState) => state.example.isSidebarOpen);
    const router = useRouter();

    const handleLogout = async () => {
      try {
        await signOut(auth);
        console.log("Logged out successfully!");
  
        setTimeout(() => {
          router.push('/authentication');
        }, 3000);
        
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };

    
  return (
    <>
        <aside 
          className={`z-50 h-[90vh] lg:h-auto fixed lg:relative lg:top-0 top-[80px] left-0 w-full lg:w-[20%] bg-gray-200 text-gray-800 flex flex-col p-6 space-y-4 lg:space-y-6 lg:py-6 lg:px-6 lg:shadow-md transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
        >
          <ul className="flex flex-col space-y-4 lg:space-y-2">
            <li className="hover:bg-gray-300 px-4 py-2 rounded-md cursor-pointer text-sm transition duration-300">
              <Link href={'/'} className="block w-full h-full">Home</Link>
            </li>
            <li className="hover:bg-gray-300 px-4 py-2 rounded-md cursor-pointer text-sm transition duration-300">
              <Link href={'/dashboard'} className="block w-full h-full">Dashboard</Link>
            </li>
            <li className="hover:bg-gray-300 px-4 py-2 rounded-md cursor-pointer text-sm transition duration-300">
              <Link href={'/newFile'} className="block w-full h-full">New File</Link>
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
            onClick={handleLogout}
          >
            Logout
          </button>
        </aside>
    </>
  )
}

export default DashboardSidebar;
