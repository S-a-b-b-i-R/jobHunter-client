import Typewriter from "typewriter-effect";

const Banner = () => {
    return (
        <div className="space-y-5">
            <div className="flex flex-col md:flex-row items-center gap-5">
                <div className="w-full md:w-2/3 lg:w-1/2">
                    <h1 className="text-center md:text-left text-6xl font-extrabold">
                        Your next <br />{" "}
                        <span className="text-mainCol">
                            <Typewriter
                                options={{
                                    strings: [
                                        "Dream Job",
                                        "Dream Life",
                                        "Dream Career",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                        <br />
                        is a few steps away
                    </h1>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src="https://i.ibb.co/RpcWxpS/banner-img-2.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-5 items-center">
                <div className="hidden lg:block">
                    <img
                        src="https://i.ibb.co/PjmNN9t/banner-img-1.png"
                        alt=""
                    />
                </div>
                <div className="flex flex-col items-center lg:items-end gap-5">
                    <div className="stats stats-vertical md:stats-horizontal">
                        <div className="stat text-center md:text-right">
                            <div className="stat-title">Live Jobs</div>
                            <div className="stat-value">5K</div>
                            <div className="stat-desc">Jan 1st - Feb 1st</div>
                        </div>

                        <div className="stat text-center md:text-right">
                            <div className="stat-title">New Users</div>
                            <div className="stat-value">4,200</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>

                        <div className="stat text-center md:text-right">
                            <div className="stat-title">New Registers</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">90 (14%)</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-5">
                        <p className="text-xl text-center lg:text-right">
                            Discover your dream job with{" "}
                            <span className="text-mainCol font-extrabold">
                                Job Hunter
                            </span>{" "}
                            Find, apply, and connect with employers across
                            various industries. Your future career awaits – join
                            us today!
                        </p>
                        <div className="form-control w-full">
                            <div className="input-group">
                                <input
                                    type="text"
                                    placeholder="Search with keywords..."
                                    className="input input-bordered w-full focus:outline-none"
                                />
                                <button className="btn btn-square hover:bg-mainCol hover:text-white hover:scale-110">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
