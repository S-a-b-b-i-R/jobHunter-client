import Lottie from "lottie-react";
import animationData from "../../Lottie/loaderAnimation.json";
const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-4xl">Loading...</p>
            <Lottie animationData={animationData} />
        </div>
    );
};

export default Loading;
