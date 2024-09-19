// // import { FaUsers, FaPalette, FaTools, FaCogs } from "react-icons/fa";
// // import { useEffect } from "react";
// // import AOS from "aos";
// // import "aos/dist/aos.css";

// // const Features: React.FC = () => {
// //   useEffect(() => {
// //     AOS.init();
// //   }, []);

// //   return (
// //     <section className="bg-gray-100 py-16 px-6">
// //       <div
// //         className="container mx-auto text-center"
// //         data-aos="fade-up"
// //         data-aos-duration="1200"
// //       >
// //         <h2 className="text-2xl md:text-4xl lg:text-5xl text-indigo-600 font-bold mb-8">
// //           Why Choose Elite X?
// //         </h2>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
// //           {/* Real-time Collaboration */}
// //           <div
// //             className="group p-6 rounded-lg shadow-lg cursor-pointer bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2"
// //             data-aos="fade-up"
// //             data-aos-duration="1200"
// //             data-aos-delay="100"
// //           >
// //             <FaUsers className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-white group-hover:text-indigo-600 transition duration-300" />
// //             <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
// //               Real-time Collaboration
// //             </h3>
// //             <p className="text-sm md:text-base lg:text-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300">
// //               Work together with your team, no matter where they are, with
// //               seamless real-time collaboration tools.
// //             </p>
// //           </div>

// //           {/* Flexible Settings */}
// //           <div
// //             className="group p-6 rounded-lg shadow-lg cursor-pointer bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-7"
// //             data-aos="fade-up"
// //             data-aos-duration="1200"
// //             data-aos-delay="200"
// //           >
// //             <FaCogs className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-white group-hover:text-indigo-600 transition duration-300" />
// //             <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
// //               Flexible Settings
// //             </h3>
// //             <p className="text-sm md:text-base lg:text-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300">
// //               Adjust your editing environment with flexible, user-friendly
// //               settings.
// //             </p>
// //           </div>

// //           {/* Customizable Themes */}
// //           <div
// //             className="group p-6 rounded-lg shadow-lg cursor-pointer bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2"
// //             data-aos="fade-up"
// //             data-aos-duration="1200"
// //             data-aos-delay="300"
// //           >
// //             <FaPalette className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-white group-hover:text-indigo-600 transition duration-300" />
// //             <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
// //               Customizable Themes
// //             </h3>
// //             <p className="text-sm md:text-base lg:text-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300">
// //               Make the editor your own with a variety of themes and
// //               customization options.
// //             </p>
// //           </div>

// //           {/* Powerful Editing Tools */}
// //           <div
// //             className="group p-6 rounded-lg shadow-lg cursor-pointer bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-2"
// //             data-aos="fade-up"
// //             data-aos-duration="1200"
// //             data-aos-delay="400"
// //           >
// //             <FaTools className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-white group-hover:text-indigo-600 transition duration-300" />
// //             <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
// //               Powerful Editing Tools
// //             </h3>
// //             <p className="text-sm md:text-base lg:text-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300">
// //               Boost productivity with advanced and powerful editing tools.
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Features;

// import { FaUsers, FaPalette, FaTools, FaCogs } from "react-icons/fa";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Features: React.FC = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <section className="bg-gray-100 pt-8 px-6 pb-10">
//       <div
//         className="container mx-auto text-center"
//         data-aos="fade-up"
//         data-aos-duration="1200"
//       >
//         <h2 className="text-2xl md:text-4xl lg:text-5xl md:pt-6 md:pb-10 text-[#003366] font-bold mb-8">
//           Why Choose Elite X?
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Real-time Collaboration */}
//           <div
//             className="group p-6 rounded-lg shadow-lg cursor-pointer bg-[#003366] text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
//             data-aos="fade-up"
//             data-aos-duration="1200"
//             data-aos-delay="100"
//           >
//             <FaUsers className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-white" />
//             <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
//               Real-time Collaboration
//             </h3>
//             <p className="text-sm md:text-base lg:text-lg opacity-80">
//               Work together with your team, no matter where they are, with
//               seamless real-time collaboration tools.
//             </p>
//           </div>

