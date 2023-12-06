import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useEffect } from "react";
import Footer from "../Components/Footer";

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
        <div className="space-y-20">
            <div className="max-w-screen-xl mx-auto px-2 md:px-16 lg:px-24">
                <Navbar />
            </div>
            <div className="min-h-[calc(100vh-344px-72px-160px)] max-w-screen-xl mx-auto px-2 md:px-16 lg:px-24 ">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
