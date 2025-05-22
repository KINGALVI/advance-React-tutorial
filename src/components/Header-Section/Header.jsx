import "./Header.css"
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
                            {/* it is a advance navlink . when we click the navlink , the navlink style will change . ( if we give the navlink some style by useing css . ) */}
                            <li><NavLink to="/About">About</NavLink></li>
                            <li><NavLink to="/Data">Data</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">KING ALVI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/About">About</NavLink></li>
                        <li><NavLink to="/Data">Data</NavLink></li>
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
    );
};

export default Header;