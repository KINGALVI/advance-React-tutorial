import PropTypes from 'prop-types';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const SingleUserDetail = () => {

    const SingleUserData = useLoaderData();
    console.log(SingleUserData)
    const { name, phone, email } = SingleUserData;

    //getting userID form dynamic path by useing useParams() method .
    const { SingleUserDetail } = useParams()
    console.log(SingleUserDetail)

    // if we wanna go back one page back in react router without using Link we can use this different useNavigate method .
    const Navigate = useNavigate()
    const ShowUserList = () => {
        // -1 to go one path or page back .
        Navigate(-1)
    }

    return (
        <>
            <center>
                <h1 className='text-7xl' >User ID : {SingleUserDetail}</h1>
                <br />
                <h1 className='text-7xl'> User Name : {name}</h1>
                <br />
                <h2 className='text-4xl'> User Phone Number : {phone}</h2>
                <br />
                <h2 className='text-4xl'> User Email : {email}</h2>
                <br />
                <button className="btn btn-primary" onClick={ShowUserList}>User List</button>
                <br /><br />
            </center>
        </>
    );
};

SingleUserDetail.propTypes = {

};

export default SingleUserDetail;