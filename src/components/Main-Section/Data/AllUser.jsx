import { useLoaderData } from "react-router-dom";
import SingleUser from "./SingleUser";

const AllUser = () => {

    //how to call or declare the json or API data in react rorter .
    const AllUserData = useLoaderData()

    return (
        <>
            {
                AllUserData.map(SingelUserData => <SingleUser key={SingelUserData.id} SingelUserData={SingelUserData} />)
            }
        </>
    );
};

export default AllUser;