import { NavLink } from "react-router-dom";

const SingleNav = ({ link, navName }) => {
  return (
    <div>
      <li className="bg-white  rounded-lg bg-transparent hover:bg-transparent focus:bg-transparent  ml-5">
        <NavLink
          to={link}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "semibold" : "bold",
              color: isActive ? "white" : "black",
              background: isActive ? "#0c3989" : "transparent",
              textDecoration: isActive ? "" : "underline",
            };
          }}
        >
          {navName}
        </NavLink>
      </li>
    </div>
  );
};

export default SingleNav;
