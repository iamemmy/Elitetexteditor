import { useRouter } from "next/router";
import React from "react";

interface GoBackButtonProps {
  fallbackUrl?: string; // Optional fallback URL
  text?: string; // Optional text for the button
}

const GoBackButton: React.FC<GoBackButtonProps> = ({
  fallbackUrl = "/",
  text = "Go Back", // Default text for the button
}) => {
  const router = useRouter();

  const handleGoBack = () => {
    if (router.asPath !== router.pathname) {
      // Go back if there's history
      router.back();
    } else {
      // Go to fallback URL
      router.push(fallbackUrl);
    }
  };

  return (
    <button
      onClick={handleGoBack}
      className="absolute top-4 left-4 flex items-center space-x-2  hover:bg-gradient-to-r hover:from-[#234c72] hover:to-[#3b7cb8] bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] hover:bg-[#21578e] text-white text-sm lg:text-base font-semibold px-4 py-2 rounded-lg transition-colors shadow-md"
    >
      {/* Custom Arrow Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 19l-7-7 7-7M5 12h16"
        />
      </svg>
      {/* Text for the button */}
      <span>{text}</span>
    </button>
  );
};

export default GoBackButton;
