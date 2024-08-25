import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const ShowThriller = ({ thriller }) => {
  const [rating, setRating] = useState(0);

  // Handle rating change
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Handle input change (in case you want to manually adjust the rating via input)
  const handleInputChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0 && value <= 5) {
      // Assuming rating is between 0 and 5
      setRating(value);
    }
  };
  return (
    <div>
      <div className="w-full mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-8 rounded-t-lg w-96 h-96"
            src={thriller.photo}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {thriller.bookName}
            </h5>
          </a>
          <a href="#">
            <h5 className="text-base mt-1 font-medium tracking-tight text-gray-900 dark:text-white">
              Author Name : {thriller.authorName}
            </h5>
          </a>
          <a href="#">
            <h5 className="text-base mt-1 font-medium tracking-tight text-gray-900 dark:text-white">
              Category : {thriller.category}
            </h5>
          </a>
          <div className="form-control">
            <div className="flex items-center justify-start gap-5">
              {/* Rating Component */}
              <Rating
                style={{ maxWidth: 120 }}
                value={rating}
                name="rating"
                onChange={handleRatingChange}
              />

              {/* Synchronized Input Field */}
              <input
                type="number"
                name="rating"
                value={rating}
                onChange={handleInputChange}
                placeholder="Rating"
                className="text-base w-12 text-center pl-3 py-1 rounded-md bg-gray-50 border border-[#0c3989]"
                min="0"
                max="0"
                step="0.1" // Adjust according to the precision of your rating system
              />
            </div>
          </div>
          <div className="mt-3">
            <Link
              to={`/DetailsPage/${thriller._id}`}
              className="text-white bg-[#0c3989]  hover:bg-blue-800 w-full  font-medium rounded-lg text-sm px-7 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowThriller;
