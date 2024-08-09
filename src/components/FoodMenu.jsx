export default function FoodMenu({ foodMenuItems }) {
  return (
    <>
      <div className="food-menu">
        <h1 className="food-menu-heading">Food Menu</h1>
        <div className="food-menu-items">
          {foodMenuItems.map((food, index) => (
            <>
              <div className="menu-card" key={index}>
                  <img src={food.image} alt={food.name} />
                <div className="food-item-details">
                  <h1>{food.name}</h1>
                  <h2>${food.price}</h2>
                  <p>{food.servings}</p>
                  <button>Order Now</button>
                </div>
              </div>
            </>
          ))}
        </div>
        <p className="see-all-foods"> See All Foods</p>
      </div>
    </>
  );
}
