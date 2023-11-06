const Banner = () => {
    return (
        <div>
            <div className="flex items-center">
                <div className="w-1/2">
                    <h1 className="text-left text-6xl font-extrabold">
                        You next <br />{" "}
                        <span className="text-mainCol">Dream Job</span> <br />
                        is a few steps away
                    </h1>
                </div>
                <div className="w-1/2">
                    <img
                        src="https://i.ibb.co/RpcWxpS/banner-img-2.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex items-center">
                <div>
                    <img
                        src="https://i.ibb.co/PjmNN9t/banner-img-1.png"
                        alt=""
                    />
                </div>
                <div>
                    <p className="text-xl text-right">
                        Discover your dream job with{" "}
                        <span className="text-mainCol font-extrabold">
                            Job Hunter
                        </span>{" "}
                        Find, apply, and connect with employers across various
                        industries. Your future career awaits – join us today!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
