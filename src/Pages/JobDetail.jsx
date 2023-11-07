import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { addJobApply, getJobById } from "../APIs/api";
import Loading from "../Components/Loading/Loading";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const JobDetail = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);

    const { data: job, isSuccess } = useQuery({
        queryKey: ["job", id],
        queryFn: async () => await getJobById(id),
    });

    const { mutateAsync } = useMutation({
        mutationFn: addJobApply,
    });

    if (!isSuccess || !user) {
        return <Loading />;
    }

    const handleOpenModal = () => {
        const toDayDate = new Date().toISOString().slice(0, 10);
        const lastDate = job.lastDate;
        if (toDayDate > lastDate) {
            alert("Sorry! The deadline is over");
        } else {
            document.getElementById("my_modal_5").showModal();
        }
    };

    const handleCloseModal = () => {
        document.getElementById("my_modal_5").close();
    };

    const handleApplyJob = async (e) => {
        e.preventDefault();
        const appJob = job._id;
        const userId = user.uid;
        const userEmail = e.target.email.value;
        const userName = e.target.name.value;
        const resumeUrl = e.target.url.value;
        const appliedDate = new Date().toISOString().slice(0, 10);
        const appliedJob = {
            appJob,
            userId,
            userEmail,
            userName,
            resumeUrl,
            appliedDate,
        };
        console.log(appliedJob);
        try {
            await mutateAsync(appliedJob);
            Swal.fire({
                title: "Job Applied",
                text: "Thank you for applying",
                icon: "success",
            });
            e.target.reset();
            handleCloseModal();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex items-center">
            <div className="w-1/2">
                <div className="flex flex-col items-start gap-3">
                    <img src={job.imageUrl} className="w-28 rounded-lg" />
                    <div className="space-y-3">
                        <h1 className="text-5xl font-bold">{job.jobTitle}</h1>
                        <p>{job.jobDescription}</p>
                        <p>
                            <span className="font-bold">Salary:</span>{" "}
                            {job.salaryrange}
                        </p>
                        <p>
                            <span className="font-bold">
                                Number of Applicants:
                            </span>{" "}
                            {job.applicantsNumber}
                        </p>
                        <p>
                            <span className="font-bold">Deadline:</span>{" "}
                            {job.lastDate}
                        </p>
                        <button
                            onClick={handleOpenModal}
                            className="btn normal-case bg-mainCol text-white w-1/2 hover:scale-110 hover:bg-mainCol hover:text-white"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-1/2">
                <img src="https://i.ibb.co/M1VMvGk/jobdetail.png" alt="" />
            </div>

            {/* modal */}
            <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
            >
                <div className="modal-box">
                    <div>
                        <button
                            onClick={handleCloseModal}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </button>
                        <form className="space-y-4" onSubmit={handleApplyJob}>
                            {/* if there is a button in form, it will close the modal */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Full Name
                                    </span>
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    placeholder="name"
                                    defaultValue={user.displayName}
                                    className="input input-bordered focus:outline-none"
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
                                    defaultValue={user.email}
                                    className="input input-bordered focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Resume Link
                                    </span>
                                </label>
                                <input
                                    type="url"
                                    name="url"
                                    placeholder="resume link"
                                    className="input input-bordered focus:outline-none"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn bg-mainCol text-white w-1/2 hover:scale-110 hover:bg-mainCol hover:text-white normal-case"
                            >
                                Apply
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default JobDetail;