import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
const Register = () => {
  document.title = "Library Management - Register";

  const { createUser } = useContext(AuthContext);
  const [swalProps, setSwalProps] = useState({});
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  document.title = "HomePress - Register";

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);

    if (password.length < 6) {
      setRegisterError(
        "Your Password Should be at least 6 characters or longer"
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your Password Should have at least one upper case characters"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        "Your Password Should have at least one lower case characters"
      );
      return;
    }

    // // reset error
    setRegisterError("");

    // Create User
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // Success Messgae
        Swal.fire("User created Successfully");

        // Update Profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            console.log("Profile Updated");
          })
          .catch();
      })
      .catch((error) => {
        console.error(error);
        // Error Message
        setRegisterError("auth/email-already-in-use");
      });
  };
  return (
    <div className="bg-white dark:bg-black dark:text-white">
      <div className="container mx-auto">
        <form
          onSubmit={handleRegister}
          className="flex items-center justify-center flex-col py-32"
        >
          <h1 className="text-2xl md:text-4xl font-semibold text-[#4b85f0] mb-8">
            Please Register Here !
          </h1>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-black font-medium text-base dark:text-white">
                What is your name?
              </span>
            </div>
            <input
              type="text"
              required
              name="name"
              placeholder="Sabiha"
              className="input input-bordered bg-white border-2 text-black border-gray-200 w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text  text-black font-medium text-base dark:text-white">
                Enter your email
              </span>
            </div>
            <input
              type="email"
              required
              name="email"
              placeholder="sabiha@gmail.com"
              className="input input-bordered w-full text-black max-w-xs bg-white border-2 border-gray-200"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text  text-black font-medium text-base dark:text-white">
                Photo url
              </span>
            </div>
            <input
              type="text"
              required
              name="photo"
              placeholder="Photo url"
              className="input input-bordered text-black w-full max-w-xs bg-white border-2 border-gray-200"
            />
          </label>
          <label className="form-control w-full max-w-xs relative">
            <div className="label">
              <span className="label-text  text-black font-medium text-base dark:text-white">
                Enter your Password
              </span>
            </div>
            <input
              type={showPassword ? "password" : "text"}
              required
              name="password"
              placeholder="!4%hA*&-#2M"
              className="input input-bordered text-black w-full max-w-xs  bg-white border-2 border-gray-200"
            />
            <span
              className="absolute top-14 right-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaRegEye className="text-lg" />
              ) : (
                <FaEyeSlash className="text-lg" />
              )}
            </span>
          </label>
          <p className="text-black font-medium text-sm mt-3 font-face dark:text-white">
            Already Have An account? please{" "}
            <a href="/login" className="text-[#4b85f0] font-semibold">
              LogIn
            </a>
          </p>
          <input
            onClick={() => {
              setSwalProps({
                show: true,
                title: "",
                text: "",
              });
            }}
            className="btn mt-5 w-full max-w-xs px-8 bg-[#4b85f0] text-white transition font-semibold duration-300 text-base hover:bg-transparent hover:text-[#4b85f0] hover:border-solid hover:border-[#4b85f0]"
            type="submit"
            value="Register"
          ></input>
          {registerError && (
            <p className="text-red-600 font-semibold mt-5">{registerError}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
