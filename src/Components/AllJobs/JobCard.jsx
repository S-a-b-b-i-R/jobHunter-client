import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { getAllJobCategories } from "../../APIs/api";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
    const { data: categories, isSuccess } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => await getAllJobCategories(),
    });

    if (!isSuccess) {
        return <Loading />;
    }
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
                    <Link
                        to={`/jobdetail/${job._id}`}
                        className="badge badge-outline text-lg p-4 hover:bg-mainCol hover:text-white hover:scale-110 hover:cursor-pointer"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

JobCard.propTypes = {
    job: PropTypes.object.isRequired,
};

export default JobCard;
