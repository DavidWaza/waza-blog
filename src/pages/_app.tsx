import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import Loading from "./loading";
import ScrollTo from "../components/ScrollToTop";
export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Enable navigation loader
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
        className="base-page-size"
      >
        <ToastContainer />
        <Navbar name={""} path={""} />
        {loading && <Loading />}
        <Component {...pageProps} />
        <ScrollTo />
      </motion.div>
    </AnimatePresence>
  );
}
