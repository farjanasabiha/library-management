import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="container mx-auto text-center py-20">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRouter;
