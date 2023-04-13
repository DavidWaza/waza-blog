import Link from "next/link";
import styles from "../../styles/Home.module.css";

type routesType = {
  name: string;
  path: string;
};
const Navbar: React.FC<routesType> = ({ className }: any) => {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Log In", path: "/login" },
    { name: "Be a Writer", path: "/signup" },
  ];

  return (
    <main>
      <div className="text-center bg-[#212F3C] py-5">
        {routes.map(({ name, path }, index) => (
          <Link href={path} key={index} className="nav">
            <p className={name === "Be a Writer" ? `writer` : ""}>{name}</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Navbar;
