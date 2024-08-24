import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
  document.title = "Art & Craft - Login";

  const [swalProps, setSwalProps] = useState({});
  const [showPassword, setShowPassword] = useState(true);
  //   const [registerError, setRegisterError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // Sign In
    signIn(email, password)
      .then((reuslt) => {
        console.log(reuslt.user);
        Swal.fire("Successfully LoggedIn");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire(error.message);
      });
  };

  const handleGoogleLogin = () => {
    console.log("hello");
    googleLogin()
      .then((reuslt) => {
        console.log(reuslt.user);
      })
      .catch((error) => {
        console.error("error", error.message);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((reuslt) => {
        console.log(reuslt.user);
      })
      .catch((error) => {
        console.error("error", error.message);
      });
  };

  return (
    <div className=" bg-white dark:bg-black">
      <div className="container mx-auto">
        <div className="flex items-center justify-center flex-col py-10 md:py-32">
          <h1 className="text-xl md:text-4xl font-semibold text-[#4b85f0] mb-8">
            Please Login Here !
          </h1>
          <form onSubmit={handleLogin} className="space-y-5">
            <label className="input input-bordered flex items-center gap-2 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                name="email"
                className="grow"
                placeholder="Email"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
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
              onClick={() => {
                setSwalProps({
                  show: true,
                  title: "",
                  text: "",
                });
              }}
              className="btn w-full inline-block px-8 bg-[#4b85f0] text-white transition font-semibold duration-300 text-base hover:bg-transparent hover:text-[#4b85f0] hover:border-solid hover:border-[#4b85f0]"
              type="submit"
              value="LogIn"
            ></input>
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <button
                onClick={handleGoogleLogin}
                href="/login"
                className="btn  bg-[#4b85f0] text-white transition duration-300 font-normal text-base hover:bg-transparent hover:text-[#4b85f0] hover:border-solid hover:border-[#4b85f0]"
              >
                Login with Google
              </button>
              <button
                onClick={handleGithubLogin}
                href="/login"
                className="btn bg-[#4b85f0] text-white transition duration-300 font-normal text-base hover:bg-transparent hover:text-[#4b85f0] hover:border-solid hover:border-[#4b85f0]"
              >
                Login with Github
              </button>
            </div>

            <p className="text-black dark:text-white font-medium text-sm text-center">
              New Here? Please{" "}
              <a href="/register" className="text-[#4b85f0] font-semibold">
                Register !
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
