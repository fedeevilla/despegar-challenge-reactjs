import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import DeliveryOnline from "./components/DeliveryOnline";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DeliveryOnline />
      </div>
    );
  }
}

export default App;
