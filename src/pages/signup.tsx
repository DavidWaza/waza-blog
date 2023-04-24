"use client";
import Link from "next/link";
import styles from "../styles/signup.module.css";
import React, { useState } from "react";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signupProps, userState } from "../../lib/scripts";
import { motion } from "framer-motion";

const Signup: React.FC<signupProps> = () => {
  const router = useRouter();
  const [state, setState] = useState<userState>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [firstMessage, setFirstMessage] = useState("");
  const [lastMessage, setLastMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const regExp = new RegExp(/\S+@\S+\.\S+/).test(state.email);

  // HANDLE CHANGE FUNCTION
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  // HANDLE SELECT FUNCTION
  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!state.firstName) {
      setFirstMessage("Please provide your first Name");
    } else {
      setFirstMessage("");
    }

    if (!state.lastName) {
      setLastMessage("Please provide your last Name");
    } else {
      setLastMessage("");
    }

    if (!state.email) {
      setEmailMessage("Please input your email");
    } else if (!regExp) {
      setEmailMessage("Wrong Email Format");
    } else {
      setEmailMessage("");
    }

    if (!state.password) {
      setPasswordMessage("Please input valid password");
    } else if (state.password.length < 6) {
      setPasswordMessage("Password should be more than 6 characters");
    } else {
      setPasswordMessage("");
    }

    if (
      state.firstName &&
      state.lastName &&
      state.email &&
      state.password &&
      state.password.length >= 6 &&
      regExp
    ) {
      router.push("/");
      toast.success("Welcome Aboard!", { theme: "dark" });
    }

    if (
      !state.firstName &&
      !state.lastName &&
      !state.email &&
      !state.password
    ) {
      toast.error("Input fields cannot be blank", { theme: "dark" });
    } else if (!state.firstName) {
      toast.error("Input First Name ", { theme: "dark" });
    } else if (!state.lastName) {
      toast.error("Input Last Name", { theme: "dark" });
    } else if (!state.email) {
      toast.error("Input Email", { theme: "dark" });
    } else if (!regExp) {
      toast.error("Wrong email format", { theme: "dark" });
    } else if (!state.password) {
      toast.error("Input Password", { theme: "dark" });
    } else if (state.password.length < 6) {
      toast.error("password should be more than 6 characters", {
        theme: "dark",
      });
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
      className={styles.wrapper}
    >
      <div className={styles.container}>
        <p>Be an Author!</p>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="my-[30px] mx-[0px]">
            <AiOutlineUser className={styles.icon} />
            <input
              type="text"
              name="firstName"
              value={state.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="py-3 px-10 w-full inline-block rounded"
            />
            {firstMessage && <p className="text-red-600">{firstMessage}</p>}
          </div>
          <div className="my-[30px] mx-[0px]">
            <AiOutlineUser className={styles.icon} />
            <input
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="py-3 px-10 w-full inline-block rounded"
            />
            {lastMessage && <p className="text-red-600">{lastMessage}</p>}
          </div>
          <div className="my-[30px] mx-[0px]">
            <AiOutlineMail className={styles.icon} />
            <input
              type="text"
              name="email"
              value={state.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="py-3 px-10 w-full inline-block rounded"
            />
            {emailMessage && <p className="text-red-600">{emailMessage}</p>}
          </div>

          <div className="my-[30px] mx-[0px]">
            <RiLockPasswordLine className={styles.icon} />
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="py-3 px-10 w-full inline-block rounded"
            />
            {passwordMessage && (
              <p className="text-red-600">{passwordMessage}</p>
            )}
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
            <button type="submit">Sign Up</button>
          </div>
          <div className={styles.policy}>
            <p>
              By submitting your email, you agree to our Terms of Use and
              Privacy Policy. Use of this website constitutes acceptance of our
              Privacy Policy.
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Signup;
