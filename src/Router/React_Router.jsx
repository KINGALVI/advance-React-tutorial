//***** Import React Router Functions *****//
// We need to import `createBrowserRouter` to define routes
// and `RouterProvider` to apply them globally in our app.
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PropTypes from "prop-types";
import Main from "../components/Main-Section/MainSection";
import About from "../components/Main-Section/Main-Section-Components/About/About";
import AllUser from "../components/Main-Section/Main-Section-Components/Data/AllUser";
import SingleUserDetail from "../components/Main-Section/Main-Section-Components/Data/SingleUserDetail";
import ErrorHandel from "../components/HandelError/ErrorHandel";
import From from "../components/Main-Section/Main-Section-Components/From/From";

const React_Router = () => {

    //***** Create Router Configuration Using `createBrowserRouter` *****//
    // React Router needs a structured list of paths and components.
    // The `createBrowserRouter` function helps define routes inside an array.
    const router = createBrowserRouter([
        {
            //***** Declare Base Path (`"/"`) *****//
            // This is the homepage route, meaning when users visit `/`, they see the `Main` component.
            path: "/",

            //***** Define the Main Component for Root Path *****//
            // The `element:` key assigns the `Main` component to this route.
            element: <Main />,

            //***** Handle Error Pages (`errorElement`) *****//
            // If a user navigates to an invalid URL, `ErrorHandel` component will be shown.
            errorElement: <ErrorHandel />,

            //***** Define Child Routes Inside `children` *****//
            // This allows nested routing so child components can be displayed dynamically.
            children: [
                {
                    //***** Define Child Path (`"/About"`) *****//
                    // When users navigate to `/About`, the `About` component will be displayed.
                    path: "About",

                    //***** Assign Component to Child Route *****//
                    // The `element:` key specifies which component should render at this path.
                    element: <About />
                },
                {
                    //***** Define Child Path (`"/Data"`) *****//
                    // When users visit `/Data`, the `AllUser` component will be loaded.
                    path: "Data",

                    //***** Load JSON or API Data (`loader`) *****//
                    // The `loader` function calls an external API (`jsonplaceholder.typicode.com/users`)
                    // React Router automatically fetches this data before rendering the `AllUser` component.
                    loader: () => fetch('https://jsonplaceholder.typicode.com/users'),

                    //***** Assign Component to Display API Data *****//
                    element: <AllUser />
                },

                //***** Define Dynamic Route Using URL Parameters (`"/Data/:SingleUserDetail"`) *****//
                // This allows the app to handle **dynamic data** based on the URL.
                {
                    //***** Declare Dynamic Path *****//
                    // The `:SingleUserDetail` in the URL means this route expects a **variable** value (e.g., `/Data/5`).
                    path: "/Data/:SingleUserDetail",

                    //***** Load Dynamic API Data (`loader`) *****//
                    // The `params.SingleUserDetail` extracts the value from the URL dynamically.
                    // Example: If the user visits `/Data/5`, it fetches data for user ID 5.
                    loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.SingleUserDetail}`),

                    //***** Assign Component to Show Dynamic User Details *****//
                    element: <SingleUserDetail />
                },

                {
                    path: '/From',
                    element: <From />
                }
            ]
        }
    ])

    return (
        <>
            {/***** Apply Router Using `RouterProvider` *****/}
            {/* This ensures React Router works globally in the application */}
            <RouterProvider router={router} />
        </>
    )
}


React_Router.propTypes = {
    userData: PropTypes.object,
    authStatus: PropTypes.bool
}


export default React_Router;