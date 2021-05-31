import "./App.css";
import Container from "./components/container/Container";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Switch>
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
