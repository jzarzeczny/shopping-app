import ShoppingSection from "../ShoppingSection/ShoppingSection";
import ShoppingDetails from "../ShoppingDetails/ShoppingDetails";
import ShoppingListContainer from "../ShoppingListContainer/ShoppingListContainer";
import ButtonsContainer from "../ButtonsContainer/ButtonsContainer";
import NoData from "../../common/NoData/NoData";

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
          <NoData>Nie posiadasz jeszcze przedmiotów w koszyku</NoData>
        )}
      </ShoppingListContainer>
    </ShoppingSection>
  );
}

export default ShoppingListView;
