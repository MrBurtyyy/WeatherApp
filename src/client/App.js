import React, { Component } from "react";
import { Container } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/index.scss";

class App extends Component {
  constructor(props) {
    super(props);
    // Init state
  }

  render() {
    return (
      <div className="wrapper">
        <Container fluid>
          <h5>Hello World</h5>
        </Container>
      </div>
    );
  }
}

export default App;
