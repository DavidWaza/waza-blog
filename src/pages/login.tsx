import React, { useState, useEffect } from "react";
import styles from "../styles/signup.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import { usersProps, stateProps } from "../../lib/scripts";
import Home from "../../src/pages/index";
import { motion } from "framer-motion";

const Login: React.FC<usersProps> = ({ name, email, password }) => {
  const router = useRouter();

  const admins = [
    {
      name: "david",
      email: "wes@gmail.com",
      password: "wes12345",
    },
    {
      name: "Gad",
      email: "gad@gmail.com",
      password: "gadjacobs",
    },
    {
      name: "sosoa",
      email: "soso@gmail.com",
      password: "sosolay",
    },
    {
      name: "sandra",
      email: "sandra@gmail.com",
      password: "sandy4life",
    },
  ];
  const [users, setUsers] = useState<stateProps>({
    email: "",
    password: "",
  });
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault;
  };
  const login = (e: any) => {
    e.preventDefault();
    let loggedInUser;
    if (users.email && users.password) {
      loggedInUser = admins.filter(
        (admin) =>
          users.email === admin.email && users.password === admin.password
      );
      if (loggedInUser.length == 1) {
        setLoggedInUser(loggedInUser[0]);
        setIsSignedIn(true);
      } else {
        setMessage("error logging in");
        router.push("/signup");
        toast.error("Not a User", { theme: "dark" });
      }
    } else {
      setMessage("Fields cannot be empty");
      toast.error("Fields are empty!", { theme: "dark" });
    }
  };

  useEffect(() => {
    if (loggedInUser == 1) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
    >
      {isSignedIn ? (
        <Home allPostsData={undefined} />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <p>Log in to your Desk!</p>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="my-[30px] mx-[0px]">
                <AiOutlineMail className={styles.icon} />
                <input
                  type="text"
                  name="email"
                  value={users.email}
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setUsers({ ...users, email: e.currentTarget.value })
                  }
                  placeholder="Email"
                  className="py-3 px-10 w-full inline-block rounded"
                />
                {message && <p className="text-red-600">{message}</p>}
              </div>

              <div className="my-[30px] mx-[0px]">
                <RiLockPasswordLine className={styles.icon} />
                <input
                  type="password"
                  name="password"
                  value={users.password}
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setUsers({ ...users, password: e.currentTarget.value })
                  }
                  placeholder="Password"
                  className="py-3 px-10 w-full inline-block rounded"
                />
                {message && <p className="text-red-600">{message}</p>}
              </div>

              <div className={styles.authorAlready}>
                <p>
                  Not an author?{" "}
                  <span>
                    <Link href="/signup">Sign up here</Link>
                  </span>
                </p>
              </div>
              <div className={styles.button}>
                <button onClick={(e) => login(e)}>Log in</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Login;
