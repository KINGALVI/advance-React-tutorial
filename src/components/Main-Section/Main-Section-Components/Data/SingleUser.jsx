import PropTypes from 'prop-types';

//***** Import necessary hooks from React Router for navigation and linking *****//
// Allows navigation between pages without reloading
import { Link, useNavigate } from 'react-router-dom';

const SingleUser = ({ SingelUserData }) => {

    const { id, name, username, email, address, phone, website, company } = SingelUserData;
    console.log(SingelUserData);

    //***** Navigate programmatically using `useNavigate()` *****//
    // Instead of using `<Link>`, `useNavigate()` allows navigation based on actions (e.g., button click).
    // This can be useful for dynamic redirects or conditional navigation.
    const Navigate = useNavigate();
    const ShowUserDetail = () => {
        //***** Navigate to a specific path dynamically using ID *****//
        // Takes the user to `/Data/{id}`, showing details for the selected user.
        Navigate(`/Data/${id}`);
    };

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
                            <th>Location</th>
                            <th>Phone Number</th>
                            <th>Website</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{id}</th>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{address.city}, {address.street}</td>
                            <td>{phone}</td>
                            <td>{website}</td>
                            <td>{company.name}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <br />
                        <tr>
                            <td colSpan="8" className="text-center">
                                {/***** Navigate using `<Link>` *****/}
                                {/* This redirects the user when clicked, preserving browser history */}
                                <Link to={`/Data/${id}`}>
                                    <button className="btn btn-primary">Show Detail By Link</button>
                                </Link>
                                <br /> <br />

                                {/***** Navigate using `useNavigate()` *****/}
                                {/* This programmatically moves to the user detail page when the button is clicked */}
                                <button className="btn btn-primary" onClick={ShowUserDetail}>Show Detail By Button</button>
                            </td>
                        </tr>
                        <br /><br />
                    </tfoot>
                </table>
            </div>
        </>
    )
}

SingleUser.propTypes = {
    SingelUserData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        address: PropTypes.shape({
            city: PropTypes.string.isRequired,
            street: PropTypes.string.isRequired
        }).isRequired,
        phone: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        company: PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}

export default SingleUser;