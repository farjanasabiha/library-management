import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllCategoriesCard = ({ allCategoriesdBooks }) => {
  const {
    _id,
    photo,
    author_name,
    name,
    short_description,
    quantity_of_books,
    rating,
    category,
  } = allCategoriesdBooks;

  console.log(_id);
  return (
    <div>
      <section>
        <div className="container px-6 m-auto ">
          <div className="shadow-lg my-10 rounded-md dark:border-2 dark:border-gray-500">
            <img
              className="rounded-md  w-full h-[400px]"
              src={photo}
              alt="Photo"
            ></img>
            <div className="p-7 ">
              <p className=" font-medium leading-snug text-black dark:text-gray-200">
                <span className="font-semibold">Category :</span>{" "}
                <span className="underline text-base font-medium   rounded-xl  capitalize">
                  {category}
                </span>
              </p>
              <p className=" mt-2 text-black dark:text-gray-200  text-sm font-medium leading-snug">
                <span className="font-semibold">Book Name :</span> {name}
              </p>
              <p className="mt-2 text-black dar
              k:text-gray-200 text-sm font-medium leading-snug">
                <span className="font-semibold">Author Name :</span>{" "}
                {author_name}
              </p>
              <p className=" text-black dark:text-gray-200 mt-2">
                Short Description :{" "}
                <span className=" text-black dark:text-gray-200 rounded-xl  capitalize">
                  {short_description}
                </span>
              </p>
              <div className="flex  flex-wrap font-bold justify-start gap-5  space-x-2 text-xs text-black">
                <p className=" text-black dark:text-gray-200 py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">Quantity Of Books :</span>{" "}
                  {quantity_of_books}
                </p>
                <p className=" text-black dark:text-gray-200 py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">Rating :</span> {rating}
                </p>
              </div>

              <div className="flex mt-3  flex-wrap font-bold justify-between gap-5  space-x-2 text-xs ">
                <Link
                  to={`/detailsPage/${_id}`}
                  className="text-white bg-[#0c3989]  hover:bg-blue-800 w-full  font-medium rounded-lg text-sm px-7 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllCategoriesCard;
