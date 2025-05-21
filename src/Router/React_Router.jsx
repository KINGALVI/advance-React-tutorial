// import react-router-dom
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Main from "../components/Main-Section/Main/Main";
import About from "../components/Main-Section/About/About";
import AllUser from "../components/Main-Section/Data/AllUser";

const React_Router = () => {

    // how to create path and path component in react router . for that we havet to use react router createBrowserRouter function .
    const router = createBrowserRouter([

        {
            //the path declaration . for that we have to use path react router keywords .
            path: "/",
            //the path component . for that we have to use element react router keywords .
            element: <Main />,
            // the child path and path component declaration . sometimes we need some dynamic change in website without reaload the the website , for that we have to use react router children keywords .
            children: [
                {
                    // the child path
                    path: "About",
                    // the child path component
                    element: <About />
                },
                {
                    // the child path
                    path: "Data",
                    // how to load json or API data in react router .
                    loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
                    // the child path component
                    element: <AllUser />
                }
            ]
        }

    ]);

    return (
        <>
            {/* Call react-router using RouterProvider . */}
            <RouterProvider router={router} />
        </>
    );
};

export default React_Router;