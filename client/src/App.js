import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import { Container } from "./components/Grid";
import './App.css';
import { render } from "@testing-library/react";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Router>
          <Container>
            <ToastContainer
              position="top-center"
              autoClose={4000}
              transition={Zoom}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable={false}
              />
            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/bookshelf" component={Saved} />
              <ROute exact path="/books/:id" component={null} />
              <Route component={null} />
            </Switch>
          </Container>
        </Router>
      </div>
    )
  }
}

export default App;
