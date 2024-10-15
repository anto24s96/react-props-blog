import Card from "./Card";
import stylesApp from "../../App.module.css";
import data from "../../data/cardsData.js";
import stylesCard from "../Main/Card.module.css";

const cardContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
};

const tagColor = {
    html: "#E04C26",
    css: "#264DDF",
    js: "#EBD81D",
    php: "#7479AF",
};

const Main = () => {
    const distinctTags = [...new Set(data.flatMap((p) => p.tags))];

    return (
        <main className={stylesApp.main}>
            <div className={stylesApp.tagsContainer}>
                <h4 style={{ marginRight: 10 }}>Tag Distinti:</h4>
                <div>
                    {distinctTags.map((tag, index) => (
                        <span
                            key={index}
                            className={stylesCard.tag}
                            style={{
                                backgroundColor: tagColor[tag] || "#ccc",
                                marginBottom: 0,
                            }}
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            <div style={cardContainer}>
                {data.map(
                    (p) =>
                        p.published === true && (
                            <Card
                                key={p.id}
                                title={p.title}
                                content={p.content}
                                tags={p.tags}
                                published={p.published}
                                image={p.image}
                            />
                        )
                )}
            </div>
        </main>
    );
};

export default Main;
