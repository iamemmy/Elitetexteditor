// import React, { useEffect } from "react";
// import Slider from "react-slick";
// import { PrevArrow, NextArrow } from "./CustomArrows";
// import {
//   FaStar,
//   FaStarHalfAlt,
//   FaQuoteLeft,
//   FaQuoteRight,
// } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";
// const Testimonials: React.FC = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     centerMode: true,
//     centerPadding: "0",
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const stars = (
//     <div className="flex justify-center mb-2">
//       <FaStar className="text-yellow-500" />
//       <FaStar className="text-yellow-500" />
//       <FaStar className="text-yellow-500" />
//       <FaStar className="text-yellow-500" />
//       <FaStarHalfAlt className="text-yellow-500" />
//     </div>
//   );

//   return (
//     <section className="bg-white py-16 mx-7">
//       <div className="container mx-auto text-center">
//         <h2
//           className="text-3xl lg:text-4xl font-bold mb-8 text-indigo-600"
//           data-aos="fade-up"
//         >
//           What Our Users Are Saying
//         </h2>
//         <Slider {...settings} className="slider-container">
//           <div
//             className="p-6 py-10 bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 transition duration-300"
//             data-aos="fade-up"
//           >
//             <div className="relative mb-4">
//               <FaQuoteLeft className="absolute text-indigo-500 text-4xl top-0 left-4 -translate-y-1/2" />
//               <img
//                 src="https://via.placeholder.com/100"
//                 alt="Alex Johnson"
//                 className="mx-auto mb-4 w-20 h-20 rounded-full object-cover"
//               />
//               {/* <FaQuoteRight className="absolute text-indigo-500 text-4xl bottom-0 right-4 translate-y-1/2" /> */}
//             </div>
//             <p className="text-gray-700 mb-4">
//               "Elite X has transformed the way we work. The real-time
//               collaboration is a game-changer!"
//             </p>
//             {stars}
//             <h4 className="text-xl font-semibold">- Alex Johnson</h4>
//           </div>

//           <div
//             className="p-6 py-10 bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 transition duration-300"
//             data-aos="fade-up"
//           >
//             <div className="relative mb-4">
//               <FaQuoteLeft className="absolute text-indigo-500 text-4xl top-0 left-4 -translate-y-1/2" />
//               <img
//                 src="https://via.placeholder.com/100"
//                 alt="Jamie Lee"
//                 className="mx-auto mb-4 w-20 h-20 rounded-full object-cover"
//               />
//               {/* <FaQuoteRight className="absolute text-indigo-500 text-4xl bottom-0 right-4 translate-y-1/2" /> */}
//             </div>
//             <p className="text-gray-700 mb-4">
//               "I love how customizable the editor is. It feels like it was made
//               just for me."
//             </p>
//             {stars}
//             <h4 className="text-xl font-semibold">- Jamie Lee</h4>
//           </div>

//           <div
//             className="p-6 py-10 bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 transition duration-300"
//             data-aos="fade-up"
//           >
//             <div className="relative mb-4">
//               <FaQuoteLeft className="absolute text-indigo-500 text-4xl top-0 left-4 -translate-y-1/2" />
//               <img
//                 src="https://via.placeholder.com/100" // Replace with real image
//                 alt="Chris Daniels"
//                 className="mx-auto mb-4 w-20 h-20 rounded-full object-cover"
//               />
//               {/* <FaQuoteRight className="absolute text-indigo-500 text-4xl bottom-0 right-4 translate-y-1/2" /> */}
//             </div>
//             <p className="text-gray-700 mb-4">
//               "The syntax highlighting is beautiful, and the interface is clean
//               and intuitive."
//             </p>
//             {stars}
//             <h4 className="text-xl font-semibold">- Chris Daniels</h4>
//           </div>
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React, { useEffect } from "react";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "./CustomArrows";
import {
  FaStar,
  FaStarHalfAlt,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Testimonials: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const stars = (
    <div className="flex justify-center mb-2">
      <FaStar className="text-yellow-500" />
      <FaStar className="text-yellow-500" />
      <FaStar className="text-yellow-500" />
      <FaStar className="text-yellow-500" />
      <FaStarHalfAlt className="text-yellow-500" />
    </div>
  );

  return (
    <section className="bg-white py-16 mx-7">
      <div className="container mx-auto text-center">
        <h2
          className="text-3xl lg:text-4xl font-bold mb-8 text-indigo-600"
          data-aos="fade-up"
        >
          What Our Users Are Saying
        </h2>
        <Slider {...settings} className="slider-container">
          <div
            className="p-6 py-10 bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 transition duration-300"
            data-aos="fade-up"
          >
            <div className="relative mb-4">
              <FaQuoteLeft className="absolute text-indigo-500 text-4xl top-0 left-4 -translate-y-1/2" />
              <Image
                src="/hero-bg.png"
                alt="Alex Johnson"
                width={80}
                height={80}
                className="mx-auto mb-4 w-20 h-20 rounded-full object-cover"
              />
              {/* <FaQuoteRight className="absolute text-indigo-500 text-4xl bottom-0 right-4 translate-y-1/2" /> */}
            </div>
            <p className="text-gray-700 mb-4">
              "Elite X has transformed the way we work. The real-time
              collaboration is a game-changer!"
            </p>
            {stars}
            <h4 className="text-xl font-semibold">- Alex Johnson</h4>
          </div>

          <div
            className="p-6 py-10 bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 transition duration-300"
            data-aos="fade-up"
          >
            <div className="relative mb-4">
              <FaQuoteLeft className="absolute text-indigo-500 text-4xl top-0 left-4 -translate-y-1/2" />
              <Image
                src="/hero2.png"
                alt="Jamie Lee"
                width={80}
                height={80}
                className="mx-auto mb-4 w-20 h-20 rounded-full object-cover"
              />
              {/* <FaQuoteRight className="absolute text-indigo-500 text-4xl bottom-0 right-4 translate-y-1/2" /> */}
            </div>
            <p className="text-gray-700 mb-4">
              "I love how customizable the editor is. It feels like it was made
              just for me."
            </p>
            {stars}
            <h4 className="text-xl font-semibold">- Jamie Lee</h4>
          </div>

          <div
            className="p-6 py-10 bg-indigo-100 rounded-lg shadow-lg hover:bg-indigo-200 transition duration-300"
            data-aos="fade-up"
          >
            <div className="relative mb-4">
              <FaQuoteLeft className="absolute text-indigo-500 text-4xl top-0 left-4 -translate-y-1/2" />
              <Image
                src="/hero-bg.png"
                alt="Chris Daniels"
                width={80}
                height={80}
                className="mx-auto mb-4 w-20 h-20 rounded-full object-cover"
              />
              {/* <FaQuoteRight className="absolute text-indigo-500 text-4xl bottom-0 right-4 translate-y-1/2" /> */}
            </div>
            <p className="text-gray-700 mb-4">
              "The syntax highlighting is beautiful, and the interface is clean
              and intuitive."
            </p>
            {stars}
            <h4 className="text-xl font-semibold">- Chris Daniels</h4>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
