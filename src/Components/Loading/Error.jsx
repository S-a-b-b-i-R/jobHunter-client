import Lottie from "lottie-react";
import animationData from "../../Lottie/404.json";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="max-h-screen flex flex-col justify-center items-center gap-8 p-5">
            <Lottie style={{ height: 650 }} animationData={animationData} />
            <h1>Requested Page was not found</h1>
            <Link
                to="/"
                className="btn bg-mainCol text-white normal-case hover:bg-mainCol hover:text-white hover:scale-110"
            >
                Go Back
            </Link>
        </div>
    );
};

export default Error;
