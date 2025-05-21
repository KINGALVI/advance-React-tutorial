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
                            <li><a href="../Main-Section/About/About.jsx">About</a></li>
                            <li><a href="../Main-Section/Data/Data.jsx">Data</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">KING ALVI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>About</a></li>
                        <li><a>Data</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    <span className="pl-3"><a className="btn">Search</a></span>
                </div>
            </div>
        </>
    );
};

export default Header;