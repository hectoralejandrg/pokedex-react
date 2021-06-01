import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/container/Container";
import Detail from "./components/detail/Detail";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Switch>
            <Route path="/detail">
              <Detail />
            </Route>
            <Route path="/pokedex">
              <Container />
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
