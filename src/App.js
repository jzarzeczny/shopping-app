import "./sass/main.scss";
import Main from "./pages/Main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/FirebaseContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {/* <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/add">
            <Add />
          </Route> */}
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
