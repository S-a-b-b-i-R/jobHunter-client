import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Layouts/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AddJob from "../Pages/AddJob";
import Error from "../Components/Loading/Error";
import JobDetail from "../Pages/JobDetail";
import AllJobsTable from "../Pages/AllJobsTable";
import MyJobs from "../Pages/MyJobs";
import UpdateJob from "../Pages/UpdateJob";
import AppliedJobs from "../Pages/AppliedJobs";
import Blogs from "../Pages/Blogs";
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/addjobs",
                element: (
                    <PrivateRoute>
                        <AddJob />
                    </PrivateRoute>
                ),
            },
            {
                path: "jobdetail/:id",
                element: (
                    <PrivateRoute>
                        <JobDetail />
                    </PrivateRoute>
                ),
            },
            {
                path: "/alljobs",
                element: <AllJobsTable />,
            },
            {
                path: "/myjobs",
                element: (
                    <PrivateRoute>
                        <MyJobs />
                    </PrivateRoute>
                ),
            },
            {
                path: "/updatejob/:id",
                element: (
                    <PrivateRoute>
                        <UpdateJob />
                    </PrivateRoute>
                ),
            },
            {
                path: "/appliedjobs",
                element: (
                    <PrivateRoute>
                        <AppliedJobs />
                    </PrivateRoute>
                ),
            },
            {
                path: "/blogs",
                element: <Blogs />,
            },
        ],
    },
]);

export default Routes;
