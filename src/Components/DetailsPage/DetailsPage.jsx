import { useLoaderData, useParams } from "react-router-dom";
const DetailsPage = () => {
  const updatePage = useLoaderData();
  const { id } = useParams();
  const selectedPage = updatePage.find((blog) => blog._id === id);
  const { photo, bookName, authorName, category } = selectedPage;
  console.log(selectedPage);
  return (
    <div>
      <div className="flex min-h-screen items-center justify-center px-7  py-12 md:py-0">
        <div className="relative flex-col md:flex w-full max-w-[48rem] md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div className="relative m-0 md:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={photo}
              alt="image"
              className="h-full w-full object-cover p-4"
            />
          </div>
          <div className="p-2 md:p-6">
            <div className="p-2">
              <h6 className="mb-2 mt-4 block font-sans text-2xl font-bold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                {bookName}
              </h6>
              <h4 className="mb-3 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                By : {authorName}
              </h4>
              <h4 className="mb-2 block font-sans text-base font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                Book Category : {category}
              </h4>
              <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                Books are a fundamental part of human culture and knowledge.
                They serve as vessels for ideas, stories, histories, and
                information across generations and geographies. Books come in
                various forms, textbooks, and more, each serving a different
                purpose.
              </p>
              <a className="w-full" href="#">
                <button
                  className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-base font-bold uppercase text-pink-500 transition-all bg-pink-500/10 hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Borrow
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
