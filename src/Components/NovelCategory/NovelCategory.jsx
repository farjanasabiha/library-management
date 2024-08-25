import { useLoaderData } from "react-router-dom";
import ShowNovel from "./ShowNovel";

const NovelCategory = () => {
      const updatePage = useLoaderData();
      const selectedPage = updatePage.filter((blog) => blog.category == 'Novel');
    return (
      <div className="container mx-auto gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-20 px-5">
          {selectedPage.map((novel) => (
            <ShowNovel novel={novel} key={novel._id}></ShowNovel>
          ))}
        </div>
      </div>
    );
};

export default NovelCategory;
