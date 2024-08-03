import React from 'react'
import Burger from '../assets/burger.jpg'
import Pizza from '../assets/pizza.jpg'
import FrenchFries from '../assets/frenchfries.jpg'

export default function FoodItems() {
  return (
    <>
    <div className="food-items">
        <h2>Explore Foods</h2>
        <div className="img">
            <img src={Burger} alt="" />
            <img src={Pizza} alt="" />
            <img src={FrenchFries} alt="" />
        </div>
    </div>
    </>
  )
}
