import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllSingleBooks from "../AllSingleBooks/AllSingleBooks";
import AllBooksCard from "../AllBooksCard/AllBooksCard";
import AllCategoriesCard from "../AllCategoriesCard/AllCategoriesCard";

const CategoryData = () => {
  const [allBookCategories, setallBookCategories] = useState([]);

  const { categoryName } = useParams();
  console.log(categoryName, "This in category name");

  useEffect(() => {
    fetch(`http://localhost:5000/getCategoryBooks/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setallBookCategories(data));
  }, []);
    
    console.log(allBookCategories, "Hello World")
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20  px-5">
        {allBookCategories.map((allCategoriesdBooks) => (
          <AllCategoriesCard
            allCategoriesdBooks={allCategoriesdBooks}
            key={allCategoriesdBooks._id}
          ></AllCategoriesCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryData;
