import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { getAllJobCategories } from "../../APIs/api";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const JobCard = ({ job }) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { data: categories, isSuccess } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => await getAllJobCategories(),
    });

    if (!isSuccess) {
        return <Loading />;
    }
    const handleRouteToJobDetail = () => {
        if (!user) {
            Swal.fire({
                title: "Login Required",
                text: "Please Login to view job details",
                icon: "warning",
            }).then(() => {
                navigate("/login");
            });
        } else {
            navigate(`/jobdetail/${job._id}`);
        }
    };
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
                <img className="h-32" src={job.imageUrl} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job.jobTitle}</h2>
                <div className="badge bg-mainCol p-3 text-white">
                    {
                        categories.find(
                            (jobCategory) =>
                                jobCategory._id === job.jobCategoryId
                        ).jobCategory
                    }
                </div>
                <p>Salary : {job.salaryrange}</p>
                <p>Posted By: {job.postedBy}</p>
                <p>Posting Data: {job.postedDate}</p>
                <p>Deadline: {job.lastDate}</p>
                <p>Applications: {job.applicantsNumber}</p>
                <div className="card-actions justify-center">
                    <button
                        onClick={handleRouteToJobDetail}
                        className="badge badge-outline text-lg p-4 hover:bg-mainCol hover:text-white hover:scale-110 hover:cursor-pointer"
                    >
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
};

JobCard.propTypes = {
    job: PropTypes.object.isRequired,
};

export default JobCard;
