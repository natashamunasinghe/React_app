import React from 'react';
import Quesadilla from"./Images/Quesadilla.jpeg";
import Header from './CSSStyling/Header.css';
import Social from "./Social";
import SandraProfile from"./Images/SandraProfile.jpg";



const Food = () => {
    return (
        <div className="social">
            <h1 className="header">Favourite Foods</h1>
                <h2>Pizza</h2>
                    <Social 
                        time="All the time"
                        place="Queen Margharitas"
                        picture="pizza.jpeg"
                    />
                    <Social 
                        time ="Afternoon Siesta"
                        place="Mejico" 
                        picture={ Quesadilla }

                    />
                    <Social 
                        time ="Breaky"
                        place="Pancakes on the Rocks"
                        picture={ Quesadilla }


                    />
                    <Social 
                        time ="During the game"
                        place="My house"
                        picture={ Quesadilla }

                    />
        </div>
    );
}

export default Food;


