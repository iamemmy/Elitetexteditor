import "@/styles/globals.css";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import { Provider } from "react-redux";  // Import Provider
import store from '../ReduxStore/store';  // Import your Redux store

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Provider store={store}>  {/* Wrap the component in Provider */}
      <Component {...pageProps} />
    </Provider>
  );
}
