import React from 'react'

function PizzaCard(props) {
  return (
    <div >
 <h1 style={{backgroundColor:"pink", textAlign:'center'}}>Welcome to Pizzaaaa...</h1>
 <p>We provid ethe best pizzas of this world and we are the best in our works Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci perspiciatis dolor sint nihil ipsum qui eos, nostrum alias exercitationem id explicabo, animi impedit assumenda, architecto aut nemo? Consequatur, exercitationem praesentium.</p>

 <p>Name: {props.name}</p>
<h4>Our items</h4>
 <ul>
    <li>veg</li>
    <li>Hot cheeze chilly</li>
    <li>Paneer pizza</li>
    </ul>

    </div>
  )
}

export default PizzaCard