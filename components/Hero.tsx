import Link from "next/link";
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="relative flex flex-col lg:flex-row h-auto lg:h-screen pt-20 lg:pt-28 md:mb-20 bg-white">
      {/* Content Section */}
      <div
        className="relative flex-1 flex flex-col items-center lg:items-start px-6 md:px-12 lg:px-16 py-8 lg:py-16 z-10 order-1 lg:order-1"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <div className="flex flex-col max-w-2xl lg:max-w-3xl">
          {/* Hero Content Header */}
          <div
            className="text-gray-900 mb-4"
            data-aos="slide-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight text-slate-700">
              Unleash Your Creativity with
              <span className="text-[#4082c4]"> Elite X Text Editor</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
              The ultimate text editing tool designed for productivity,
              simplicity, and collaboration.
            </p>
          </div>

          {/* Feature List */}
          <div className=" lg:block mt-4 lg:mt-9 text-left">
          <ul
            className="flex flex-col justify-center items-start text-gray-700 space-y-4 text-base md:text-lg lg:text-xl"
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <li className="flex justify-center items-start space-x-3">
              <CheckCircleIcon className="w-6 h-6 text-[#27619a]" />
              <p className="text-sm lg:text-base">Real-time Collaboration for seamless teamwork.</p>
            </li>
            <li className="flex justify-center items-start space-x-3">
              <CheckCircleIcon className="w-6 h-6 text-[#27619a]" />
              <p className="text-sm lg:text-base">Customizable Themes to suit your style.</p>
            </li>
            <li className="flex justify-center items-start space-x-3">
              <CheckCircleIcon className="w-6 h-6 text-[#27619a]" />
              <p className="text-sm lg:text-base">Powerful Editing Tools for enhanced productivity.</p>
            </li>
            <li className="flex justify-center items-start space-x-3">
              <CheckCircleIcon className="w-6 h-6 text-[#27619a]" />
              <p className="text-sm lg:text-base">Flexible Settings to tailor your experience.</p>
            </li>
          </ul>
          </div>

          <div className="mt-8 lg:mt-12">
            <Link
              href="/authentication"
              className="inline-block px-4  w-full md:w-[200px]  text-center lg:px-6 py-3 text-lg font-medium text-white  bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] hover:bg-[#21578e]  rounded-md shadow-lg  transition duration-300"
              // data-aos="zoom-in"
              // data-aos-duration="800"
              // data-aos-delay="600"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="relative flex flex-none w-full lg:w-[53%] items-center justify-center mt-3 lg:mt-0 order-2 lg:order-2"
        // data-aos="zoom-in"
        // data-aos-duration="800"
        // data-aos-delay="700"
      >
        <Image
          src="/hero2.png"
          alt="Hero Image"
          width={1200}
          height={800}
          layout="intrinsic"
          quality={100}
          objectFit="cover"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
