import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { getAllJobCategories, getJobsByCategory } from "../../APIs/api";
import Loading from "../Loading/Loading";
import JobCard from "./JobCard";

const AllJobs = () => {
    const { user } = useContext(AuthContext);
    const [activeTabIndex, setActiveTabIndex] = useState("");
    const {
        data: jobs,
        refetch,
        isLoading,
        isFetching,
    } = useQuery({
        queryKey: ["jobs"],
        queryFn: async () => await getJobsByCategory(activeTabIndex),
    });

    const acitveTab = (index) => {
        setActiveTabIndex(index);
    };

    useEffect(() => {
        refetch();
    }, [activeTabIndex, refetch]);

    const categories = useQuery({
        queryKey: ["categories"],
        queryFn: async () => await getAllJobCategories(),
    });

    if (isLoading || categories.isLoading || !user) {
        return <Loading />;
    }

    return (
        <div className="flex flex-col items-center gap-5">
            <div className="tabs justify-center">
                <a
                    className={`tab text-xl ${
                        "" === activeTabIndex
                            ? "tab-active bg-mainCol text-white rounded-md"
                            : ""
                    }`}
                    onClick={() => acitveTab("")}
                >
                    All Jobs
                </a>
                {categories.data.map((category) => {
                    return (
                        <a
                            className={`tab text-xl ${
                                category._id === activeTabIndex
                                    ? "tab-active bg-mainCol text-white rounded-md"
                                    : ""
                            }`}
                            key={category._id}
                            onClick={() => acitveTab(category._id)}
                        >
                            {category.jobCategory}
                        </a>
                    );
                })}
            </div>
            <div
                className={`${
                    isFetching
                        ? "flex"
                        : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                }`}
            >
                {isFetching ? (
                    <Loading />
                ) : (
                    jobs.map((job) => <JobCard job={job} key={job._id} />)
                )}
            </div>
        </div>
    );
};

export default AllJobs;
