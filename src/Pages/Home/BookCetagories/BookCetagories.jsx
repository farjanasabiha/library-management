import { useEffect, useState } from "react";
import SingleBookCategory from "../../../Components/SingleBookCategory/SingleBookCategory";

const BookCategories = () => {
  const [bookCategories, setbookCategories] = useState([]);
  useEffect(() => {
    fetch("https://library-management-server-ebon.vercel.app/bookCategories")
      .then((res) => res.json())
      .then((data) => setbookCategories(data));
  }, []);

  return (
    <div className="px-8">
        <div className="container m-auto">
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-10">
            {bookCategories.map((bookCategory, index) => (
              <SingleBookCategory bookCategory={bookCategory} key={index} />
            ))}
          </div>
        </div>
    </div>
  );
};

export default BookCategories;
