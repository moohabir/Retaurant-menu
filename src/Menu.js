export default function Menu({ items }) {
  //menu component is used to show the list of items
  return (
    <div className="navbar">
      {items.map((menuItems) => {
        const { id, title, desc, price, img } = menuItems;
        return (
          <article key={id}>
            <img src={img} alt={price} />
            <div>
              <header>
                <h4>{title}</h4>
                <p>${price}</p>
                <p>{desc}</p>
              </header>
            </div>
          </article>
        );
      })}
    </div>
  );
}
