import { useLoaderData } from "react-router-dom";
import ShowHistory from "./ShowHistory";

const HistoryCategory = () => {
  const updatePage = useLoaderData();
  const selectedPage = updatePage.filter((blog) => blog.category == "History");
  return (
    <div className="container mx-auto gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-20  px-5">
        {selectedPage.map((history) => (
          <ShowHistory history={history} key={history._id}></ShowHistory>
        ))}
      </div>
    </div>
  );
};

export default HistoryCategory;