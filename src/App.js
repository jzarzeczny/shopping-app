import "./sass/main.scss";
import Add from "./pages/Add";
import Main from "./pages/Main";
import { ListContextProvider } from "./context/DisplayListContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <ListContextProvider>
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </ListContextProvider>
    </Router>
  );
}

export default App;
