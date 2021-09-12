import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import People from "./Components/People/People";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Games from "./Components/Home/Games/Games";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/games">
          <Games />
        </Route>
        <Route path="/players">
          <People />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
