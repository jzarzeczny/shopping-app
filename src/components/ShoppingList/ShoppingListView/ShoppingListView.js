import ShoppingSection from "../ShoppingSection/ShoppingSection";
import ShoppingButtons from "../ShoppingButtons/ShoppingButtons";
import ShoppingDetails from "../ShoppingDetails/ShoppingDetails";
import ShoppingListContainer from "../ShoppingListContainer/ShoppingListContainer";
import ButtonsContainer from "../ButtonsContainer/ButtonsContainer";

function ShoppingListView({ mockedData, listView, setListView }) {
  return (
    <ShoppingSection>
      <ShoppingListContainer>
        <ButtonsContainer list={listView} setListView={setListView} />
        {mockedData["listCategories"].map((category) => (
          <ShoppingDetails
            data={category}
            key={category.name}
          ></ShoppingDetails>
        ))}
      </ShoppingListContainer>
    </ShoppingSection>
  );
}

export default ShoppingListView;
