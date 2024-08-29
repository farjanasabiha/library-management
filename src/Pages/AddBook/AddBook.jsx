import { useState } from "react";
import Swal from "sweetalert2";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const AddBook = () => {
  document.title = "Library Management - AddBook";
  
  const [rating, setRating] = useState(0);
  const handleAddBook = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    const author_name = e.target.author_name.value;
    const name = e.target.name.value;
    const short_description = e.target.short_description.value;
    const quantity_of_books = e.target.quantity_of_books.value;
    const category = e.target.category.value;
    const newAddedBook = {
      photo,
      author_name,
      name,
      short_description,
      quantity_of_books,
      rating,
      category,
    };
    console.log(newAddedBook);

    // send Data to the server
    fetch("http://localhost:5000/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAddedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

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
      <div className=" h-full bg-white dark:bg-black">
        <div className="container p-6 mx-auto py-14 space-y-8">
          <h1 className="text-3xl text-[#0c3989] dark:text-white font-bold text-center">
            Add Your Books
          </h1>

          <div className="dark:border-[1px] dark:border-gray-200 rounded-xl">
            <div className="hero-content text-center mx-auto">
              <div className="card w-full shadow-2xl">
                <form
                  onSubmit={handleAddBook}
                  className="card-body grid grid-cols-1 md:grid-cols-2 gap-x-10"
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base font-bold">
                        Photo URL
                      </span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="Photo URL"
                      className="input input-bordered text-sm bg-gray-50 border border-[#0c3989]"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base font-semibold">
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input input-bordered text-sm bg-gray-50  border border-[#0c3989]"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base font-semibold">
                        Author Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="author_name"
                      placeholder="Author Name"
                      className="input input-bordered text-sm bg-gray-50  border border-[#0c3989]"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base font-semibold">
                        Short description
                      </span>
                    </label>
                    <input
                      type="text"
                      name="short_description"
                      placeholder="Short description"
                      className="input input-bordered text-sm bg-gray-50  border border-[#0c3989]"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base font-semibold">
                        Quantity of books
                      </span>
                    </label>
                    <input
                      type="number"
                      name="quantity_of_books"
                      placeholder="Quantity of books"
                      className="input input-bordered text-sm bg-gray-50  border border-[#0c3989]"
                      min="0"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base font-semibold">
                        Rating
                      </span>
                    </label>
                    <div className="flex items-center justify-start gap-5">
                      {/* Rating Component */}
                      <Rating
                        style={{ maxWidth: 180 }}
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
                        className="input input-bordered text-sm bg-gray-50 border border-[#0c3989]"
                        min="0"
                        max="5"
                        step="0.1" // Adjust according to the precision of your rating system
                      />
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-base font-semibold">
                        Category
                      </span>
                    </label>
                    <select
                      name="category"
                      id="category"
                      className="input input-bordered text-sm bg-gray-50  border border-[#0c3989]"
                    >
                      <option value="Novel">Novel</option>
                      <option value="Thriller">Thriller</option>
                      <option value="History">History</option>
                      <option value="Drama">Drama</option>
                      <option value="Sci-fi">Sci-fi</option>
                    </select>
                  </div>

                  <div className="form-control mt-6">
                    <input
                      type="submit"
                      value="Add Book"
                      className="btn btn-primary bg-[#0c3989] text-white"
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
