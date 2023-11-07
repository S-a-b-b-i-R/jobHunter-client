import { useQuery } from "@tanstack/react-query";
import { getAllJobCategories, getJobsByCategory } from "../APIs/api";
import Loading from "../Components/Loading/Loading";
import Tablerow from "../Components/Tablerow";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useState } from "react";

const AllJobsTable = () => {
    const [categoryId, setCategoryId] = useState("");
    const {
        data: jobs,
        refetch,
        isLoading,
        isFetching,
    } = useQuery({
        queryKey: ["jobs"],
        queryFn: async () => await getJobsByCategory(categoryId),
    });

    const { data: categories, isLoading: catLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => await getAllJobCategories(),
    });

    const items = [];

    if (!catLoading) {
        categories.map((category) => {
            items.push({
                id: category._id,
                name: category.jobCategory,
            });
        });
    }

    if (isLoading) {
        return <Loading />;
    }

    const handleSearch = (string, results) => {
        if (results.length > 0) {
            setCategoryId(results[0].id);
            refetch();
        } else {
            setCategoryId("");
            refetch();
        }
    };

    return (
        <div>
            <div className="form-control w-2/3 mx-auto mb-20">
                <ReactSearchAutocomplete
                    items={items}
                    onSearch={handleSearch}
                    styling={{
                        zIndex: 4,
                    }}
                    autoFocus
                />
                {/* <div className="input-group">
                    <input
                        type="searchtext"
                        name="searchtext"
                        placeholder="Search with category..."
                        className="input input-bordered w-full focus:outline-none"
                    />
                    <button className="btn btn-square hover:bg-mainCol hover:text-white hover:scale-110">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div> */}
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Posted By</th>
                            <th>Job Title</th>
                            <th>Job Posting Date</th>
                            <th>Deadline</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map((job) => (
                            <Tablerow key={job._id} job={job} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllJobsTable;
