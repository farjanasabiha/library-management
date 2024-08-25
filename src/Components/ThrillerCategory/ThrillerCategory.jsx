import { useLoaderData } from "react-router-dom";
import ShowThriller from "./ShowThriller";

const ThrillerCategory = () => {
  const updatePage = useLoaderData();
  const selectedPage = updatePage.filter((blog) => blog.category == "Thriller");
  return (
    <div className="container mx-auto gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-20  px-5">
        {selectedPage.map((thriller) => (
          <ShowThriller thriller={thriller} key={thriller._id}></ShowThriller>
        ))}
      </div>
    </div>
  );
};

export default ThrillerCategory;