import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import Loader from "./Loader";
import { useUser } from "../hooks/useUser";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/sign-up");
    },
    [isAuthenticated, navigate, isLoading]
  );

  if (isLoading) {
    return (
      <div className="h-full flex items-center">
        <Loader/>
      </div>
    );
  }

  if (isAuthenticated) return children;
};

export default ProtectedRoute;