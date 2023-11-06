import axios from "axios";

export const getJWTToken = async (loggedInUser) => {
    const response = await axios.post(
        "http://localhost:5000/api/auth/jwt",
        loggedInUser,
        {
            withCredentials: true,
        }
    );
    const data = await response.data;
    return data;
};

export const getLogout = async (loggedInUser) => {
    const response = await axios.post(
        "http://localhost:5000/api/auth/logout",
        loggedInUser,
        {
            withCredentials: true,
        }
    );
    const data = await response.data;
    return data;
};
