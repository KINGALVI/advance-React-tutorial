import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../../Header-Section/Header";
import Footer from "../../Footer-Section/Footer";

const Main = () => {

    // to see the fetch data condition we can use "useNavigation()" method .
    const Navigation = useNavigation()
    console.log(Navigation)

    // if we do some functionality regarding path , we can do thish using "useLocation()" method .
    const Location = useLocation();
    console.log(Location)

    return (
        <div>
            <Header />

            {

        /* if */  Navigation.state === "loading" ?
                    <center>
                        <br /><br /><br /><br /><br />
                        <span className="loading loading-spinner loading-xl"></span>
                        <br /><br /><br /><br /><br />
                    </center>
        /* else */ :
                    <Outlet /*the dynamic change will apper here when the path change . we have to use react router outlet for that .*/ />

            }

            <Footer />
        </div>
    );
}

export default Main;