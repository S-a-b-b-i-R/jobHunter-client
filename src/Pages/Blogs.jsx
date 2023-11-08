const Blogs = () => {
    return (
        <div>
            <div>
                <img src="https://i.ibb.co/QJHMCVT/blog.png" alt="" />
            </div>
            <div className="space-y-4">
                <div className="collapse bg-base-200">
                    <input
                        type="radio"
                        name="my-accordion-1"
                        checked="checked"
                    />
                    <div className="collapse-title text-xl font-medium">
                        What is an access token and refresh token? how do they
                        work and where should we store then on the client-side?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Access tokens and refresh tokens are essential
                            components in the world of authentication and
                            authorization for web applications. An access token
                            is a time-limited credential that grants a user or
                            application access to specific resources or actions
                            on a server. It&apos;s typically used to
                            authenticate and authorize requests to protected
                            APIs. Refresh tokens, on the other hand, are
                            long-lived tokens used to obtain new access tokens
                            after they expire. They work by exchanging the
                            refresh token for a fresh access token without
                            requiring the user to re-enter their credentials.
                            Storing these tokens on the client-side poses
                            security risks, as they can be vulnerable to theft
                            or misuse. It&apos;s best practice to store them
                            securely on the server-side, such as in an HTTP-only
                            cookie or a secure server-side session, to ensure
                            the safety and integrity of your authentication
                            system. If we really have to store them in the
                            client side, the best option is to store them in
                            Cookies.{" "}
                        </p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                        What is Express Js? What is Nest Js?
                    </div>
                    <div className="collapse-content">
                        <p>
                            Express.js and Nest.js are both JavaScript
                            frameworks commonly used for building web
                            applications, but they have different design
                            philosophies and features. <br />{" "}
                            <span className="font-bold">Express.js:</span>{" "}
                            <br />
                            <ul className="list-disc px-5">
                                <li>
                                    Express.js is a minimalistic and
                                    unopinionated web application framework for
                                    Node.js.
                                </li>
                                <li>
                                    It provides a simple, flexible, and
                                    easy-to-use platform for building web
                                    applications and APIs.
                                </li>
                                <li>
                                    With Express, you have great freedom to
                                    structure your application as you see fit
                                    and choose your preferred middleware for
                                    tasks like routing, authentication, and data
                                    handling.
                                </li>
                                <li>
                                    It&apos;s known for its simplicity and
                                    speed, making it a popular choice for
                                    developers who want to build web
                                    applications quickly and with full control
                                    over the architecture.
                                </li>
                            </ul>
                            <br /> <span className="font-bold">Nest Js:</span>{" "}
                            <br />{" "}
                            <ul className="list-disc px-5">
                                <li>
                                    Nest.js is a more opinionated and structured
                                    framework for building scalable and
                                    maintainable Node.js applications. It is
                                    built on top of Express.js but adds a
                                    higher-level architectural layer that
                                    encourages the use of TypeScript and follows
                                    a modular and organized approach.
                                </li>
                                <li>
                                    Nest.js leverages decorators, dependency
                                    injection, and modules to create
                                    well-structured, testable code.
                                </li>
                                <li>
                                    It also provides features like automatic
                                    OpenAPI documentation and out-of-the-box
                                    support for GraphQL. Nest.js is favored by
                                    developers who value a robust and organized
                                    codebase for larger and more complex
                                    projects.
                                </li>
                            </ul>{" "}
                            <br /> Both frameworks have their merits, and the
                            choice between them depends on your specific project
                            requirements and your personal preferences as a
                            developer.
                        </p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                        Explain your code
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
