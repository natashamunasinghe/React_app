import React from 'react';

//Array.method for rendering list
function ProfileList() {
    const listing = ["Pop culture maven. Beer fan. Award-winning music junkie. Extreme coffee enthusiast. Thinker. Tv specialist.", "Friendly web maven. Bacon lover. General internet specialist. Incurable travel scholar.", "Subtly charming twitter lover. Social media fan. Incurable travel geek. Lifelong pop culture specialist. Tv scholar.", "Unable to type with boxing gloves on. Proud bacon fan. Music junkie. Coffee ninja. Beer specialist."];
    const listItems = listing.map((listing) =>
     <li>{listing}</li>
    );
    return (
    <ul>{listItems}</ul>
    );
}

export default ProfileList;

