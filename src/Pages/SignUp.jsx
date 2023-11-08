import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState("");
    const [isAccepted, setIsAccepted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const password = data.get("password");
        if (password.length < 6) {
            setRegisterError("Password must be at least 6 characters long");

            return;
        } else if (!/\d/.test(password)) {
            setRegisterError("Password must contain at least one number");

            return;
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setRegisterError(
                "Password must contain at least one special character"
            );

            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError(
                "Password must contain at least one uppercase letter"
            );

            return;
        } else if (!/[a-z]/.test(password)) {
            setRegisterError(
                "Password must contain at least one lowercase letter"
            );

            return;
        } else if (!isAccepted) {
            setRegisterError("Please accept our terms & conditions");
            return;
        }
        createUser(data.get("email"), data.get("password"))
            .then((userCredential) => {
                const user = userCredential.user;
                updateUserProfile(data.get("name"), data.get("url"))
                    .then(() => {
                        console.log("profile updated");
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
                Swal.fire({
                    title: "Registration successful",
                    text: "You will now be redirected",
                    icon: "success",
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/";
                    }
                });

                // window.location.href = "/";
                // navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorCode, errorMessage);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${errorCode} : ${errorMessage}`,
                    footer: '<a href="">Why do I have this issue?</a>',
                });
            });
    };
    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="card-body md:w-3/4 lg:w-2/3 mx-auto bg-base-200 bg-opacity-50 rounded-md"
            >
                <h1 className="text-2xl font-bold text-center">
                    Register your account
                </h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input
                        type="name"
                        name="name"
                        placeholder="name"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="url"
                        name="url"
                        placeholder="url"
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
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                    />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                            Forgot password?
                        </a>
                    </label>
                </div>
                <div className="flex">
                    <input
                        type="checkbox"
                        name="checkbox"
                        onChange={() => setIsAccepted(!isAccepted)}
                    />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                            Accept Our terms & Conditions
                        </a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button
                        type="submit"
                        className="btn normal-case font-bold bg-accentRed border-0  text-lg hover:text-mainCol"
                    >
                        Register
                    </button>
                </div>
                <p className="text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-mainCol font-bold">
                        Login
                    </Link>
                </p>
                {registerError && (
                    <p className="text-red-700 font-bold text-center">
                        {registerError}
                    </p>
                )}
            </form>
        </div>
    );
};

export default Register;
