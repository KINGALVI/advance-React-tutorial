import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const React_Router = () => {

    const router = createBrowserRouter([

        {
            path: "/",
            element: <h1 className="text-9xl flex justify-center">HOME PAGE</h1>
        }

    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default React_Router;