import React from 'react'

import PizzaCard from "./PizzaCard";
import BurgerCard from "./BurgerCard";
import SaladCard from "./SaladCard";
function Menu(props) {
  return (
    <div>
        <h1 style={{backgroundColor:"red", textAlign:'center'}}>----The list of food items-----</h1>
        <h1 style={{backgroundColor:"purple", textAlign:'center'}}>OUR MENU</h1>

        <ul>
        <li>{props.name}</li>
        </ul>

        <PizzaCard name="HotCheeze"/>
        <BurgerCard name="Veg Burger"/>
        <SaladCard name="Mix salad"/>
    </div>
  )
}

export default Menu

