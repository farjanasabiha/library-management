import { Link, useRouteError } from "react-router-dom";
import { FaRegSadCry } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex items-center justify-center flex-col h-screen text-center">
      <div>
        <FaRegSadCry className="text-8xl font-bold mx-auto text-center" />
        <h1 className="text-2xl font-semibold mt-5">
          Oops!! Sorry, an unexpected error has occurred.
        </h1>
        {error.status === 404 && (
          <div>
            <p className="text-xl font-medium my-4">Page Not Found</p>
            <Link
              className="underline text-base text-[#4b85f0] font-bold"
              to="/"
            >
              Go Back to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
