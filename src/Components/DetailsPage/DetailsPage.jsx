import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
const DetailsPage = () => {
  const [details, setDetails] = useState([]);
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const { _id, photo, name, author_name, category, quantity_of_books } =
    details;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const returnDate = e.target.returnDate.value;
    const borrowBooksData = {
      photo,
      previousBookId: _id,
      name,
      author_name,
      category,
      quantity_of_books,
      returnDate,
      borrowedDate: new Date(),
      borrowedEmail: user.email,
    };
    console.log(details);
    const result = await fetch(`http://localhost:5000/bookDetails/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( borrowBooksData ),
    });
    console.log(result);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/bookDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <div className="bg-white dark:bg-black">
      <div className="flex min-h-screen items-center justify-center px-7  py-12 md:py-0">
        <div className="relative  border border-gray-300 flex-col md:flex w-full max-w-[48rem] md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
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
                {name}
              </h6>
              <h4 className="mb-3 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                By : {author_name}
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
                  className="btn flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-base font-bold uppercase text-pink-500 transition-all bg-pink-500/10 hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                  type="button"
                >
                  Borrow
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-[#0c3989] text-white font-black text-lg">
                <RxCross2 />
              </button>
            </form>
          </div>
          <h3 className="font-bold text-lg text-center mb-3">Borrow Your Books!</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Author Name
                </span>
              </label>
              <input
                type="text"
                value={user?.displayName}
                className="input input-bordered text-sm  text-[#0c3989] font-medium bg-gray-50  border border-[#0c3989]"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Email
                </span>
              </label>
              <input
                type="text"
                value={user?.email}
                className="input input-bordered text-sm text-[#0c3989] font-medium bg-gray-50  border border-[#0c3989]"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-semibold">
                  Return Date
                </span>
              </label>
              <input
                type="text"
                name="returnDate"
                placeholder="Return Date"
                className="input input-bordered text-sm text-[#0c3989] font-medium bg-gray-50  border border-[#0c3989]"
              />
            </div>
            {quantity_of_books > 0 ? (
              <button
                type="submit"
                // onClick={() => handleSubmit(_id)}
                className="w-full  text-center rounded-md bg-[#0c3989] text-white py-3 mt-7 font-medium"
                to="/"
              >
                Submit
              </button>
            ) : (
              <button
                className="w-full text-center cursor-auto rounded-md bg-[#a3c3fa] text-white py-3 mt-7 font-medium"
                to="/"
              >
                Submit
              </button>
            )}
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default DetailsPage;
