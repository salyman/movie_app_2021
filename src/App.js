import React from 'react';

function Food(props){
  return <h1>I Love {props.fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello World!!</h1>
      <Food fav="kimchi" />
      <Food fav="hamburger" />
      <Food fav="stake" />
      <Food fav="pizza" />
    </div>
  );
}

export default App;

