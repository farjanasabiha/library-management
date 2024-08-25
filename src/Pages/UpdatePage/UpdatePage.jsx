import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const updatePage = useLoaderData();
  // console.log(updatePage)
  const { id } = useParams();
  const selectedPage = updatePage.find((blog) => blog._id === id);
  console.log(selectedPage);

  const {
    _id,
    photo,
    category,
    author_name,
    name,
    quantity_of_books,
    short_description,
    rating,
  } = selectedPage;
    console.log(_id);
  const handleUpdateItem = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    const author_name = e.target.author_name.value;
    const quantity_of_books = e.target.quantity_of_books.value;
    const short_description = e.target.short_description.value;
    const category = e.target.category.value;
    const rating = e.target.rating.value;
    const name = e.target.name.value;
    const newList = {
      
      photo,
      category,
      short_description,
      quantity_of_books,
      rating,
      author_name,
      name,
    };


    // send Data to the server
    fetch(`http://localhost:5000/bookss/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newList),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-white dark:bg-black">
      <div className="container py-14 mx-auto space-y-8">
        <h1 className="text-2xl text-black dark:text-white font-semibold text-center">
          Update Your Art And Craft Item
        </h1>

        <div className="">
          <div className="hero-content text-center mx-auto">
            <div className="card bg-base-100 w-full  shadow-lg">
              <form
                onSubmit={handleUpdateItem}
                className="card-body grid grid-cols-1 md:grid-cols-2 gap-x-10 bg-[#eeeeee] rounded-lg"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Photo URL
                    </span>
                  </label>
                  <input
                    defaultValue={photo}
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered text-sm text-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Name
                    </span>
                  </label>
                  <input
                    defaultValue={name}
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered text-sm text-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Author name
                    </span>
                  </label>
                  <input
                    defaultValue={author_name}
                    type="text"
                    name="author_name"
                    placeholder="Author name"
                    className="input input-bordered text-sm text-white"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Category
                    </span>
                  </label>
                  <input
                    type="text"
                    defaultValue={category}
                    name="category"
                    placeholder="ategory"
                    className="input input-bordered text-sm  text-white"
                    readOnly
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Short description
                    </span>
                  </label>
                  <input
                    type="text"
                    defaultValue={short_description}
                    name="short_description"
                    placeholder="Short description"
                    className="input input-bordered text-sm  text-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Rating
                    </span>
                  </label>
                  <input
                    type="number"
                    defaultValue={rating}
                    name="rating"
                    placeholder="Rating"
                    className="input input-bordered text-sm  text-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium capitalize">
                      Quantity of books
                    </span>
                  </label>
                  <input
                    type="text"
                    name="quantity_of_books"
                    defaultValue={quantity_of_books}
                    placeholder="Quantity of books"
                    className="input input-bordered text-sm  text-white capitalize"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="add"
                    className="btn btn-primary"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
