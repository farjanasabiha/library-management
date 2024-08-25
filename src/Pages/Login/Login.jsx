import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
  document.title = "Library Management - Login";

  const location = useLocation();
  const navigate = useNavigate();

  const [swalProps, setSwalProps] = useState({});
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Sign In
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire("Successfully Logged In");
        // Redirect to the page the user was trying to access
        const redirectTo = location.state?.from?.pathname || "/";
        navigate(redirectTo);
      })
      .catch((error) => {
        console.error(error);
        Swal.fire(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        const redirectTo = location.state?.from?.pathname || "/";
        navigate(redirectTo);
      })
      .catch((error) => {
        console.error("error", error.message);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        const redirectTo = location.state?.from?.pathname || "/";
        navigate(redirectTo);
      })
      .catch((error) => {
        console.error("error", error.message);
      });
  };

  return (
    <div className="bg-white dark:bg-black">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col py-10 md:py-32">
          <h1 className="text-xl md:text-4xl font-semibold text-[#4b85f0] mb-8">
            Please Login Here!
          </h1>
          <form onSubmit={handleLogin} className="space-y-5">
            <label className="input input-bordered flex items-center gap-2 bg-white">
              <input
                type="text"
                name="email"
                className="grow"
                placeholder="Email"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-white">
              <input
                type={showPassword ? "password" : "text"}
                name="password"
                className="grow"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="text-[#4b85f0] cursor-pointer"
              >
                {showPassword ? <FaRegEye /> : <FaEyeSlash />}
              </span>
            </label>
            <input
              className="btn w-full inline-block px-8 bg-[#4b85f0] text-white transition font-semibold duration-300 text-base hover:bg-transparent hover:text-[#4b85f0] hover:border-solid hover:border-[#4b85f0]"
              type="submit"
              value="Log In"
            />
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <button
                onClick={handleGoogleLogin}
                className="btn bg-[#4b85f0] text-white transition duration-300 font-normal text-base hover:bg-transparent hover:text-[#4b85f0] hover:border-solid hover:border-[#4b85f0]"
              >
                Login with Google
              </button>
              <button
                onClick={handleGithubLogin}
                className="btn bg-[#4b85f0] text-white transition duration-300 font-normal text-base hover:bg-transparent hover:text-[#4b85f0] hover:border-solid hover:border-[#4b85f0]"
              >
                Login with Github
              </button>
            </div>

            <p className="text-black dark:text-white font-medium text-sm text-center">
              New Here? Please{" "}
              <a href="/register" className="text-[#4b85f0] font-semibold">
                Register!
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
