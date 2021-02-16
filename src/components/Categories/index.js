const Categories = ({ filterItems, categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <button
          type="button"
          className="filter-btn"
          key={index}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
