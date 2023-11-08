import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Loading/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const path = location.pathname;
    if (loading) {
        return <Loading />;
    }
    if (user) {
        return children;
    }
    return <Navigate state={path} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
