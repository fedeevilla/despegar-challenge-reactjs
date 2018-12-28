import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import DeliveryOnline from "./components/DeliveryOnline";
import TableSearch from "./components/TableSearch";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={TableSearch} />
          <Route path="/create/" component={DeliveryOnline} />
          <Route path="/update/:id" component={DeliveryOnline} />
        </div>
      </Router>
    );
  }
}

export default App;
