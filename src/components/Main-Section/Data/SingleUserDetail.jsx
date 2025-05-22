import PropTypes from 'prop-types';
import { Link, useLoaderData } from 'react-router-dom';

const SingleUserDetail = () => {

    const SingleUserData = useLoaderData();
    console.log(SingleUserData)
    const { name, phone, email } = SingleUserData

    return (
        <>
            <center>
                <br />
                <h1 className='text-7xl'> User Name : {name}</h1>
                <br />
                <h2 className='text-4xl'> User Phone Number : {phone}</h2>
                <br />
                <h2 className='text-4xl'> User Email : {email}</h2>
                <br />
            </center>
        </>
    );
};

SingleUserDetail.propTypes = {

};

export default SingleUserDetail;