"use client";
import { register, signin } from "../../lib/api";
import Link from "next/link";
import styles from "../styles/signup.module.css";
import React, { useState } from "react";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { userState } from "../../lib/scripts";
import { motion } from "framer-motion";

const registerContent = {
  header: "be an Author!",
  linkurl: "/signin",
  linkText: "Already registered as an author?",
  linkUrlPlaceholder: "Login here",
  buttontext: "Register",
  policy: ` By submitting your email, you agree to our Terms of Use and
  Privacy Policy. Use of this website constitutes acceptance of our
  Privacy Policy.`,
};

const signinContent = {
  header: "Log in to yor Desk!",
  linkurl: "/register",
  linkText: "Not an author?",
  linkUrlPlaceholder: "Sign up here",
  buttontext: "Sign In",
  policy: "",
};

const AuthForm = ({ mode }: { mode: any }) => {
  const router = useRouter();
  const initial = { email: "", password: "", firstName: "", lastName: "" };

  const [formState, setFormState] = useState<userState>(initial);

  //   Regular Expression
  const regExp = new RegExp(/\S+@\S+\.\S+/).test(formState.email);

  const [firstMessage, setFirstMessage] = useState("");
  const [lastMessage, setLastMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  // HANDLE SELECT FUNCTION
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (mode === "register") {
      await register(setFormState);
    } else {
      await signin(setFormState);
    }
    setFormState(initial);

    if (!formState.firstName) {
      setFirstMessage("Please provide your first Name");
    } else {
      setFirstMessage("");
    }

    if (!formState.lastName) {
      setLastMessage("Please provide your last Name");
    } else {
      setLastMessage("");
    }

    if (!formState.email) {
      setEmailMessage("Please input your email");
    } else if (!regExp) {
      setEmailMessage("Wrong Email Format");
    } else {
      setEmailMessage("");
    }

    if (!formState.password) {
      setPasswordMessage("Please input valid password");
    } else if (formState.password.length < 6) {
      setPasswordMessage("Password should be more than 6 characters");
    } else {
      setPasswordMessage("");
    }

    if (
      formState.firstName &&
      formState.lastName &&
      formState.email &&
      formState.password &&
      formState.password.length >= 6 &&
      regExp
    ) {
      router.push("/");
      toast.success("Welcome Aboard!", { theme: "dark" });
    }

    if (
      !formState.firstName &&
      !formState.lastName &&
      !formState.email &&
      !formState.password
    ) {
      toast.error("Input fields cannot be blank", { theme: "dark" });
    } else if (!formState.firstName) {
      toast.error("Input First Name ", { theme: "dark" });
    } else if (!formState.lastName) {
      toast.error("Input Last Name", { theme: "dark" });
    } else if (!formState.email) {
      toast.error("Input Email", { theme: "dark" });
    } else if (!regExp) {
      toast.error("Wrong email format", { theme: "dark" });
    } else if (!formState.password) {
      toast.error("Input Password", { theme: "dark" });
    } else if (formState.password.length < 6) {
      toast.error("password should be more than 6 characters", {
        theme: "dark",
      });
    }
  };
  const content = mode == "register" ? registerContent : signinContent;

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
        <p>{content.header}</p>
        <form onSubmit={handleSubmit} autoComplete="off">
          {mode === "register" ? (
            <>
              <div className="my-[30px] mx-[0px]">
                <AiOutlineUser className={styles.icon} />
                <input
                  type="text"
                  name="firstName"
                  value={formState.firstName}
                  onChange={(e: any) =>
                    setFormState((s) => ({ ...s, firstName: e.target.value }))
                  }
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
                  value={formState.lastName}
                  onChange={(e: any) =>
                    setFormState((s) => ({ ...s, lastName: e.target.value }))
                  }
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
                  value={formState.email}
                  onChange={(e: any) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
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
                  value={formState.password}
                  onChange={(e: any) =>
                    setFormState((s) => ({ ...s, password: e.target.value }))
                  }
                  placeholder="Password"
                  className="py-3 px-10 w-full inline-block rounded"
                />
                {passwordMessage && (
                  <p className="text-red-600">{passwordMessage}</p>
                )}
              </div>

              <div className={styles.authorAlready}>
                <p>
                  {content.linkText}{" "}
                  <span>
                    <Link href={content.linkurl}>
                      {content.linkUrlPlaceholder}
                    </Link>
                  </span>
                </p>
              </div>
              <div className={styles.button}>
                <button type="submit">{content.buttontext}</button>
              </div>
              <div className={styles.policy}>
                <p>{mode === "register" ? content.policy : ""}</p>
              </div>
            </>
          ) : (
            <>
              <div className="my-[30px] mx-[0px]">
                <AiOutlineMail className={styles.icon} />
                <input
                  type="text"
                  name="email"
                  value={formState.email}
                  onChange={(e: any) =>
                    setFormState((s) => ({ ...s, email: e.target.value }))
                  }
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
                  value={formState.password}
                  onChange={(e: any) =>
                    setFormState((s) => ({ ...s, password: e.target.value }))
                  }
                  placeholder="Password"
                  className="py-3 px-10 w-full inline-block rounded"
                />
                {passwordMessage && (
                  <p className="text-red-600">{passwordMessage}</p>
                )}
              </div>

              <div className={styles.authorAlready}>
                <p>
                  {content.linkText}{" "}
                  <span>
                    <Link href={content.linkurl}>
                      {content.linkUrlPlaceholder}
                    </Link>
                  </span>
                </p>
              </div>
              <div className={styles.button}>
                <button type="submit">{content.buttontext}</button>
              </div>
              <div className={styles.policy}>
                <p>{mode === "register" ? content.policy : ""}</p>
              </div>
            </>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default AuthForm;
