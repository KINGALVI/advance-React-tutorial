import PropTypes from "prop-types";

//***** Import necessary hooks from React Router for handling errors and navigation *****//
// 'Link' Used to create navigable links without refreshing the page. 
// 'useRouteError' Captures errors that occur during route transitions and displays meaningful messages.
import { Link, useRouteError } from "react-router-dom";

const ErrorHandel = () => {

    //***** Creating a user-friendly error component using `useRouteError()` *****//
    // `useRouteError()` captures errors thrown by React Router during navigation.
    // If a route fails (e.g., a page does not exist), this function helps display custom error messages.
    const Error = useRouteError();
    console.log(Error);

    return (
        <>
            {/***** Displaying a user-friendly error message *****/}
            {/* Shows a large heading indicating that the requested page was not found */}
            <h1 className="text-5xl text-center">SORRY PAGE NOT FOUND !!</h1>
            <br />

            {/***** Dynamically displaying error information *****/}
            {/* If `statusText` or `message` exists, it will show as an error description */}
            <p className="text-3xl text-center"><b><i>{Error.statusText || Error.message}</i></b></p>
            <br />

            {
                /***** Handling a 404-specific error *****/
                /* If the error code is `404`, it further explains that the page does not exist */
                Error.status === 404 &&
                <p className="text-3xl text-center"><b><i>{Error.error.message}</i></b></p>
            }
            <br />

            {/***** Providing a button to navigate back to the homepage *****/}
            {/* Uses React Router's `Link` component to redirect the user to `/` */}
            <center><Link className="btn btn-primary" to='/'>HOME PAGE</Link></center>
        </>
    )
}

ErrorHandel.propTypes = {
    customErrorMessage: PropTypes.string,
    statusCode: PropTypes.number
}

export default ErrorHandel;