import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import Loading from "./loading";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      console.log("show me timer");
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      console.log("clear timeout");
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
          },
          animateState: {
            opacity: 1,
          },
          exitState: {
          },
        }}
        className="base-page-size"
      >
        <ToastContainer />
        <Header />
        <Navbar name={""} path={""} />
        {loading && <Loading />}
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
