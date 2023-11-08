import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { getAllJobCategories, getAllJobs, getAppliedJobs } from "../APIs/api";
import Loading from "../Components/Loading/Loading";
import AppliedJobCard from "../Components/AppliedJobCard";

const AppliedJobs = () => {
    const { user } = useContext(AuthContext);
    const [activeTabIndex, setActiveTabIndex] = useState("");
    const [loadedJobs, setLoadedJobs] = useState([]);
    const { data: allJobs, isFetched: isFetchedAll } = useQuery({
        queryKey: ["allJobs"],
        queryFn: async () => await getAllJobs(),
    });
    const {
        data: appliedjobs,
        isLoading,
        isFetching,
        isFetched,
        refetch,
    } = useQuery({
        queryKey: ["appliedjobs"],
        queryFn: async () => {
            if (user?.uid) {
                return await getAppliedJobs(user.uid);
            } else {
                return [];
            }
        },
    });

    const categories = useQuery({
        queryKey: ["categories"],
        queryFn: async () => await getAllJobCategories(),
    });

    useEffect(() => {
        setLoadedJobs(appliedjobs);
        refetch();
    }, [user?.uid, refetch]);

    if (!user || isLoading || !isFetched || categories.isLoading) {
        return <Loading />;
    }

    const acitveTab = (index) => {
        setActiveTabIndex(index);
        if (index.length === 0) {
            setLoadedJobs(appliedjobs);
        } else {
            const filteredJobs = appliedjobs.filter(
                (job) => job.appJobCat === index
            );
            setLoadedJobs(filteredJobs);
        }
    };

    return (
        <div>
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
                        ? "flex justify-center"
                        : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                }`}
            >
                {isFetching ? (
                    <Loading />
                ) : (
                    loadedJobs.map((job) => (
                        <AppliedJobCard
                            job={job}
                            allJobs={allJobs}
                            key={job._id}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default AppliedJobs;
