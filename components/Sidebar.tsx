import Link from "next/link";

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen }) => {

  

  return (
    <aside
      className={`z-50 h-[90vh] lg:h-auto fixed lg:relative lg:top-0 top-[60px] left-0 w-full lg:w-auto bg-gray-200 lg:bg-transparent text-gray-800 lg:text-white flex flex-col justify-center items-center lg:flex-row p-6 space-y-4 lg:space-y-0 lg:py-6 lg:px-6 transition-transform transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
        <li className="hover:bg-gray-300 lg:hover:bg-indigo-500 px-4 py-2 rounded-md cursor-pointer text-lg transition duration-300">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:bg-gray-300 lg:hover:bg-indigo-500 px-4 py-2 rounded-md cursor-pointer text-lg transition duration-300">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:bg-gray-300 lg:hover:bg-indigo-500 px-4 py-2 rounded-md cursor-pointer text-lg transition duration-300">
          <Link href="/guide">Guide</Link>
        </li>
        <li className="hover:bg-gray-300 lg:hover:bg-indigo-500 px-4 py-2 rounded-md cursor-pointer text-lg transition duration-300">
          <Link href="/pricing">Pricing</Link>
        </li>
        <li className="hover:bg-gray-300 lg:hover:bg-indigo-500 px-4 py-2 rounded-md cursor-pointer text-lg transition duration-300">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <Link
        href="/dashboard"
        className="mt-auto access-btn lg:hidden bg-indigo-600 text-white text-sm hover:bg-indigo-700 border border-indigo-200 px-4 py-2 rounded-md transition duration-300"
      >
        Dashboard
      </Link>
    </aside>
  );
};

export default Sidebar;
