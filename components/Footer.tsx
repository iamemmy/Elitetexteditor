import React, { useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-[#003366] text-white py-7">
      <div className="container mx-auto px-6">
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <h4 className="text-3xl font-bold mb-2">Elite X</h4>
            <p className="text-gray-300">
              Empowering your productivity with cutting-edge tools and seamless
              integration.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-2">Company</h4>
            <div className="mt-4">
              <h5 className="text-lg mb-2">
                <a href="/about" className="hover:text-indigo-400">
                  About Us
                </a>
              </h5>
              <p className="text-gray-300">Mission and values.</p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-2">Contact Us</h4>
            <p className="text-gray-300 mb-4">
              <a href="tel:+1234567890" className="hover:text-indigo-400">
                +1 (234) 567-890
              </a>
              <br />
              <a
                href="mailto:contact@elitex.com"
                className="hover:text-indigo-400"
              >
                contact@elitex.com
              </a>
              <br />
              <a href="/contact" className="hover:text-indigo-400">
                Contact Form
              </a>
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-2">Quick Links</h4>
            <div className="flex flex-col md:flex-row md:justify-between mb-4">
              <a href="#" className="my-1 hover:text-indigo-400">
                Privacy Policy
              </a>
              <a href="#" className="my-1 hover:text-indigo-400">
                Terms of Service
              </a>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start">
              <a href="#" className="mx-2 text-2xl hover:text-indigo-400">
                <FaFacebookF />
              </a>
              <a href="#" className="mx-2 text-2xl hover:text-indigo-400">
                <FaTwitter />
              </a>
              <a href="#" className="mx-2 text-2xl hover:text-indigo-400">
                <FaLinkedinIn />
              </a>
              <a href="#" className="mx-2 text-2xl hover:text-indigo-400">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              &copy; 2024 Elite X. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
