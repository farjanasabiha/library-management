import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllBooksCard = ({ allAddedBook }) => {
  const {
    _id,
    photo,
    author_name,
    name,
    short_description,
    quantity_of_books,
    rating,
    category,
  } = allAddedBook;
  
  console.log(_id)
    
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
              <p className="font-bold text-black dark:text-gray-200 mt-3">
                Short Description :{" "}
                <span className="font-medium text-black dark:text-gray-200 rounded-xl  capitalize">
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

              <div className="flex flex-wrap font-bold justify-start gap-5  space-x-2 text-xs text-black">
                <p className=" text-black dark:text-gray-200 py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">Name :</span> {name}
                </p>
                <p className=" text-black dark:text-gray-200 py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">Author Name :</span>{" "}
                  {author_name}
                </p>
              </div>
              <div className="flex mt-3  flex-wrap font-bold justify-between gap-5  space-x-2 text-xs ">
                <Link
                  to={`/update/${_id}`}
                  className="text-[#4885f8] border border-[#4885f8] rounded-md px-6 py-2 text-base"
                >
                  Update
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllBooksCard;
