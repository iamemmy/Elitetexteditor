import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="relative flex flex-col lg:flex-row h-auto lg:h-screen pt-8 bg-white">
      {/* Content Section */}
      <div
        className="relative flex-1 flex flex-col items-center lg:items-start px-6 md:px-12 lg:px-16 py-8 lg:py-16 z-10 order-1 lg:order-1"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <div className="flex flex-col max-w-2xl lg:max-w-3xl">
          {/* Hero Content Header */}
          <div
            className="text-gray-900 mb-4"
            data-aos="slide-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
              Unleash Your Creativity with <br />
              <span className="text-indigo-600">Elite X Text Editor</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
              The ultimate text editing tool designed for productivity, simplicity, and collaboration.
            </p>
          </div>

          {/* Feature List */}
          <div className="hidden lg:block mt-8 lg:mt-12 text-left">
            <ul
              className="text-gray-700 space-y-4 text-base md:text-lg lg:text-xl"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <li className="flex items-center">
                <FaCheckCircle className="text-indigo-500 mr-3 text-xl" />
                Real-time Collaboration for seamless teamwork.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-indigo-500 mr-3 text-xl" />
                Customizable Themes to suit your style.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-indigo-500 mr-3 text-xl" />
                Powerful Editing Tools for enhanced productivity.
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-indigo-500 mr-3 text-xl" />
                Flexible Settings to tailor your experience.
              </li>
            </ul>
          </div>

          <div className="mt-8 lg:mt-12">
            <Link
              href="/authentication"
              className="inline-block px-4 lg:px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-md shadow-lg hover:bg-indigo-700 transition duration-300"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="relative hidden lg:flex flex-none w-full lg:w-2/5 items-center justify-center mt-8 lg:mt-0 order-2 lg:order-2"
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="700"
      >
        <Image
          src="/hero2.png"
          alt="Hero Image"
          width={1200}
          height={800}
          layout="intrinsic"
          quality={100}
          objectFit="contain"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
