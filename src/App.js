import "./sass/main.scss";
import Main from "./pages/Main/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/FirebaseContext";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Lists from "./pages/Lists/Lists";
import ShoppingList from "./pages/ShoppingList/ShoppingList";
import Categories from "./pages/Categories/Categories";
import { ListsProvider } from "./context/ListContext";

function App() {
  return (
    <AuthProvider>
      <ListsProvider>
        <Router>
          <Switch>
            <Route path="/category">
              <Categories />
            </Route>
            <Route path="/lists">
              <Lists />
            </Route>
            <Route path="/shoppinglist/:id">
              <ShoppingList />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </Router>
      </ListsProvider>
    </AuthProvider>
  );
}

export default App;
