import "./sass/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/FirebaseContext";
import { ListsProvider } from "./context/ListContext";
import Main from "./pages/Main/Main";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Lists from "./pages/Lists/Lists";
import ShoppingList from "./pages/ShoppingList/ShoppingList";
import Categories from "./pages/Categories/Categories";
import Account from "./pages/Account/Account";
import NoMatch from "./pages/NoMatch/NoMatch";

function App() {
  return (
    <AuthProvider>
      <ListsProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/category">
              <Categories />
            </Route>
            <Route path="/lists">
              <Lists />
            </Route>
            <Route path="/shoppinglist/:id">
              <ShoppingList />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </ListsProvider>
    </AuthProvider>
  );
}

export default App;
