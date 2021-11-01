import Layout from "../../components/Layout/Layout";
import ButtonsContainer from "../../components/ShoppingList/ButtonsContainer/ButtonsContainer";
import ShoppingDetails from "../../components/ShoppingList/ShoppingDetails/ShoppingDetails";
import ShoppingListContainer from "../../components/ShoppingList/ShoppingListContainer/ShoppingListContainer";

function ShoppingList() {
  return (
    <Layout>
      <ShoppingListContainer>
        <ButtonsContainer list="true" />
        <ShoppingDetails>bla bla bla</ShoppingDetails>
      </ShoppingListContainer>
    </Layout>
  );
}

export default ShoppingList;

// TODO: render Content or edit based on props
// Details html tag for each category of list => product list inside
