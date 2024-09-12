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
    className={`${className} arrow absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer flex items-center justify-center`}
    style={{
      ...style,
      display: "block",
      background: "rgba(99, 102, 241, 0.8)",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      lineHeight: "60px",
      color: "white",
      transition:
        "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
    }}
    onClick={onClick}
  >
    <FaChevronLeft className=" pl-2 pt-3 text-5xl" />
  </div>
);

export const NextArrow: React.FC<ArrowProps> = ({
  className,
  style,
  onClick,
}) => (
  <div
    className={`${className} arrow absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer flex items-center justify-center`}
    style={{
      ...style,
      display: "block",
      background: "rgba(99, 102, 241, 1)",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      lineHeight: "60px",
      color: "white",
      transition:
        "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
    }}
    onClick={onClick}
  >
    <FaChevronRight className=" pl-5 pt-3 text-5xl" />
  </div>
);
