import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Tablerow = ({ job }) => {
    return (
        <tr>
            <th>{job.postedBy}</th>
            <th>{job.jobTitle}</th>
            <th>{job.postedDate}</th>
            <th>{job.lastDate}</th>
            <th>{job.salaryrange}</th>
            <th>
                <Link
                    to={`/jobdetail/${job._id}`}
                    className="badge badge-outline text-lg p-4 hover:bg-mainCol hover:text-white hover:scale-110 hover:cursor-pointer"
                >
                    Details
                </Link>
            </th>
        </tr>
    );
};

Tablerow.propTypes = {
    job: PropTypes.object.isRequired,
};

export default Tablerow;
