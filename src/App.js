import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import App1 from "./pages/App1";
function App() {
  console.log("Material UI")
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/App1" component={App1} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
      </Switch>
    </Router>
  );
}
export default App;
