import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import AllBorrowedBooks from "../../Components/AllBorrowedBooks/AllBorrowedBooks";

const BorrowedBooks = () => {
  const [borrowBooks, setBorrowBooks] = useState([]);

  document.title = "Library Management - Borrowed Books";

  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://library-management-server-ebon.vercel.app/getBorrowBooks/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setBorrowBooks(data));
  }, []);
  console.log(borrowBooks);
  return (
    <div className="bg-white dark:bg-black">
      <div className="container py-14 mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20  px-5">
          {borrowBooks.map((borrowBook) => (
            <AllBorrowedBooks
              borrowBooks={borrowBooks}
              setBorrowBooks={setBorrowBooks}
              borrowBook={borrowBook}
              key={borrowBook._id}
            ></AllBorrowedBooks>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BorrowedBooks;
