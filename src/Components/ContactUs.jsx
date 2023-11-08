const ContactUs = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Contact Us</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://i.ibb.co/bQzf2cc/undraw-Contact-us-re-4qqt.png"
                        alt=""
                    />
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="w-full space-y-5">
                        <div className="flex flex-col md:flex-row gap-2 w-full">
                            <div className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="label-text">
                                        Your name?
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full focus:outline-none"
                                />
                                <label className="label">
                                    <span className="label-text">
                                        Your email?
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full focus:outline-none"
                                />
                                <label className="label">
                                    <span className="label-text">
                                        Your phone?
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full focus:outline-none"
                                />
                            </div>

                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">
                                        Your message
                                    </span>
                                </label>
                                <textarea
                                    className="textarea textarea-bordered h-full w-full focus:outline-none"
                                    placeholder="Write to us"
                                ></textarea>
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <button className="btn border-none bg-mainCol hover:bg-mainCol text-white font-bold normal-case">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
