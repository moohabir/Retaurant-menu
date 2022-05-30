export default function Categories({ categories, filterItems }) {
  //categories componnet is used to show category buttons
  return (
    <div className="categories">
      {/* Dynamic approach and the best one is below */}
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            className="btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}

      {/* qaabkaan hoose waa manual approach 
      aan dynamic ahayn oo fiicnayn lagumna samayyn karo dhamaan btnska
      <button 
      onClick={() =>filterItems("all")}>All</button>
      <button onClick={() => filterItems("breakfast")}>
        Breakfast</button>*/}
    </div>
  );
}
