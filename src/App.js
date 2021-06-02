import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Container from "./components/container/Container";
import Detail from "./components/detail/Detail";
import Encounters from "./components/detail/Encounters";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Navbar />

          <Switch>
            <Route
              path="/pokedex/pokemon/encounters"
              children={<Encounters />}
            />
            <Route path="/pokedex/pokemon/:id" children={<Detail />} />
            <Route path="/pokedex">
              <Container />
            </Route>
            <Route exact path="/">
              <Redirect to="/pokedex" />
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
