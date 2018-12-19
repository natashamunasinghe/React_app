import React from 'react';

const Social = (props) => {
    return (
        <div className="social">
                    <img alt="food" src={props.picture} />
                    <p className="time">Best time to eat: <span>{props.time}</span></p>
                    <p className="place">Best place: <span>{props.place}</span></p>
        </div>
    );

}

export default Social;