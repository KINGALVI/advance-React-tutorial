import { Link, useRouteError } from "react-router-dom";

const ErrorHandel = () => {

    // if we wanna create a user friendly error component or page with react router we can do this by useing "useRouterError()" method . 
    const Error = useRouteError();
    console.log(Error);

    return (
        <>
            {/* displaying a user friendly Error information . */}

            <h1 className="text-5xl text-center">SORRY PAGE NOT FOUND !!</h1>
            <br />
            <p className="text-3xl text-center"><b><i>{Error.statusText || Error.message}</i></b></p>
            <br />
            {
                Error.status === 404 &&
                <p className="text-3xl text-center"><b><i>{Error.error.message}</i></b></p>
            }
            <br />
            <center><Link className="btn btn-primary" to='/'>HOME PAGE</Link></center>
        </>
    );
};

export default ErrorHandel;