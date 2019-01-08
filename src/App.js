import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import DeliveryOnline from "./components/DeliveryOnline";
import TableSearch from "./components/TableSearch";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path="/" exact component={TableSearch} />
          <Route path="/create/" component={DeliveryOnline} />
          <Route
            path="/update/:id"
            render={props => <DeliveryOnline id={props.match.params.id} />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
