import PropTypes from 'prop-types';

//***** Import necessary hooks from React Router for dynamic data and navigation *****//
// 'useLoaderData' Retrieves preloaded data before the component renders, optimizing performance.
// 'useNavigate' Enables programmatic navigation, allowing movement between routes without using `<Link>`.
// 'useParams' Extracts dynamic URL parameters, useful for handling routes like `/Data/:id`.
import {useLoaderData, useNavigate, useParams} from 'react-router-dom';

const SingleUserDetail = () => {

    //***** Fetch user details using `useLoaderData()` *****//
    // This retrieves the data loaded from React Router's `loader` function.
    const SingleUserData = useLoaderData();
    console.log(SingleUserData);
    const { name, phone, email } = SingleUserData;

    //***** Getting userID from dynamic path using `useParams()` *****//
    // `useParams()` extracts values directly from the URL.
    // If the user navigates to `/Data/5`, `useParams()` retrieves `{ SingleUserDetail: "5" }`.
    const { SingleUserDetail } = useParams();
    console.log(SingleUserDetail);

    //***** Using `useNavigate()` for programmatic navigation *****//
    // This allows us to go back one page without using `<Link>`.
    const Navigate = useNavigate();
    const ShowUserList = () => {
        //***** `Navigate(-1)` moves the user one step back in browser path *****//
        Navigate(-1);
    };

    return (
        <>
            <center>
                <h1 className='text-7xl'>User ID: {SingleUserDetail}</h1>
                <br />
                <h1 className='text-7xl'>User Name: {name}</h1>
                <br />
                <h2 className='text-4xl'>User Phone Number: {phone}</h2>
                <br />
                <h2 className='text-4xl'>User Email: {email}</h2>
                <br />
                <button className="btn btn-primary" onClick={ShowUserList}>User List</button>
                <br /><br />
            </center>
        </>
    )
}

SingleUserDetail.propTypes = {
    SingleUserData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }).isRequired
}

export default SingleUserDetail;