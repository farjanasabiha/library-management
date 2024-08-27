import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";
import { IoIosMoon } from "react-icons/io";
import { AuthContext } from "../../provider/AuthProvider";
import { Tooltip } from "react-tooltip";
const Navbar = () => {
  const themes = {
    dark: "light",
    light: "dark",
  };

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const _theme = themes[theme];
    localStorage.setItem("theme", _theme);
    updateTheme(_theme);
  };

  const updateTheme = (name) => {
    setTheme(name);
    document.querySelector("html")?.classList.remove(themes[name]);
    document.querySelector("html")?.classList.add(name);
  };

  useEffect(() => {
    const _theme = localStorage.getItem("theme") || "dark";
    updateTheme(_theme);
  }, []);

  const { user, logout } = useContext(AuthContext);
  const handleSignOut = () => {
    logout().then().catch();
  };

  const links = (
    <>
      <li className="bg-white rounded-lg hover:bg-transparent focus:bg-transparent ml-5">
        <NavLink
          className="dark:text-white"
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "semibold" : "bold",
              color: isActive ? "white" : "black",
              background: isActive ? "black" : "transparent",
              textDecoration: isActive ? "" : "underline",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li className="bg-white  rounded-lg bg-transparent hover:bg-transparent focus:bg-transparent  ml-5">
        <NavLink
          to="/AddBook"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "semibold" : "bold",
              color: isActive ? "white" : "black",
              background: isActive ? "black" : "transparent",
              textDecoration: isActive ? "" : "underline",
            };
          }}
        >
          Add Book
        </NavLink>
      </li>
      <li className="bg-white rounded-lg hover:bg-transparent focus:bg-transparent ml-5">
        <NavLink
          to="/AllBooks"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "semibold" : "bold",
              color: isActive ? "white" : "black",
              background: isActive ? "black" : "transparent",
              textDecoration: isActive ? "" : "underline",
            };
          }}
        >
          All Books
        </NavLink>
      </li>

      <li className="bg-white  rounded-lg bg-transparent hover:bg-transparent focus:bg-transparent  ml-5">
        <NavLink
          to="/BorrowedBooks"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "semibold" : "bold",
              color: isActive ? "white" : "black",
              background: isActive ? "black" : "transparent",
              textDecoration: isActive ? "" : "underline",
            };
          }}
        >
          Borrowed Books
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="shadow-md bg-white dark:bg-black">
      <div className="container mx-auto bg-white dark:bg-white">
        <div className="navbar bg-white dark:bg-black mx-auto py-3">
          <div className="navbar-start w-[40%] md:w-full">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content dark:text-white bg-base-100 rounded-box mr-5 z-[20] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            {/* <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[40] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div> */}
            <p className="text-sm md:text-2xl ml-2 font-bold text-black dark:text-white">
              Library Management
            </p>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 rounded-none">{links}</ul>
          </div>
          <div className="navbar-end w-[60%] md:w-full">
            <div className="mr-0 md:mr-5">
              <label className="swap swap-rotate">
                <input
                  onClick={toggleTheme}
                  type="checkbox"
                  checked={theme === "dark"}
                  onChange={() => {}}
                  className="theme-controller"
                />
                <svg
                  className="swap-off h-10 w-10 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <div className="swap-on h-10 w-10 fill-current text-black dark:text-white text-4xl">
                  <IoIosMoon />
                </div>
              </label>
            </div>
            {user ? (
              <div className="flex items-center justify-center gap-3">
                <div className="navContainer">
                  <a id="clickable" className="">
                    <img
                      className="w-12 h-12 cursor-pointer rounded-full"
                      src={user.photoURL}
                      alt="User Profile"
                    />
                  </a>
                  <Tooltip anchorSelect="#clickable" clickable>
                    <button>
                      <div className="overlay">{user.displayName}</div>{" "}
                    </button>
                  </Tooltip>
                </div>
                <button
                  onClick={handleSignOut}
                  className="btn px-4 md:px-8 bg-[#4b85f0] text-white font-semibold text-sm md:text-lg hover:bg-transparent hover:text-[#4b85f0] hover:border-solid hover:border-[#4b85f0]"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div>
                <a
                  href="/login"
                  className="btn mr-3 px-4 md:px-8 bg-[#4b85f0] text-white font-normal md:font-semibold  text-xs md:text-lg hover:bg-transparent hover:text-[#4b85f0] hover:border-solid hover:border-[#4b85f0]"
                >
                  <button>Login</button>
                </a>
                <a
                  href="/register"
                  className="btn px-3 md:px-8 bg-[#4b85f0] text-white font-normal md:font-semibold text-xs md:text-lg hover:bg-transparent hover:text-[#4b85f0] hover:border-solid hover:border-[#4b85f0]"
                >
                  <button>Register</button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
