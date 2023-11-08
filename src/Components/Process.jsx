const Process = () => {
    return (
        <div className="space-y-5">
            <h1 className="text-5xl font-bold text-center">Why Choose Us</h1>
            <div className="flex flex-col lg:flex-row items-center">
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold">For Job Seekers</h1>
                    <ul className="list-inside list-disc">
                        <li>
                            <span className="font-bold">
                                Diverse Opportunities:
                            </span>{" "}
                            We offer a vast array of job listings, from
                            entry-level positions to executive roles, across
                            various industries and locations, ensuring
                            there&apos;s something for everyone.
                        </li>
                        <li>
                            <span className="font-bold">
                                User-Centric Experience:
                            </span>{" "}
                            Our user-friendly platform simplifies your job
                            search, allowing you to filter and find the perfect
                            job quickly and effortlessly.
                        </li>
                        <li>
                            <span className="font-bold">
                                Insightful Resources:
                            </span>{" "}
                            We provide valuable resources, career advice, and
                            tips to help you excel in your job search and
                            professional development.
                        </li>
                    </ul>
                </div>
                <div>
                    <img
                        src="https://i.ibb.co/4j1w6nG/whychooseus1.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center">
                <div>
                    <img
                        src="https://i.ibb.co/Y3rndTv/whychooseus2.png"
                        alt=""
                    />
                </div>
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold">For recruiters</h1>
                    <ul className="list-inside list-disc">
                        <li>
                            <span className="font-bold">
                                Quality Candidates:
                            </span>{" "}
                            We attract a diverse pool of skilled professionals,
                            ensuring you have access to top-tier talent with a
                            wide range of expertise and experience levels.
                        </li>
                        <li>
                            <span className="font-bold">
                                Efficient Screening:
                            </span>{" "}
                            Our platform streamlines the hiring process,
                            allowing you to easily filter, review, and connect
                            with candidates who meet your specific job
                            requirements.
                        </li>
                        <li>
                            <span className="font-bold">
                                Data-Driven Insights:
                            </span>{" "}
                            Gain valuable insights into the job market and
                            candidate trends, empowering you to make informed
                            decisions and stay ahead of the competition.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Process;
