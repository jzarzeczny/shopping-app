import Form from "../../common/Form/Form";
import FormContainer from "../../common/Form/FormContainer/FormContainer";
import FormImage from "../../common/Form/FormImage/FormImage";
import ShoppingSection from "../ShoppingSection/ShoppingSection";
import ButtonsContainer from "../ButtonsContainer/ButtonsContainer";

function ShoppingListEdit({
  listView,
  setListView,
  inputFields,
  setAddFormData,
}) {
  return (
    <ShoppingSection edit>
      <ButtonsContainer list={listView} setListView={setListView} />
      <FormContainer source="edit">
        <FormImage cart />
        <Form
          inputFields={inputFields}
          dataGetter={setAddFormData}
          source="edit"
        />
      </FormContainer>
    </ShoppingSection>
  );
}

export default ShoppingListEdit;
