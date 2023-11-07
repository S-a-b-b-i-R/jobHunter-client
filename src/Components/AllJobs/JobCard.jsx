import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { getAllJobCategories } from "../../APIs/api";
import Loading from "../Loading/Loading";

const JobCard = ({ job }) => {
    const { data: categories, isSuccess } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => await getAllJobCategories(),
    });

    if (!isSuccess) {
        return <Loading />;
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img className="h-40" src={job.imageUrl} alt="Shoes" />
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
                <p>{job.jobDescription.slice(0, 30)}...</p>
                <div className="card-actions justify-center">
                    <div className="badge badge-outline text-lg p-4 hover:bg-mainCol hover:text-white hover:scale-110 hover:cursor-pointer">
                        Details
                    </div>
                </div>
            </div>
        </div>
    );
};

JobCard.propTypes = {
    job: PropTypes.object.isRequired,
};

export default JobCard;
