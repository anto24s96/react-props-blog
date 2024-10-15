import styles from "./Card.module.css";
import newPostImg from "../../assets/newPost.jpg";
import Button from "./Button";

//Mappo i colori in base al nome del tag
const tagColor = {
    html: "#E04C26",
    css: "#264DDF",
    js: "#EBD81D",
    php: "#7479AF",
};

const Card = ({ title, content, tags, image }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img
                    src={image || newPostImg}
                    alt={title}
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{content}</p>
                <div>
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className={styles.tag}
                            style={{
                                backgroundColor: tagColor[tag] || "#ccc",
                            }}
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
                <Button />
            </div>
        </div>
    );
};

export default Card;
