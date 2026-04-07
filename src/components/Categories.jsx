import React from "react";
import "./Categories.css";

const categories = [
  { name: "Electronics", img: "" },
  { name: "Fashion", img: "" },
  { name: "Shoes", img: "" },
  { name: "Accessories", img: "" },
];

const Categories = () => {
  return (
    <section className="categories-section">
      <h2>Shop by Category</h2>
      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;