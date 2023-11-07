import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllJobCategories, postJob } from "../APIs/api";
import Loading from "../Components/Loading/Loading";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddJob = () => {
    const { user } = useContext(AuthContext);
    const { mutateAsync } = useMutation({
        mutationFn: postJob,
    });
    const [deadline, setDeadline] = useState(new Date());
    const categories = useQuery({
        queryKey: ["categories"],
        queryFn: async () => await getAllJobCategories(),
    });
    if (categories.isLoading) {
        return <Loading />;
    }

    const handleAddJob = async (e) => {
        e.preventDefault();
        const jobTitle = e.target.jobTitle.value;
        const imageUrl = e.target.imageUrl.value;
        const jobCategoryId = e.target.jobCategoryId.value;
        const companyName = e.target.companyName.value;
        const jobDescription = e.target.jobDescription.value;
        const salaryrange = e.target.salaryrange.value;
        const lastDate = deadline;
        const postedBy = user.uid;
        const postedDate = new Date().toISOString().slice(0, 10);
        const applicantsNumber = 0;

        const jobData = {
            jobTitle,
            imageUrl,
            jobCategoryId,
            companyName,
            jobDescription,
            salaryrange,
            lastDate,
            postedBy,
            postedDate,
            applicantsNumber,
        };

        try {
            await mutateAsync(jobData);
            Swal.fire({
                title: "Job Added",
                text: "Thank you for Posting a new job",
                icon: "success",
            });
            e.target.reset();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="w-full bg-base-200 bg-opacity-50">
            <form onSubmit={handleAddJob} className="card-body">
                <h1 className="text-center text-3xl font-bold">Post a Job</h1>
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
                        Add job
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;
