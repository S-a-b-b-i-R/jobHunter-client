import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    const navLinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/alljobs">All Jobs</NavLink>
            </li>
            <li>
                <NavLink to="/appliedjobs">Applied Jobs</NavLink>
            </li>
            <li>
                <NavLink to="/addjobs">Add A Job</NavLink>
            </li>
            <li>
                <NavLink to="/myjobs">My Jobs</NavLink>
            </li>
            <li>
                <NavLink to="/blogs">Blogs</NavLink>
            </li>
        </>
    );
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
                    >
                        {navLinks}
                    </ul>
                </div>
                <Link to="/">
                    <img
                        src="https://i.ibb.co/HCKn9dY/logo-transparent.png"
                        className="h-10"
                        alt=""
                    />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;
