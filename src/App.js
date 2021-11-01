import "./sass/main.scss";
import Main from "./pages/Main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/FirebaseContext";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Lists from "./pages/Lists/Lists";
import ShoppingList from "./pages/ShoppingList/ShoppingList";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/lists">
            <Lists />
          </Route>
          <Route path="/shoppinglist">
            <ShoppingList />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
