import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const [errorr, setError] = useState("");
    const location = useLocation();
    const state = location.state;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        signIn(data.get("email"), data.get("password"))
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setError("");
                Swal.fire({
                    title: "Login successful",
                    text: "You will now be redirected",
                    icon: "success",
                }).then((result) => {
                    if (result.isConfirmed) {
                        if (state) {
                            navigate(state);
                        } else {
                            navigate("/");
                        }
                    }
                });
            })
            .catch((error) => {
                const errorMsg = error.message;
                setError(errorMsg);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${errorMsg}`,
                    footer: '<a href="">Why do I have this issue?</a>',
                });
            });
    };
    const handleSocialLogin = (media) => {
        media()
            .then((result) => {
                const user = result.user;
                console.log(user);
                if (state) {
                    navigate(state);
                } else {
                    navigate("/");
                }
                setError("");
            })
            .catch((error) => {
                const errorMsg = error.message;
                setError(errorMsg);
            });
    };
    return (
        <div className="md:w-3/4 lg:w-2/3 xl:w-2/3 mx-auto bg-base-200 bg-opacity-50 rounded-md">
            <form onSubmit={handleSubmit} className="card-body ">
                <h1 className="text-2xl font-bold text-center">Please Login</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        className="input input-bordered"
                        required
                    />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                            Forgot password?
                        </a>
                    </label>
                    {errorr && (
                        <p
                            key={errorr?.key}
                            className="text-accentRed font-bold"
                        >
                            {errorr}
                        </p>
                    )}
                </div>
                <div className="form-control mt-6">
                    <button
                        type="submit"
                        className="btn normal-case font-bold border-0  text-lg hover:text-mainCol"
                    >
                        Login
                    </button>
                </div>
            </form>
            <div className="card-body mt-6 flex flex-row gap-2 justify-center">
                <button
                    onClick={() => handleSocialLogin(googleSignIn)}
                    className="btn normal-case font-bold border-0  text-lg hover:text-mainCol flex-grow"
                >
                    <FaGoogle />
                    Google
                </button>
                <button
                    onClick={() => handleSocialLogin(githubSignIn)}
                    className="btn normal-case font-bold border-0  text-lg hover:text-mainCol flex-grow"
                >
                    <FaGithub />
                    GitHub
                </button>
            </div>
            <p className="text-center">
                Don&rsquo;t have an account?{" "}
                <Link to="/register" className="text-mainCol font-bold">
                    Register
                </Link>
            </p>
        </div>
    );
};

export default Login;
