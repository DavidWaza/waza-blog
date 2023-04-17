import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Navbar name={""} path={""} />
      <Component {...pageProps} />
    </div>
  );
}
