import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
    const location = useLocation()
    console.log(location)
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
      <div>
        {noHeaderFooter || <Navbar></Navbar>}
        <Outlet></Outlet>
        {noHeaderFooter || <Footer></Footer>}
      </div>
    );
};

export default Layout;