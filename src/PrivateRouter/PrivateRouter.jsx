// import { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProvider";

// const PrivateRouter = ({ children }) => {
//   // For redirect to this page where you want to go after login
//   const { user, loading } = useContext(AuthContext);
//   const location = useLocation();
//   console.log(location.pathname);
//   if (loading) {
//     return (
//       <div className="container mx-auto text-center py-20">
//         <span className="loading loading-dots loading-lg"></span>
//       </div>
//     );
//   }

//   if (user) {
//     return children;
//   }
//   return <Navigate state={location.pathname} to="/login"></Navigate>;
// };

// export default PrivateRouter;



import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // For redirect to this page where you want to go after login
  const location = useLocation();

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

  return <Navigate state={{ from: location }} to="/login" />;
};

export default PrivateRouter;
