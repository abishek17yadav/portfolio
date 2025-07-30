import React from 'react'

function SaladCard(props) {
  return (
    <div >
        <h1 style={{backgroundColor:"green", textAlign:'center'}}>Welcome to saladddd...</h1>
        <p>We provid ethe best salads of this world and we are the best in our works Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci perspiciatis dolor sint nihil ipsum qui eos, nostrum alias exercitationem id explicabo, animi impedit assumenda, architecto aut nemo? Consequatur, exercitationem praesentium.</p>

        <p>Name: {props.name}</p>

        <h4>Our items</h4>
 <ul>
    <li>mix veg salad</li>
    <li>Carrot village</li>
    <li>Cucumber care</li>
    </ul>

    </div>
  )
}

export default SaladCard