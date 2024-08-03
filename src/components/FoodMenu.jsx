import Image from "../assets/burger.jpg";

export default function FoodMenu() {
  return (
    <>
      <div className="food-menu">
        <h2>Food Menu</h2>
        <div className="items">
          <div className="item">
            <img src={Image} alt="" />
            <div>
              <h5>Food Title</h5>
              <h6>$2.3</h6>
              <p>Made with Italian Sauce, Chicken and organic vegtables</p>
              <button>Order Now</button>
            </div>
          </div>
          <div className="item">
            <img src={Image} alt="" />
            <div>
              <h5>Food Title</h5>
              <h6>$2.3</h6>
              <p>Made with Italian Sauce, Chicken and organic vegtables</p>
              <button>Order Now</button>
            </div>
          </div>
          <div className="item">
            <img src={Image} alt="" />
            <div>
              <h5>Food Title</h5>
              <h6>$2.3</h6>
              <p>Made with Italian Sauce, Chicken and organic vegtables</p>
              <button>Order Now</button>
            </div>
          </div>
          <div className="item">
            <img src={Image} alt="" />
            <div>
              <h5>Food Title</h5>
              <h6>$2.3</h6>
              <p>Made with Italian Sauce, Chicken and organic vegtables</p>
              <button>Order Now</button>
            </div>
          </div>
          <div className="item">
            <img src={Image} alt="" />
            <div>
              <h5>Food Title</h5>
              <h6>$2.3</h6>
              <p>Made with Italian Sauce, Chicken and organic vegtables</p>
              <button>Order Now</button>
            </div>
          </div>
          <div className="item">
            <img src={Image} alt="" />
            <div>
              <h5>Food Title</h5>
              <h6>$2.3</h6>
              <p>Made with Italian Sauce, Chicken and organic vegtables</p>
              <button>Order Now</button>
            </div>
          </div>
        </div>
        <a href="">See All Foods</a>
      </div>
    </>
  );
}
