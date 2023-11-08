import PropTypes from "prop-types";
import { BiSolidEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteJob } from "../APIs/api";
import Swal from "sweetalert2";

const TablerowMyJobs = ({ job }) => {
    const queryClient = useQueryClient();
    const { mutateAsync } = useMutation({
        mutationFn: deleteJob,
    });
    const handleDelete = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await mutateAsync(job._id);
                queryClient.invalidateQueries("myjobs");
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };
    return (
        <tr>
            <th>{job.jobTitle}</th>
            <th>{job.postedDate}</th>
            <th>{job.lastDate}</th>
            <th>{job.applicantsNumber}</th>
            <th>
                <button>
                    <Link className="text-xl">
                        <BiSolidEdit />
                    </Link>
                </button>
                <button onClick={handleDelete} className="text-xl">
                    <AiFillDelete />
                </button>
            </th>
        </tr>
    );
};

TablerowMyJobs.propTypes = {
    job: PropTypes.object.isRequired,
};

export default TablerowMyJobs;
