// import  bg  from "../../../../public/bg.jpg";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#0c3989] to-[#7fb0ff]">
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-65"></div>
      <div className="hero md:min-h-screen py-12 md:py-0">
        <div className="hero-content">
          <div className=" text-center md:text-left text-white dark:text-white ">
            <span className="text-center mx-auto font-semibold block">
              Organizes and simplifies library operations
            </span>
            <h1 className="text-2xl md:text-7xl font-bold pt-3 font-crete  mx-auto text-center">
              Library Management System
            </h1>
            <p className="py-8 mx-auto text-center w-full md:w-3/4">
              A Library Management System (LMS) is a software application
              designed to manage the operations of a library. It helps automate
              various library tasks such as cataloging, tracking borrowed and
              returned books, managing member information, and maintaining
              inventory.
            </p>
            <div className="mx-auto text-center">
              <button className="border border-[#5e9cff] bg-[#0c3989] px-8 py-2 ">
                <a className="font-bold uppercase" href="/login">
                  Login
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;