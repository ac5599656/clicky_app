import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import cartoons from "./cartoons.json";

class App extends Component {
  // Setting this.state.friends to the cartoons json array
  state = {
    score: 0,
    cartoons: cartoons,
    used: []
  };

  // handleIncrement increases this.state.count by 1
  handleClick = id => {
    const { used, score: oldScore } = this.state;
    const score = oldScore + 1;

    if (!used.includes(id)) {
      this.setState({ score });
      cartoons.sort(() => Math.random() - 0.5);

      this.setState({
        used: [...used, id]
      });
    } else {
      this.setState({ score: 0, used: [] });
    }
  };
  // Map over this.state.cartoons and render a Card component for each friend object
  render() {
    const { cartoons, score } = this.state;

    return (
      <div>
        <NavBar score={score} />
        <Wrapper>
          <div className="row">
            {cartoons.map(({ id, name, image }) => (
              <Card
                handleClick={this.handleClick}
                id={id}
                key={id}
                name={name}
                image={image}
              />
            ))}
          </div>
        </Wrapper>
      </div>
    );
  }
}
export default App;
