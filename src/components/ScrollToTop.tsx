'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const ScrollTo = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className={styles.launch}>
        <span className={styles.iconPosition}>
          {showTopBtn && (
            <Image
              src="/images/scroll.png"
              alt="launch"
              height={50}
              width={50}
              onClick={goToTop}
            />
          )}
        </span>
      </div>
    </>
  );
};
export default ScrollTo;