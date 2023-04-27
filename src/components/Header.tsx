import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

const Header = () => {
 
  return (
    <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 0.75,
    }}
  >
      <main className='header-container'>
        <div className="xl:container xl:mx-auto">
        <p className={`font-normal text-3xl ${styles.header}`}>
          David {`Waza's`} Blog
        </p>
        </div> 
      </main>
    </motion.div>
  );
};

export default Header;
