import { useState } from "react";
import data from "./data";
export default function Menu() {
  //const [btn, setBtn] = useState("All");
  return (
    <div className="menu">
      {data.map((item) => {
        return (
          <div key={item.id} className="items">
            <img src={item.img} alt="" />
            <h3>{item.category}</h3>
            <p>{item.desc}</p>
            <span>${item.price}</span>
          </div>
        );
      })}
    </div>
  );
}
