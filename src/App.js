import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Container from "./components/container/Container";
import Encounters from "./components/detail/Encounters";
import Navbar from "./components/navbar/Navbar";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Logo from "./components/navbar/Logo";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Logo />
        <Switch>
          <Route path="/pokedex/pokemon/encounters" children={<Encounters />} />

          <Route path="/pokedex">
            <Container />
          </Route>
          <Route exact path="/">
            <Redirect to="/pokedex" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
