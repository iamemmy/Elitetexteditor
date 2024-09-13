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
    <section className="bg-indigo-300 text-center py-20 lg:py-10 px-4">
      <p
        className="text-white text-2xl lg:text-4xl mb-[50px]"
        data-aos="fade-up"
      >
        Not sure how to use this Elite X Text Editor? <br />
        Our guide can help you get started in no time.
      </p>
      <a
        href="/guide"
        className="bg-indigo-600 text-white px-4 py-4 rounded-md hover:bg-blue-700 transition duration-300"
        data-aos="zoom-in"
      >
        I’d love to read it now
      </a>
    </section>
  );
};

export default GuidePrompt;
