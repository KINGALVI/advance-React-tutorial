//***** Import `useLoaderData` from React Router to fetch preloaded data efficiently *****//
import { useLoaderData } from "react-router-dom";
import SingleUser from "./SingleUser";

const AllUser = () => {

    //***** Fetch JSON or API data using `useLoaderData()` *****//
    // `useLoaderData()` retrieves preloaded data set in the route configuration.
    // This eliminates the need for an additional API call and improves performance.
    const AllUserData = useLoaderData();



    return (
        <>
            {
                AllUserData.map(SingelUserData => <SingleUser key={SingelUserData.id} SingelUserData={SingelUserData} />)
            }
        </>
    )
}

export default AllUser;