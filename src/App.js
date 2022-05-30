import Menu from "./Menu";
import Categories from "./Categories";
import items from "./items";
import "./styles.css";
import { useState } from "react";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);

export default function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="App">
      <h1 className="title">Our Menu</h1>
      <div className="underline"></div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </div>
  );
}
