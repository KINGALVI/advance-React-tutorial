import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleUser = ({ SingelUserData }) => {

    const { id, name, username, email, address, phone, website, company } = SingelUserData;
    console.log(SingelUserData);

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>location</th>
                            <th>Phone Number</th>
                            <th>Website</th>
                            <th>company</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{id}</th>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{address.city} , {address.street}</td>
                            <td>{phone}</td>
                            <td>{website}</td>
                            <td>{company.name}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <br />
                        <tr>
                            <td colSpan="8" className="text-center">
                                <Link to={`/Data/${id}`}>
                                    <button className="btn btn-primary">Show Detail</button>
                                </Link>
                            </td>
                        </tr>
                        <br /><br />
                    </tfoot>
                </table>
            </div>
        </>
    );
};

SingleUser.propTypes = {

};

export default SingleUser;