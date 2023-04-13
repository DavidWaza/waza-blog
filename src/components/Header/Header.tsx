import styles from "../../styles/Home.module.css";
const Header = () => {
  return (
    <>
      <main className={`bg-[#faebd7] text-center text-black py-20`}>
        <p className={`font-normal text-3xl ${styles.header}`}>
          David {`Waza's`} Blog
        </p>
      </main>
    </>
  );
};

export default Header;
