import  BurgerImg  from "./assets/images/burger.jpg";
import  PizzaImg  from "./assets/images/pizza.jpg";
import  FrenchFriesImg  from "./assets/images/frenchfries.jpg";
import BurgerItem from "./assets/images/burger-item.jpg";
import KababItem from "./assets/images/kabab-item.jpg";
import PizzaItem from "./assets/images/pizza-item.jpg";
import SandwichItem from "./assets/images/sandwich-item.jpg";
import ShwarmaItem from "./assets/images/shwarma-item.jpg";

import FoodItems from "./components/FoodItems";
import FoodMenu from "./components/FoodMenu";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  let previewItems = [
    { name: "Pizza", image: PizzaImg },
    { name: "Burger", image: BurgerImg },
    { name: "French Fries", image: FrenchFriesImg },
  ];

  let foodMenuItems = [
    {
      name: "Pizza",
      image: PizzaItem,
      price: "2.8",
      servings: "Green Sauce, Pepper, Garlic, Mayonese",
    },
    {
      name: "Burger",
      image: BurgerItem,
      price: "2.2",
      servings: "Chicken Chilli, Garlic, Ketchup, Ginger",
    },
    {
      name: "Shwarma",
      image: ShwarmaItem,
      price: "1.5",
      servings: "Yougart, Chilli Sauce, Mayonese",
    },
    {
      name: "Chapli Kabab",
      image: KababItem,
      price: "4.8",
      servings: "Salad, Yougart Sauce",
    },
    {
      name: "Sandwich",
      image: SandwichItem,
      price: "1.2",
      servings: "Green Sauce, Pepper, Ketchup",
    },
  ];

  return (
    <>
      <Navbar />
      <Header />
      <FoodItems previewItems={previewItems} />
      <FoodMenu foodMenuItems={foodMenuItems} />
      <Footer />
    </>
  );
}

export default App;
