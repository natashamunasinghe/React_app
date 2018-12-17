import React from 'react';
import Quesadilla from"./Images/Quesadilla.jpeg";

const Food = () => {
    return <div><h2>Favourite Foods</h2>
            <h4>Pizza</h4>
            {/* <img src="https://bit.ly/2rJ4rnn" /> */}
            <p>Best time to eat: <span>All the time</span></p>
            <p>Best place: <span>Queen Margharitas</span></p>
            <h4>Quesadillas</h4>
            <img src={ Quesadilla } />
            <p>Best time to eat: <span>Afternoon Siesta</span></p>
            <p>Best place: <span>Mejico</span></p>
            <h4>Icecream Pancakes</h4>
            {/* <img src="https://bit.ly/2zUznp2" /> */}
            <p>Best time to eat: <span>Breaky</span></p>
            <p>Best place: <span>Pancakes on the Rocks</span></p>
            <h4>Loaded Fries</h4>
            {/* <img src="https://bit.ly/2GdfYVK" /> */}
            <p>Best time to eat: <span>During the game</span></p>
            <p>Best place: <span>My House</span></p>
        </div>
};


export default Food;
