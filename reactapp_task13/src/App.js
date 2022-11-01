import React from 'react';
import { LoggedIn } from './stories/Header.stories';
import { Normal } from './stories/Input.stories';
import { Number } from './stories/Input.stories';
import { Primary } from './stories/Button.stories';
import { Card } from './Card.js';
import { Footer } from './Footer.js';

const App = () => {

  const handleClick = () => {
    alert("hello");
  }

  return (
    <>
      <LoggedIn />
      <br></br>
      <Normal label="First Name: " placeholder="Please enter first name"/>
      <br></br><br></br>
      <Normal label="Last Name: " placeholder="Please enter last name"/>
      <br></br><br></br>
      <Number label="Age: " placeholder="Please enter age"/>
      <br></br><br></br>
      <Number label="Contact Number: " placeholder="Please enter contact number"/>
      <br></br><br></br>
      <Primary primary size="small" label="Submit Form"/>
      <hr></hr>
      <br></br>
      <Card />
      <br></br>
      <Footer />
    </>
  )
}

export default App;
