import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const CategoryLeft = () => {
      
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h2 className="font-semibold">All Category ({categories.length})</h2>
      <div className="flex flex-col gap-2 py-4">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className={({isActive}) => `btn  border-none px-3 ${isActive ? 'bg-[#a7a7a7]' : ""}`}
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};



            

export default CategoryLeft;