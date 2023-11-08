import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Loading from "../Components/Loading/Loading";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getJobsPostedByUser } from "../APIs/api";
import TablerowMyJobs from "../Components/TablerowMyJobs";

const MyJobs = () => {
    const [userId, setUserId] = useState("");
    const { user } = useContext(AuthContext);
    const queryClient = useQueryClient();
    const {
        data: myJobs,
        isLoading,
        isFetched,
        refetch,
    } = useQuery({
        queryKey: ["myjobs"],
        queryFn: async () => {
            if (userId) {
                return await getJobsPostedByUser(userId);
            } else {
                return [];
            }
        },
    });
    useEffect(() => {
        if (user?.uid) {
            setUserId(user.uid);
        }
        refetch();
        queryClient.invalidateQueries("myjobs");
    }, [user?.uid, userId, refetch, queryClient]);

    if (!user || isLoading || !isFetched) {
        return <Loading />;
    }

    return (
        <div>
            <h1 className="text-center text-xl font-bold">My Jobs</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Job Posting Date</th>
                            <th>Deadline</th>
                            <th>Applications</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myJobs.map((job) => (
                            <TablerowMyJobs key={job._id} job={job} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobs;
