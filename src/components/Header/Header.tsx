import styles from "../../styles/Home.module.css";
const Header = () => {
  return (
    <>
      <main className='header-container'>
        <div className="xl:container xl:mx-auto">
        <p className={`font-normal text-3xl ${styles.header}`}>
          David {`Waza's`} Blog
        </p>
        </div> 
      </main>
    </>
  );
};

export default Header;
