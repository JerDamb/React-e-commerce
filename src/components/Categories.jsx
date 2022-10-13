import React from "react";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <>
      <div className="containerCategories">
        {categories.map((item) => (
          <CategoryItem key={categories.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Categories;
