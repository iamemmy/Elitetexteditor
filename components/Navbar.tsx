import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsMenuOpen } from "../ReduxStore/Slice";
import { RootState } from "../ReduxStore/store";
import Sidebar from "./Sidebar"; // Make sure to implement the Sidebar component or import it

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const [scrollingDown, setScrollingDown] = useState<boolean>(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const { isMenuOpen } = useSelector((state: RootState) => state.example);

  const openMenu = () => {
    dispatch(setIsMenuOpen(true));
  };

  const closeMenu = () => {
    dispatch(setIsMenuOpen(false));
  };

  const handleMenuItemClick = () => {
    if (isMenuOpen) {
      closeMenu();
    }
  };

  const toggleSidebar = () => {
    dispatch(setIsMenuOpen(!isMenuOpen));
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      if (currentScrollTop > lastScrollTop) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    // from-[#003366] to-[#002244]
    <header
      className={`fixed top-0 left-0 w-full bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] text-white px-4 py-0 lg:px-8 shadow-md z-50 h-16 flex justify-between items-center transition-transform duration-300 ${
        scrollingDown ? "top-[-100px]" : "top-0"
      }`}
    >
      <h2 className="font-bold text-xl lg:text-2xl">Elite X</h2>
      <ul
        className={`list-none flex flex-col lg:flex-row justify-center items-center lg:space-x-4 space-y-4 lg:space-y-0 absolute ${
          isMenuOpen ? "left-0" : "-left-[120%] lg:left-auto"
        } transition-all top-0 w-full lg:w-auto lg:relative bg-indigo-700 lg:h-auto h-[100vh] lg:bg-transparent z-40 lg:z-auto`}
      >
        <li onClick={handleMenuItemClick}>
          <Link href={"/"}>Home</Link>
        </li>
        <li onClick={handleMenuItemClick}>
          <Link href={"/about"}>About</Link>
        </li>
        <li onClick={handleMenuItemClick}>
          <Link href={"/pricing"}>Pricing</Link>
        </li>
        <li onClick={handleMenuItemClick}>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li onClick={handleMenuItemClick}>
          <Link href={"/guide"}>Guide</Link>
        </li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 lg:hidden block absolute z-50 top-6 right-8"
          onClick={closeMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </ul>
      <Link
        href="/authentication"
        className="px-5 py-2 border hover:bg-[#003366] font-semibold border-indigo-400 text-white rounded-lg"
      >
        Login
      </Link>

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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </header>
  );
};

export default Navbar;
