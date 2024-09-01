import { Link } from "react-router-dom";

const AllBorrowedBooks = ({ borrowBook, borrowBooks, setBorrowBooks }) => {
  const {
    _id,
    photo,
    category,
    name,
    returnDate,
    borrowedDate,
    previousBookId,
  } = borrowBook;
  const handleReturn = async () => {
    await fetch(
      `https://library-management-server-ebon.vercel.app/returnBooks/${_id}/?previousBookId=${previousBookId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      // setBorrowBooks([])
      // console.log(res)
      // setBorrowBooks(borrowBooks);
      window.location.reload();
    });
  };
  return (
    <div>
      <div className="shadow-lg my-10 rounded-md dark:border-2 dark:border-gray-500">
        <img
          className="rounded-md  w-full h-[400px]"
          src={photo}
          alt="Photo"
        ></img>
        <div className="p-7 space-y-2">
          <p className=" font-medium text-black dark:text-gray-200">
            <span className="font-semibold">Category :</span>{" "}
            <span className="underline text-base font-medium   rounded-xl  capitalize">
              {category}
            </span>
          </p>
          <p className=" font-medium text-black dark:text-gray-200">
            <span className="font-semibold">Name :</span>{" "}
            <span className=" text-base font-medium   rounded-xl  capitalize">
              {name}
            </span>
          </p>
          <p className=" font-medium text-black dark:text-gray-200">
            <span className="font-semibold">Return Date :</span>{" "}
            <span className=" text-base font-medium   rounded-xl  capitalize">
              {returnDate}
            </span>
          </p>
          <p className=" font-medium text-black dark:text-gray-200">
            <span className="font-semibold">Borrowed Date :</span>{" "}
            <span className=" text-base font-medium   rounded-xl  capitalize">
              {borrowedDate}
            </span>
          </p>
          <div className="flex mt-3  flex-wrap font-bold justify-between gap-5  space-x-2 text-xs ">
            <button
              onClick={handleReturn}
              className="text-white bg-[#0c3989]  hover:bg-blue-800 w-full  font-medium rounded-lg text-sm px-7 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
            >
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBorrowedBooks;
