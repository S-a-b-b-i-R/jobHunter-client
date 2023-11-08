import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useEffect } from "react";

const Root = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/") {
            document.title = "JobHunter";
        } else {
            document.title = `JobHunter | ${location.pathname.replace(
                "/",
                ""
            )}`;
        }
        if (location.state) {
            document.title = location.state;
        }
    }, [location.pathname, location.state]);
    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-16 lg:px-24">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;
