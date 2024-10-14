import styles from "./Header.module.css";
import stylesApp from "../../App.module.css";

const Header = () => {
    return (
        <header className={stylesApp.header}>
            <h1 className={styles.title}>MY BLOG</h1>
        </header>
    );
};

export default Header;
