const Banner = () => {
    return (
      <div className="bg-white dark:bg-black">
        <div className="hero md:min-h-screen py-12 md:py-0">
          <div className="hero-content flex-col gap-5 lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/Lgmwm3H/3d-minimal-opened-book-flying-with-another-books-back-to-school-concept-3d-illustration-free-png-ezg.png"
              className="max-w-xs md:max-w-lg rounded-lg shadow-2xl"
            />
            <div className=" text-center md:text-left text-black dark:text-[#a6adbb] ">
              <h1 className="text-2xl md:text-5xl font-bold pt-3">
                Library Management System
              </h1>
              <p className="py-8">
                A Library Management System (LMS) is a software application
                designed to manage the operations of a library. It helps
                automate various library tasks such as cataloging, tracking
                borrowed and returned books, managing member information, and
                maintaining inventory.
              </p>
              <button className="border border-[#a6adbb] px-8 py-2 rounded-md">
                <a className="font-medium uppercase" href="/login">
                  Login
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;