import { useEffect, useState } from "react";
import AllBooksCard from "../../Components/AllBooksCard/AllBooksCard";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const [allBook, setAllBook] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]); // State to manage displayed books
  const [viewMode, setViewMode] = useState("Card View"); // State to manage view mode
  const [searchTerm, setSearchTerm] = useState(""); // State to manage search term
  document.title = "Library Management - AllBooks";

  useEffect(() => {
    fetch(`https://library-management-server-ebon.vercel.app/allBooks`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllBook(data);
        setDisplayBooks(data);
      });
  }, []);

  const handleAvailableBooks = (e) => {
    e.preventDefault();
    const myAvailableBooks = allBook.filter(
      (book) => book.quantity_of_books > 0
    );
    setDisplayBooks(myAvailableBooks);
  };

  const handleViewChange = (e) => {
    setViewMode(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    const filteredBooks = allBook.filter((book) =>
      book.category.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDisplayBooks(filteredBooks);
  };

  return (
    <div>
      <div className="bg-white dark:bg-black">
        <div className="container mx-auto">
          <div className="py-16">
            <div className="mx-auto text-center">
              <h1 className="text-3xl text-black dark:text-white font-bold mb-4">
                My All Books
              </h1>
              <div className="flex justify-center gap-5">
                <button
                  onClick={handleAvailableBooks}
                  className="bg-[#0c3989] text-white py-3 px-6 rounded-md mt-3 font-medium"
                >
                  Show Available Books
                </button>
                <select
                  onChange={handleViewChange}
                  value={viewMode}
                  className="select bg-[#0c3989] rounded-md mt-3 font-medium text-white select-bordered w-full max-w-40"
                >
                  <option disabled selected>
                    Select View Mode
                  </option>
                  <option>Card View</option>
                  <option>Table View</option>
                </select>
              </div>

              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by Category - Drama"
                className="input w-full max-w-72 bg-[#0c3989] rounded-md mt-5 placeholder:text-white"
              />
            </div>

            {/* Conditionally render Card View or Table View */}
            {viewMode === "Card View" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                {displayBooks?.map((allAddedBook) => (
                  <AllBooksCard
                    allAddedBook={allAddedBook}
                    key={allAddedBook._id}
                  />
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="table min-w-full bg-white dark:bg-gray-800 mt-12 min-h-80 px-5">
                  <thead>
                    <tr className="text-lg text-[#0c3989] dark:text-white uppercase">
                      <th className="py-2 px-4 border">Book Name</th>
                      <th className="py-2 px-4 border">Author Name</th>
                      <th className="py-2 px-4 border">Category</th>
                      <th className="py-2 px-4 border">Quantity</th>
                      <th className="py-2 px-4 border">Rating</th>
                      <th className="py-2 px-4 border">Short Description</th>
                      <th className="py-2 px-4 border">Update Button</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {displayBooks.map((book) => (
                      <tr
                        className="text-base font-medium text-gray-500 dark:text-white"
                        key={book._id}
                      >
                        <td className="py-2 px-4 border">{book.name}</td>
                        <td className="py-2 px-4 border">{book.author_name}</td>
                        <td className="py-2 px-4 border">{book.category}</td>

                        <td className="py-2 px-4 border">
                          {book.quantity_of_books}
                        </td>
                        <td className="py-2 px-4 border">{book.rating}</td>
                        <td className="py-2 px-4 border">
                          {book.short_description}
                        </td>
                        <td className="py-2 px-4 border text-center mx-auto">
                          <Link
                            to={`/updatePage/${book._id}`}
                            className="text-white bg-[#0c3989]  hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
                          >
                            Update
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
