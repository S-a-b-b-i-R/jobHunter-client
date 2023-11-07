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

export const getAllJobCategories = async () => {
    const response = await axios.get(
        "http://localhost:5000/api/jobs/categories"
    );
    const data = await response.data;
    return data;
};

export const postJob = async (job) => {
    const response = await axios.post("http://localhost:5000/api/jobs", job, {
        withCredentials: true,
    });
    const data = await response.data;
    return data;
};

export const getAllJobs = async () => {
    const response = await axios.get("http://localhost:5000/api/jobs");
    const data = await response.data;
    return data;
};

export const getJobsByCategory = async (categoryId) => {
    const response = await axios.get(
        `http://localhost:5000/api/jobs/${categoryId}`
    );
    const data = await response.data;
    return data;
};

export const getJobById = async (jobId) => {
    const response = await axios.get(`http://localhost:5000/api/job/${jobId}`);
    const data = await response.data;
    return data;
};

export const addJobApply = async (appliedjob) => {
    const response = await axios.post(
        "http://localhost:5000/api/user/jobs",
        appliedjob,
        {
            withCredentials: true,
        }
    );
    const data = await response.data;
    return data;
};

export const getIsApplied = async (jobId, userId) => {
    const response = await axios.get(
        `http://localhost:5000/api/user/jobs/${userId}/${jobId}`
    );
    const data = await response.data;
    return data;
};

export const getJobsBySearchString = async (searchString) => {
    const queryString = searchString ? searchString : "null";
    const response = await axios.get(
        `http://localhost:5000/api/jobs/search/${queryString}`
        // `http://localhost:5000/api/jobs/search?searchString=${searchString}`
    );
    const data = await response.data;
    return data;
};
