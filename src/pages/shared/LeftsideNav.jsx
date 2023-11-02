import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftsideNav = () => {
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="">
      <p className="text-2xl font-bold mb-5">All Category</p>
      <div className="ml-5">
        {Categories.map((Category) => (
          <NavLink
            to={`/category${Category.id}`}
            className={"flex flex-col pl-8 btn-ghost rounded py-3"}
            key={Category.id}
          >
            {Category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftsideNav;
