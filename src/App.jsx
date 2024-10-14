import stylesApp from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
    return (
        <div className={stylesApp.container}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;
