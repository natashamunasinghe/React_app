import React from 'react';
import Greeting from './About';
import ProfileList from './ProfileList';
import Hello from './Welcome';
import Food from './Favourite_foods';
import Contact from './Contact_details';
import Footer from './Footer';

//functional component
const App = () => {
  return (
    <div>
    <Hello />
    <Greeting />
    <ProfileList />
    <Food />
    <Contact />
    <Footer />
    </div>
  );
};


export default App;
