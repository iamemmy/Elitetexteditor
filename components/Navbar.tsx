import Link from "next/link";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [scrollingDown, setScrollingDown] = useState<boolean>(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
    <header
      className={`fixed top-0 left-0 w-full bg-indigo-600 text-white px-4 py-0 lg:px-4 lg:py-0 shadow-md flex items-center justify-between z-50 h-16 transition-transform duration-300 ${
        scrollingDown ? "top-[-100px]" : "top-0"
      }`}
      data-aos="fade-down"
    >
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Link
        href="/dashboard"
        className="mt-0 hidden lg:block bg-indigo-600 text-white text-sm hover:bg-indigo-700 border border-indigo-200 px-4 py-2 rounded-md transition duration-300"
      >
        Dashboard
      </Link>
    </header>
  );
};

export default Navbar;
