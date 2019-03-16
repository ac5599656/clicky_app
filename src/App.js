import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cartoons from "./cartoons.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cartoons
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {this.state.cartoons.map(cartoon => (
          <Card
            id={cartoon.id}
            key={cartoon.id}
            name={cartoon.name}
            image={cartoon.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
