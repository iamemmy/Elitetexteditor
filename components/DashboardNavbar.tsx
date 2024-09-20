import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setIsSidebarOpen } from '../ReduxStore/Slice';
import { RootState } from '../ReduxStore/store';

function DashboardNavbar() {

    const dispatch = useDispatch();
    const isSidebarOpen = useSelector((state: RootState) => state.example.isSidebarOpen);

    const toggleDashboardNav = () => {
        dispatch(setIsSidebarOpen(!isSidebarOpen));
    }
    

  return (
    <>
      <nav className="bg-[#003366] text-white py-6 px-4 lg:px-8 shadow-md flex items-center justify-between">
        <h1 className="text-xl lg:text-2xl font-semibold">Elite X</h1>
        <button 
          className="lg:hidden text-white" 
          onClick={toggleDashboardNav}
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
      </nav>
    </>
  )
}

export default DashboardNavbar;
