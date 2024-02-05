import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import Loader from "./Loader";
import { useUser } from "../hooks/useUser";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/sign-up");
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading) {
    return (
        <Loader/>
    );
  }

  if (isAuthenticated) return children;
};

export default ProtectedRoute;