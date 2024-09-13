import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const PrevArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => (
  <div
    className={`${className} arrow absolute top-1/2 left-4 transform -translate-y-1/2 z-20 cursor-pointer flex items-center justify-center text-2xl md:text-3xl lg:text-4xl`}
    style={{
      ...style,
      display: "block",
      background: "rgba(99, 102, 241, 1)",
      borderRadius: "50%",
      width: "50px", // Adjusted size
      height: "50px", // Adjusted size
      lineHeight: "50px", // Adjusted to match width and height
      color: "white",
      transition:
        "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
      padding: "0.5rem",
    }}
    onClick={onClick}
  >
    <FaChevronLeft className="text-3xl" />
  </div>
);

export const NextArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => (
  <div
    className={`${className} arrow absolute top-1/2 right-4 transform -translate-y-1/2 z-20 cursor-pointer flex items-center justify-center text-2xl md:text-3xl lg:text-4xl`}
    style={{
      ...style,
      display: "block",
      background: "rgba(99, 102, 241, 1)",
      borderRadius: "50%",
      width: "50px", // Adjusted size
      height: "50px", // Adjusted size
      lineHeight: "50px", // Adjusted to match width and height
      color: "white",
      transition:
        "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
      padding: "0.5rem",
    }}
    onClick={onClick}
  >
    <FaChevronRight className="text-3xl" />
  </div>
);
