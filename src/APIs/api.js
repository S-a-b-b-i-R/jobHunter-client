import axios from "axios";

export const getJWTToken = async (loggedInUser) => {
    const response = await axios.post(
        "https://job-hunter-server-psi.vercel.app/api/auth/jwt",
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
        "https://job-hunter-server-psi.vercel.app/api/auth/logout",
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
        "https://job-hunter-server-psi.vercel.app/api/jobs/categories"
    );
    const data = await response.data;
    return data;
};

export const postJob = async (job) => {
    const response = await axios.post(
        "https://job-hunter-server-psi.vercel.app/api/jobs",
        job,
        {
            withCredentials: true,
        }
    );
    const data = await response.data;
    return data;
};

export const updateJob = async (jobId, jobData) => {
    const response = await axios.put(
        `https://job-hunter-server-psi.vercel.app/api/jobs/${jobId}`,
        jobData,
        {
            withCredentials: true,
        }
    );
    const data = await response.data;
    return data;
};

export const getAllJobs = async () => {
    const response = await axios.get(
        "https://job-hunter-server-psi.vercel.app/api/jobs"
    );
    const data = await response.data;
    return data;
};

export const getJobsByCategory = async (categoryId) => {
    const response = await axios.get(
        `https://job-hunter-server-psi.vercel.app/api/jobs/${categoryId}`
    );
    const data = await response.data;
    return data;
};

export const getJobById = async (jobId) => {
    const response = await axios.get(
        `https://job-hunter-server-psi.vercel.app/api/job/${jobId}`
    );
    const data = await response.data;
    return data;
};

export const addJobApply = async (appliedjob) => {
    const response = await axios.post(
        "https://job-hunter-server-psi.vercel.app/api/user/jobs",
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
        `https://job-hunter-server-psi.vercel.app/api/user/jobs/${userId}/${jobId}`
    );
    const data = await response.data;
    return data;
};

export const getJobsBySearchString = async (searchString) => {
    const queryString = searchString ? searchString : "null";
    const response = await axios.get(
        `https://job-hunter-server-psi.vercel.app/api/jobs/search/${queryString}`
        // `https://job-hunter-server-psi.vercel.app/api/jobs/search?searchString=${searchString}`
    );
    const data = await response.data;
    return data;
};

export const getJobsPostedByUser = async (userId) => {
    try {
        const response = await axios.get(
            `https://job-hunter-server-psi.vercel.app/api/user/jobs/${userId}`
        );
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const deleteJob = async (jobId) => {
    try {
        const response = await axios.delete(
            `https://job-hunter-server-psi.vercel.app/api/jobs/${jobId}`,
            {
                withCredentials: true,
            }
        );
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getAppliedJobs = async (userId) => {
    try {
        const response = await axios.get(
            `https://job-hunter-server-psi.vercel.app/api/user/appliedjobs/${userId}`,
            {
                withCredentials: true,
            }
        );
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error);
    }
};
