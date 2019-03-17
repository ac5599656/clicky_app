import React from "react";

const NavBar = props => (
  <nav className="navbar navbar-expand-lg">
    <h3>Clicky Game</h3>

    <h5 className="ml-auto mt-2" id="counters">
      Score: {props.score}
    </h5>
  </nav>
);

export default NavBar;
