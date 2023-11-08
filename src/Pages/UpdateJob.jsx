import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getAllJobCategories, getJobById } from "../APIs/api";
import Loading from "../Components/Loading/Loading";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const UpdateJob = () => {
    const { id } = useParams();
    const [deadline, setDeadline] = useState(new Date());
    const {
        data: job,
        isLoading,
        isFetched,
        refetch,
    } = useQuery({
        queryKey: ["job", id],
        queryFn: async () => {
            return await getJobById(id);
        },
    });

    const categories = useQuery({
        queryKey: ["categories"],
        queryFn: async () => await getAllJobCategories(),
    });

    const [loadedJob, setLoadedJob] = useState(job);

    useEffect(() => {
        setLoadedJob(job);
    }, [job]);

    if (isLoading || !isFetched || categories.isLoading || !loadedJob) {
        return <Loading />;
    }

    const handleJobCatChange = (e) => {
        const jobCategory = e.target.value;
        setLoadedJob({ ...loadedJob, jobCategory });
    };

    const handleUpdateJob = async (e) => {
        e.preventDefault();
        const jobTitle = e.target.jobTitle.value;
        const imageUrl = e.target.imageUrl.value;
        const jobCategoryId = e.target.jobCategoryId.value;
        const companyName = e.target.companyName.value;
        const jobDescription = e.target.jobDescription.value;
        const salaryrange = e.target.salaryrange.value;
        const lastDate = deadline.toISOString().slice(0, 10);
        const jobData = {
            jobTitle,
            imageUrl,
            jobCategoryId,
            companyName,
            jobDescription,
            salaryrange,
            lastDate,
        };

        try {
            await fetch(
                `https://job-hunter-server-psi.vercel.app/api/jobs/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(jobData),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data) {
                        Swal.fire({
                            title: "Job Updated",
                            text: "Thank you for Updating the job",
                            icon: "success",
                        });
                        refetch();
                    } else {
                        Swal.fire({
                            title: "Error",
                            text: "There was an error while updating the job",
                            icon: "error",
                        });
                    }
                });
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: "There was an error while updating the job",
                icon: "error",
            });
        }
    };

    return (
        <div className="w-full bg-base-200 bg-opacity-50">
            <form onSubmit={handleUpdateJob} className="card-body">
                <h1 className="text-center text-3xl font-bold">Update Job</h1>
                <div className="flex justify-center gap-3">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Job Title
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Job Title"
                            defaultValue={loadedJob.jobTitle}
                            name="jobTitle"
                            className="input input-bordered focus:outline-none"
                            required
                        />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Image URL
                            </span>
                        </label>
                        <input
                            type="url"
                            placeholder="Image URL"
                            defaultValue={loadedJob.imageUrl}
                            name="imageUrl"
                            className="input input-bordered focus:outline-none"
                            required
                        />
                    </div>
                </div>
                <div className="flex justify-center gap-3">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Job Category
                            </span>
                        </label>
                        <select
                            className="h-full select rounded-md w-full border-gray-300 focus:outline-none"
                            name="jobCategory"
                            id="jobCategoryId"
                            value={loadedJob.jobCategoryId}
                            onChange={handleJobCatChange}
                        >
                            <option value="">Select Job Category</option>
                            {categories.data.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.jobCategory}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Company Name
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Comapny Name"
                            defaultValue={loadedJob.companyName}
                            name="companyName"
                            className="input input-bordered focus:outline-none"
                            required
                        />
                    </div>
                </div>
                <div className="flex justify-center gap-3">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">
                                Job Description
                            </span>
                        </label>
                        <textarea
                            placeholder="Job Description"
                            defaultValue={loadedJob.jobDescription}
                            name="jobDescription"
                            className="textarea h-24 textarea-bordered focus:outline-none"
                            type="text"
                            required
                        />
                    </div>
                </div>
                <div className="flex justify-center gap-3">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Salary Range
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Salary Range"
                            defaultValue={loadedJob.salaryrange}
                            name="salaryrange"
                            className="input input-bordered focus:outline-none"
                            required
                        />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Deadliine
                            </span>
                        </label>
                        <input
                            type="date"
                            name="date"
                            defaultValue={loadedJob.lastDate}
                            onChange={(e) => setDeadline(e.target.value)}
                            className="input input-bordered focus:outline-none"
                            required
                        />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button
                        type="submit"
                        className="btn normal-case font-bold  border-0  text-lg hover:text-mainCol"
                    >
                        Update job
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateJob;
