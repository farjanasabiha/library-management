import { Link } from "react-router-dom";

const SingleBookCategory = ({ bookCategory }) => {
  const { image_url, category_name, short_description } = bookCategory;

  return (
    <div className="col-span-4 lg:col-span-3 text-center mx-auto">
      <div className="max-w-xs rounded-md dark:border-2 dark:border-gray-500 shadow-md bg-white dark:bg-black text-black dark:text-gray-100">
        <img
          src={image_url}
          alt={category_name}
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl text-[#0c3989] dark:text-white text-center font-bold tracking-wide">
              {category_name}
            </h2>
            <p className="text-[#0c3989] text-center dark:text-white">
              {short_description}
            </p>
          </div>
          <Link
            to={`/categoryData/${category_name}`}
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#0c3989] text-white"
          >
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBookCategory;
