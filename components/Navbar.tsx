import Link from 'next/link'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setIsMenuOpen } from '../ReduxStore/Slice';
import { RootState } from '../ReduxStore/store';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function Index() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.example.isMenuOpen);

  const openMenu = () => {
    dispatch(setIsMenuOpen(true));
  }

  const closeMenu = () => {
    dispatch(setIsMenuOpen(false));
  }

  const handleMenuItemClick = () => {
    if (isMenuOpen) {
      closeMenu();
    }
  }

  return (
    <nav className='fixed w-full top-0 z-50 flex justify-between items-center py-6 lg:py-8 px-4 lg:px-8 bg-[#003366] text-white'>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 24 24" 
        strokeWidth="1.5" stroke="currentColor" 
        className="w-6 h-6 block lg:hidden"
        onClick={openMenu}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <h2 className='font-bold'>Elite X</h2>
      <ul className={`list-none flex flex-col lg:flex-row justify-center items-center lg:space-x-4 space-y-4 lg:space-y-0 absolute ${isMenuOpen ? "left-0" : "-left-[120%] lg:left-auto"} transition-all top-0 w-full lg:w-auto lg:relative bg-[#003366] lg:h-auto h-[100vh] lg:bg-transparent z-40 lg:z-auto`}>
        <li onClick={handleMenuItemClick}><Link href={"/"}>Home</Link></li>
        <li onClick={handleMenuItemClick}><Link href={"/about"}>About</Link></li>
        <li onClick={handleMenuItemClick}><Link href={"/pricing"}>Pricing</Link></li>
        <li onClick={handleMenuItemClick}><Link href={"/guide"}>Guide</Link></li>
        <li onClick={handleMenuItemClick}><Link href={"contact/"}>Contact</Link></li>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" 
          strokeWidth="1.5" stroke="currentColor" 
          className="w-6 h-6 lg:hidden block absolute z-50 top-6 right-8"
          onClick={closeMenu}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </ul>
      <Link href={'authentication'}><UserCircleIcon className='h-8 w-8 text-white' /></Link>
    </nav>
  )
}
