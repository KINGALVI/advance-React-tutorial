//***** Import necessary hooks from React Router for managing layout, navigation, and route changes *****//
// 'Outlet' Provides a placeholder where child routes will be rendered dynamically.
// 'useLocation' Retrieves the current URL path, useful for handling route-based logic.
// 'useNavigation' Tracks navigation state, allowing for loaders during page transitions.
import { Outlet, useLocation, useNavigation } from "react-router-dom";

import Header from "../../Header-Section/Header";
import Footer from "../../Footer-Section/Footer";

const Main = () => {

    //***** Checking the fetch data condition using `useNavigation()` *****//
    // `useNavigation()` helps monitor the navigation state in React Router.
    // It can detect whether a page is currently being loaded, making it useful for showing loaders.
    const Navigation = useNavigation();
    console.log(Navigation);

    //***** Managing path-related functionality using `useLocation()` *****//
    // `useLocation()` provides details about the current URL.
    // If the app needs to perform actions based on route changes, this hook helps track the active path.
    const Location = useLocation();
    console.log(Location);

    return (
        <div>
            
            <Header />

            {
                /* if */
                    /* Display a loading spinner while the page is fetching data */
                    /* `Navigation.state === "loading"` checks if React Router is in a loading state */
                    /* If loading, a spinner appears instead of content */
                   Navigation.state === "loading" ?
                      <center>
                          <br /><br /><br /><br /><br />
                          <span className="loading loading-spinner loading-xl"></span>
                          <br /><br /><br /><br /><br />
                      </center>

                /* else */
                    /* When the path changes, dynamic content will appear in `Outlet` */
                    /* The `Outlet` component is required to render child components based on the current route */
                    :
                    <Outlet />
            }

            <Footer />

        </div>
    )
}

export default Main;