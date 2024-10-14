import styles from "./button.module.css";

const Button = () => {
    return (
        <button className={styles.myButton}>
            <span className={styles.text}>LEGGI DI PIU</span>
        </button>
    );
};

export default Button;
