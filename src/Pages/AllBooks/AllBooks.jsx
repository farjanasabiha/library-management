import { useEffect, useState } from "react";
import AllBooksCard from "../../Components/AllBooksCard/AllBooksCard";

const AllBooks = () => {
  const [allBook, setAllBook] = useState([]);
  const [availableBooks, setAvailableBooks] = useState();
  document.title = "Library Management - AllBooks";
  useEffect(() => {
    fetch(`http://localhost:5000/allBooks`)
      .then((res) => res.json())
      .then((data) => setAllBook(data));
  }, []);

  // Handling the button click to show available books
  const handleAvailableBooks = (e) => {
    e.preventDefault();
    // Filtering books that are available (quantity > 0)
    const myAvailableBooks = allBook.filter(
      (book) => book.quantity_of_books > 0
    );
    setAvailableBooks(myAvailableBooks);
    console.log(availableBooks);
  };

  return (
    <div>
      <div className="bg-white dark:bg-black">
        <div className="container mx-auto">
          <div className="mx-auto text-center">
            <h1 className="text-3xl font-bold pt-5 mb-3">
              My Art And Craft List
            </h1>
            <button
              onClick={handleAvailableBooks}
              className="bg-red-600 text-white py-2 px-6 rounded-md mt-3 font-medium"
            >
              Show available books
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {allBook.map((allAddedBook) => (
              <AllBooksCard
                availableBooks={availableBooks}
                setAvailableBooks={setAvailableBooks}
                allAddedBook={allAddedBook}
                key={allAddedBook._id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
