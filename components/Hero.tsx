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
    <section className="relative flex flex-col lg:flex-row h-auto lg:h-screen pt-20 lg:pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        <Image
          src="/hero-bg.png"
          alt="Background"
          layout="fill"
          quality={100}
          objectFit="cover"
          className="filter blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-indigo-900 opacity-75"></div>
      </div>

      {/* Content Section */}
      <div
        className="relative flex-1 flex flex-col items-center lg:items-start p-6 md:p-12 z-10 order-2 lg:order-1"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <div className="flex flex-col max-w-2xl text-center lg:text-left">
          {/* Hero Content Header */}
          <div
            className="text-white mb-6"
            data-aos="slide-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Unleash Your Creativity with <br />
              <span className="pt-10">Elite X Text Editor</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl">
              The ultimate text editing tool designed for productivity,
              simplicity, and collaboration.
            </p>
          </div>

          {/* Feature List */}
          <div className="mt-3 text-left">
            <ul
              className="text-white space-y-4"
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

          {/* Get Started Button */}
          <Link
            href="/authentication"
            className="inline-block md:w-[190px] px-6 py-3 text-lg font-medium lg:mb-28 text-white bg-indigo-600 rounded-md shadow-lg hover:bg-indigo-700 transition duration-300 mt-8"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="relative flex-none w-full lg:w-3/5 flex items-center justify-center mt-8 lg:mt-0 order-1 lg:order-2"
        data-aos="zoom-in"
        data-aos-duration="1500"
        data-aos-delay="700"
      >
        <Image
          src="/hero2.png"
          alt="Hero Image"
          width={1500}
          height={600}
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
