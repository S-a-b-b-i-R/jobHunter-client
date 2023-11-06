import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-16 lg:px-24">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Root;
