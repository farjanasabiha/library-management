import { useEffect, useState } from "react";
import SingleBookCategory from "../../../Components/SingleBookCategory/SingleBookCategory";

const BookCategories = () => {
  const [bookCategories, setbookCategories] = useState([]);
  useEffect(() => {
    fetch("https://library-management-server-ebon.vercel.app/bookCategories")
      .then((res) => res.json())
      .then((data) => setbookCategories(data));
  }, []);
  // Log the data to ensure it's being fetched
  // console.log(bookCategories);

  return (
    <div>
      <section>
        <div className="container px-6 m-auto pb-24">
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3">
            {bookCategories.map((bookCategory, index) => (
              <SingleBookCategory bookCategory={bookCategory} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookCategories;
