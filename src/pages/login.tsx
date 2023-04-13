import React, { useState } from "react";
import styles from "../styles/signup.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

export interface usersProps {
  name: string;
  email: string;
  password: any;
}

// export interface inputProps {
//   type: string;
//   name: string;
//   value: {};
//   onChange: {};
//   placeholder: string;
//   className: string;
// }

const Login: React.FC<usersProps> = ({ name, email, password }) => {
  const admins = [
    {
      name: "david",
      email: "wes@gmail.com",
      password: "wes12345",
      isValid: true,
    },
    {
      name: "Gad",
      email: "gad@gmail.com",
      password: "gadjacobs",
      isValid: true,
    },
    {
      name: "sosoa",
      email: "soso@gmail.com",
      password: "sosolay",
      isValid: true,
    },
  ];

  const [users, setUsers] = useState({
    email: "",
    password: "",
  });
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [message, setMessage] = useState("");

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
      }
      setMessage("error logging in");
    }
    setMessage("Fields cannot be empty");
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <p>Be an Author!</p>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="my-[30px] mx-[0px]">
              <AiOutlineMail className={styles.icon} />
              <input
                type="text"
                name="email"
                value={users.email}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setUsers({ ...users, email: e.target.value })
                }
                placeholder="Email"
                className="py-3 px-10 w-full inline-block rounded"
              />
              {message && <p>{message}</p>}
            </div>

            <div className="my-[30px] mx-[0px]">
              <RiLockPasswordLine className={styles.icon} />
              <input
                type="password"
                name="password"
                value={users.password}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setUsers({ ...users, password: e.target.value })
                }
                placeholder="Password"
                className="py-3 px-10 w-full inline-block rounded"
              />
              {message && <p>{message}</p>}
            </div>

            <div className={styles.authorAlready}>
              <p>
                Already registered as an author?{" "}
                <span>
                  <Link href="/login">Login here</Link>
                </span>
              </p>
            </div>
            <div className={styles.button}>
              <button onClick={(e) => login(e)}>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
