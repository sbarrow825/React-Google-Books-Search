import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/Search";
import SavedPage from "./pages/Saved";
import { BookProvider } from "./utils/GlobalState";
import Navbar from "./components/Navbar"

function App() {

  return (
    <div>
      <Router>
        <BookProvider>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/saved" component={SavedPage} />
              <Route component={SearchPage} />
            </Switch>
          </div>
        </BookProvider>
      </Router>
    </div>
  );
}

export default App;
