import Lottie from "lottie-react";
import animationData from "../../Lottie/loaderAnimation.json";
const Loading = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <p className="text-4xl">Loading...</p>
            <Lottie animationData={animationData} />
        </div>
    );
};

export default Loading;
