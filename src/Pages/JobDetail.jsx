import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getJobById } from "../APIs/api";
import Loading from "../Components/Loading/Loading";

const JobDetail = () => {
    const { id } = useParams();
    console.log(id);

    const { data: job, isSuccess } = useQuery({
        queryKey: ["job", id],
        queryFn: async () => await getJobById(id),
    });

    if (!isSuccess) {
        return <Loading />;
    }
    console.log(job);

    return <div></div>;
};

export default JobDetail;
