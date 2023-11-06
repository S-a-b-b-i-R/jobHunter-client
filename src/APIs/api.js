import axios from "axios";

export const getJWTToken = async (loggedInUser) => {
    console.log(loggedInUser);
    const response = await axios.post(
        "http://localhost:5000/api/auth/jwt",
        loggedInUser,
        {
            withCredentials: true,
        }
    );
    const data = await response.data;
    console.log(data);
    return data;
};
