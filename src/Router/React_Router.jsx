// import react-router-dom
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Main from "../components/Main-Section/Main/Main";
import About from "../components/Main-Section/About/About";
import Data from "../components/Main-Section/Data/Data";

const React_Router = () => {

    // how to create path and path component in react router
    const router = createBrowserRouter([

        {
            //path declaration
            path: "/",
            //path component
            element: <Main />,
            //child path and path component declaration
            children: [
                {
                    //child path
                    path: "About",
                    //child path component
                    element: <About />
                },
                {
                    //child path
                    path: "Data",
                    //child path component
                    element: <Data />
                }
            ]
        }

    ]);

    return (
        <>
            {/* Call react-router */}
            <RouterProvider router={router} />
        </>
    );
};

export default React_Router;