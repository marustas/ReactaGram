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
      <div className="h-[100vh] flex items-center justify-center bg-slate-400">
        <Loader/>
      </div>
    );
  }

  if (isAuthenticated) return children;
};

export default ProtectedRoute;