//           {/* Flexible Settings */}
//           <div
//             className="group p-6 rounded-lg shadow-lg cursor-pointer bg-[#003366] text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
//             data-aos="fade-up"
//             data-aos-duration="1200"
//             data-aos-delay="200"
//           >
//             <FaCogs className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-white" />
//             <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
//               Flexible Settings
//             </h3>
//             <p className="text-sm md:text-base lg:text-lg opacity-80">
//               Adjust your editing environment with flexible, user-friendly
//               settings.
//             </p>
//           </div>

//           {/* Customizable Themes */}
//           <div
//             className="group p-6 rounded-lg shadow-lg cursor-pointer bg-[#003366] text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
//             data-aos="fade-up"
//             data-aos-duration="1200"
//             data-aos-delay="300"
//           >
//             <FaPalette className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-white" />
//             <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
//               Customizable Themes
//             </h3>
//             <p className="text-sm md:text-base lg:text-lg opacity-80">
//               Make the editor your own with a variety of themes and
//               customization options.
//             </p>
//           </div>

//           {/* Powerful Editing Tools */}
//           <div
//             className="group p-6 rounded-lg shadow-lg cursor-pointer bg-[#003366] text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
//             data-aos="fade-up"
//             data-aos-duration="1200"
//             data-aos-delay="400"
//           >
//             <FaTools className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-white" />
//             <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
//               Powerful Editing Tools
//             </h3>
//             <p className="text-sm md:text-base lg:text-lg opacity-80">
//               Boost productivity with advanced and powerful editing tools.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

import { FaUsers, FaPalette, FaTools, FaCogs } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Features: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-gray-100 pt-8 px-6 pb-10">
      <div
        className="container mx-auto text-center"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl md:pt-6 md:pb-10 text-[#003366] font-bold mb-8">
          Why Choose Elite X?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Real-time Collaboration */}
          <div
            className="group p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gradient-to-r hover:from-[#84b5e3] hover:to-[#5d99d2] bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5]  text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-white"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <FaUsers className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-white group-hover:text-[#003366]" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 group-hover:text-[#003366]">
              Real-time Collaboration
            </h3>
            <p className="text-sm md:text-base lg:text-lg opacity-80 group-hover:text-[#003366]">
              Work together with your team, no matter where they are, with
              seamless real-time collaboration tools.
            </p>
          </div>

          {/* Flexible Settings */}
          <div
            className="group p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gradient-to-r hover:from-[#84b5e3] hover:to-[#5d99d2] bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-white"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <FaCogs className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-white group-hover:text-[#003366]" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 group-hover:text-[#003366]">
              Flexible Settings
            </h3>
            <p className="text-sm md:text-base lg:text-lg opacity-80 group-hover:text-[#003366]">
              Adjust your editing environment with flexible, user-friendly
              settings.
            </p>
          </div>

          {/* Customizable Themes */}
          {/* bg-[#003366] */}
          <div
            className="group p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gradient-to-r hover:from-[#84b5e3] hover:to-[#5d99d2] bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-white"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <FaPalette className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-white group-hover:text-[#003366]" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 group-hover:text-[#003366]">
              Customizable Themes
            </h3>
            <p className="text-sm md:text-base lg:text-lg opacity-80 group-hover:text-[#003366]">
              Make the editor your own with a variety of themes and
              customization options.
            </p>
          </div>

          {/* Powerful Editing Tools */}
          <div
            // bg-[#2465a5]
            className="group p-6 rounded-lg shadow-lg cursor-pointer hover:bg-gradient-to-r hover:from-[#84b5e3] hover:to-[#5d99d2] bg-gradient-to-r from-[#003366] to-[#1e69b5] text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl "
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <FaTools className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-white group-hover:text-[#003366]" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 group-hover:text-[#003366]">
              Powerful Editing Tools
            </h3>
            <p className="text-sm md:text-base lg:text-lg opacity-80 group-hover:text-[#003366]">
              Boost productivity with advanced and powerful editing tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
