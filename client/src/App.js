import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { BookProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <div>
        <BookProvider>
          <Navbar color="dark" />
          <NavbarBrand href="/">Search for a book</NavbarBrand>
          <NavbarBrand href="/">See saved books</NavbarBrand>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
          <Navbar />
        </BookProvider>
      </div>
    </Router>
  )
}

export default App;
