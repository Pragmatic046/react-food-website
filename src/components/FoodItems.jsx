function FoodItems({ previewItems }) {
  return (
    <div className="preview-items">
      <h1>Explore Foods</h1>
      <div className="cards">
        {previewItems.map((food, index) => (
          <>
            <div className="card" key={index}>
              <img src={food.image} alt={food.name} />
              <p>{food.name}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default FoodItems;
