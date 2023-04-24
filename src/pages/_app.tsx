import { useEffect, useState } from "react";
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
      console.log('show me timer')
        setLoading(true)
    });
    router.events.on("routeChangeComplete", () => {
      console.log('clear timeout')
        setLoading(false)
    });
  }, []);

  return (
    <div>
      <ToastContainer />
      <Header />
      <Navbar name={""} path={""} />
      {loading && <Loading />}
      <Component {...pageProps} />
    </div>
  );
}
