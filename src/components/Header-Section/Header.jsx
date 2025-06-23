import "./Header.css"
import PropTypes from "prop-types";

//***** Import NavLink for Navigation *****//
// NavLink is used instead of Link because it provides an "active state" feature.
// When a user clicks on a NavLink, its style can change dynamically based on the active route.
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="navbar bg-black shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {/***** NavLink Usage Explanation *****/}
                            {/* NavLink dynamically changes styles when the user navigates to a specific route. */}
                            {/* If we provide custom styles in CSS, NavLink updates them when active. */}
                            <li><NavLink to="/About">About</NavLink></li>
                            <li><NavLink to="/Data">Data</NavLink></li>
                            <li><NavLink to="/From">From</NavLink></li>
                            <li><NavLink to="/ContexAPI">Contex API</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">KING ALVI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/***** NavLink Usage Explanation *****/}
                        {/* NavLink dynamically changes styles when the user navigates to a specific route. */}
                        {/* If we provide custom styles in CSS, NavLink updates them when active. */}
                        <li><NavLink to="/About">About</NavLink></li>
                        <li><NavLink to="/Data">Data</NavLink></li>
                        <li><NavLink to="/From">From</NavLink></li>
                        <li><NavLink to="/ContexAPI">Contex API</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered join-item w-52" />
                    <button className="btn btn-primary join-item">Search</button>
                </div>
            </div>
        </>
    )
}

Header.propTypes = {
    menuLinks: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired
}

export default Header;