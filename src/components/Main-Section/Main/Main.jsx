import { Outlet } from "react-router-dom";
import Header from "../../Header-Section/Header";
import Footer from "../../Footer/Footer";

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Main;