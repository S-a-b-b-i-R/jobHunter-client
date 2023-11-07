import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Layouts/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AddJob from "../Pages/AddJob";
import Error from "../Components/Loading/Error";

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
                element: <AddJob />,
            },
        ],
    },
]);

export default Routes;
