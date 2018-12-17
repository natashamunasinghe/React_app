import React from 'react';
import Greeting from './About';
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
    <Food />
    <Contact />
    <Footer />
    </div>
  );
};

export default App;
