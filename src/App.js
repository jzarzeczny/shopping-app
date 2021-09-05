import "./sass/main.scss";
import Add from "./pages/Add";
import Main from "./pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add">
          <Add />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
