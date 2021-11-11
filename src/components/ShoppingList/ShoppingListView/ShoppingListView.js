import ShoppingSection from "../ShoppingSection/ShoppingSection";
import ShoppingDetails from "../ShoppingDetails/ShoppingDetails";
import ShoppingListContainer from "../ShoppingListContainer/ShoppingListContainer";
import ButtonsContainer from "../ButtonsContainer/ButtonsContainer";

function ShoppingListView({ listData, listView, setListView }) {
  return (
    <ShoppingSection>
      <ShoppingListContainer>
        <ButtonsContainer list={listView} setListView={setListView} />
        {listData["listCategories"].length > 0 ? (
          listData["listCategories"].map((category) => (
            <ShoppingDetails
              data={category}
              key={category.name}
            ></ShoppingDetails>
          ))
        ) : (
          <h3>Nie posiadasz jeszcze przedmiotów w koszyku</h3>
        )}
      </ShoppingListContainer>
    </ShoppingSection>
  );
}

export default ShoppingListView;
