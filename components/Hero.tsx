import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="relative flex h-screen pt-20 lg:pt-36">
      <div
        className="absolute inset-0"
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        <img
          src="/hero-bg.png"
          alt="Background"
          className="w-full h-full object-cover filter blur-sm"
        />
        <div className="absolute inset-0 bg-indigo-900 opacity-75"></div>
      </div>

      <div
        className="relative flex-1 ml-9 flex items-center p-4 z-10"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <div className="flex flex-col max-w-2xl">
          <div
            className="text-white mb-6"
            data-aos="slide-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <h1 className="text-left text-4xl lg:text-6xl lg:w-[500px] font-bold mb-6">
              Unleash Your Creativity with Elite X Text Editor
            </h1>
            <p className="text-lg lg:text-xl">
              The ultimate text editing tool designed for productivity,
              simplicity, and collaboration.
            </p>
          </div>

          <div className="mt-3 text-left">
            <div className="flex flex-col lg:space-x-8">
              <div className="flex flex-col items-start mb-8">
                <ul
                  className="text-lg text-white space-y-4"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-400 mr-3 text-xl" />
                    Real-time Collaboration for seamless teamwork.
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-400 mr-3 text-xl" />
                    Customizable Themes to suit your style.
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-400 mr-3 text-xl" />
                    Powerful Editing Tools for enhanced productivity.
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="text-indigo-400 mr-3 text-xl" />
                    Flexible Settings to tailor your experience.
                  </li>
                </ul>
              </div>
            </div>

            <Link
              href="/authentication"
              className="inline-block px-8 py-3 text-lg font-medium mb-20 text-white bg-indigo-600 rounded-md shadow-lg hover:bg-indigo-700 transition duration-300"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div
        className="relative flex-none w-3/5 flex items-center justify-center "
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="700"
      >
        <img
          src="/hero2.png"
          alt="Hero Image"
          className="w-full h-auto max-h-full object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
