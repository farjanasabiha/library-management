import { useLoaderData } from "react-router-dom";
import ShowDrama from './ShowDrama';

const DramaCategory = () => {
  const updatePage = useLoaderData();
  const selectedPage = updatePage.filter((blog) => blog.category == "Drama");
  return (
    <div className="container mx-auto gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-20  px-5">
        {selectedPage.map((drama) => (
          <ShowDrama drama={drama} key={drama._id}></ShowDrama>
        ))}
      </div>
    </div>
  );
};

export default DramaCategory;
