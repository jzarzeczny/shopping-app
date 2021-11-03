import Layout from "../../components/Layout/Layout";
import ButtonsContainer from "../../components/ShoppingList/ButtonsContainer/ButtonsContainer";
import ShoppingButtons from "../../components/ShoppingList/ShoppingButtons/ShoppingButtons";
import ShoppingDetails from "../../components/ShoppingList/ShoppingDetails/ShoppingDetails";
import ShoppingListContainer from "../../components/ShoppingList/ShoppingListContainer/ShoppingListContainer";
const mockedData = {
  listName: "Test list",
  listData: "25.10.21",
  listCategories: [
    {
      name: "Owoce",
      list: [
        { product: "Banany", amount: "3", remarks: "lorem ipsum dori" },
        {
          product: "Maliny",
          amount: "Opakowanie",
          remarks: "lorem ipsum dori",
        },
      ],
    },
    {
      name: "Warzywa",
      list: [
        { product: "Pomidory", amount: "3 kg", remarks: "lorem ipsum dori" },
      ],
    },
  ],
};

function ShoppingList() {
  return (
    <Layout>
      <ShoppingListContainer>
        <ButtonsContainer list="true" />
        {mockedData["listCategories"].map((category) => (
          <ShoppingDetails
            data={category}
            key={category.name}
          ></ShoppingDetails>
        ))}
      </ShoppingListContainer>
      <ShoppingButtons />
    </Layout>
  );
}

export default ShoppingList;

// TODO: render Content or edit based on props
// Details html tag for each category of list => product list inside
