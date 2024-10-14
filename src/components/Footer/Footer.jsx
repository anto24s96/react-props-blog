import styles from "./Footer.module.css";
import stylesApp from "../../App.module.css";

const Footer = () => {
    return (
        <footer className={stylesApp.footer}>
            <p className={styles.content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                repudiandae aliquid temporibus laborum nobis sunt voluptate
                blanditiis rem magni officia.
            </p>
        </footer>
    );
};

export default Footer;
