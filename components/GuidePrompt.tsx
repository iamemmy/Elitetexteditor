import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GuidePrompt: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
    });
  }, []);

  return (
    // bg-[#286db3]
    <section className=" bg-gradient-to-r from-[#4d8bca] to-[#3781cc] bg-[#2465a5] text-center py-20 px-4 lg:py-24 lg:px-8">
      <p
        className="text-white text-2xl lg:text-4xl mb-8 lg:mb-12"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Not sure how to use this Elite X Text Editor? <br />
        Our guide can help you get started in no time.
      </p>
      <Link
        href="/guide"
        className=" text-white px-6 py-3 font-semibold rounded-md bg-gradient-to-r from-[#003366] to-[#1e69b5] bg-[#2465a5] hover:bg-indigo-500 transition duration-300"
        data-aos="zoom-in"
      >
        I’d love to read it now
      </Link>
    </section>
  );
};

export default GuidePrompt;
