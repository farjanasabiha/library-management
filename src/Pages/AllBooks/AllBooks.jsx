import { useLoaderData } from "react-router-dom";
import AllBooksCard from '../../Components/AllBooksCard/AllBooksCard';


const AllBooks = () => {
  document.title = "Library Management - AllBooks";
    const allAddedBooks = useLoaderData();
    return (
      <div>
        <div className="bg-white dark:bg-black">
          <div className="container mx-auto">
            <div className="mx-auto text-center">
              <h1 className="text-3xl font-bold pt-5 mb-3">
                My Art And Craft List
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {allAddedBooks.map((allAddedBook) => (
                <AllBooksCard
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