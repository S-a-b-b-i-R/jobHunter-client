import PropTypes from "prop-types";

const AppliedJobCard = ({ job, allJobs }) => {
    const targetJob = allJobs.find((j) => j._id === job.appJob);
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{targetJob.jobTitle}</h2>
                <p>Comapany: {targetJob.companyName}</p>
                <p>Applied Date: {job.appliedDate}</p>
            </div>
        </div>
    );
};

AppliedJobCard.propTypes = {
    job: PropTypes.object.isRequired,
    allJobs: PropTypes.array.isRequired,
};

export default AppliedJobCard;
