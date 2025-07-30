import React from 'react'

function BurgerCard(props) {
  return (
    <div >
        <h1 style={{backgroundColor:"orange", textAlign:'center'}}>Welcome to Burger...</h1>
        <p>We provid ethe best Burgers of this world and we are the best in our works Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci perspiciatis dolor sint nihil ipsum qui eos, nostrum alias exercitationem id explicabo, animi impedit assumenda, architecto aut nemo? Consequatur, exercitationem praesentium.</p>

        <p>Name: {props.name}</p>

        <h4>Our items</h4>
 <ul>
    <li>veg burger</li>
    <li>Plain veg burger</li>
    <li>Paneer burger</li>
    </ul>

    </div>

    

  )
}

export default BurgerCard