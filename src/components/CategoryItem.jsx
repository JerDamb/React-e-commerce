import React from "react";

const CategoryItem = ({ item }) => {
  return (
    <div className="containerCategoryItem">
      <img src={item.img} alt="" />
      <div className="infos">
        <h1 className="title">{item.title}</h1>
        <button>SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;
