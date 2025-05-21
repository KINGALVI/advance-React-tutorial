import { Outlet } from "react-router-dom";
import Header from "../../Header-Section/Header";
import Footer from "../../Footer/Footer";

const Main = () => {
    return (
        <div>
            <Header />
            {/* the dynamic change will apper here when the path change . we have to use react router outlet for that . */}
            <Outlet />
            <Footer />
        </div>
    );
}

export default Main;