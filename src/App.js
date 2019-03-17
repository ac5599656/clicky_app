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
    if (!this.state.used.includes(id)) {
      this.setState({ score: this.state.score + 1 });
      cartoons.sort(() => Math.random() - 0.5);
      cartoons.forEach(cartoon => {
        this.setState({
          used: [...this.state.used, id]
        });
      });
    } else {
      this.setState({ score: 0, used: [] });
    }
  };
  // Map over this.state.cartoons and render a Card component for each friend object
  render() {
    return (
      <div>
        <NavBar score={this.state.score} />
        <Wrapper>
          <div className="row">
            {this.state.cartoons.map(cartoon => (
              <Card
                handleClick={this.handleClick}
                id={cartoon.id}
                key={cartoon.id}
                name={cartoon.name}
                image={cartoon.image}
              />
            ))}
          </div>
        </Wrapper>
      </div>
    );
  }
}
export default App;
