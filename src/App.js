import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  renderbackup() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div className="App">Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div className="App">
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }
    return (
      <div>
        <Spinner message="Please accept  location request..." />
      </div>
    );
  }
  render() {
    return <div>{this.renderbackup()}</div>;
  }
}

export default App;
