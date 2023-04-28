import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";

type routesType = {
  name: string;
  path: string;
};
const Navbar: React.FC<routesType> = ({ className }: any) => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Log In", path: "/signin" },
    { name: "Be a Writer", path: "/register" },
  ];

  return (
    <main>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.75,
        }}
      >
        <div className="text-right bg-[#212F3C] py-2">
          {routes.map(({ name, path }, index) => (
            <Link href={path} key={index} className="nav">
              <p className={name === "Be a Writer" ? `writer` : ""}>{name}</p>
            </Link>
          ))}
        </div>
      </motion.div>
    </main>
  );
};

export default Navbar;
