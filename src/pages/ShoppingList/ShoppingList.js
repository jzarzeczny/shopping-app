import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Form from "../../components/common/Form/Form";
import FormContainer from "../../components/common/Form/FormContainer/FormContainer";
import FormImage from "../../components/common/Form/FormImage/FormImage";
import Layout from "../../components/Layout/Layout";
import ButtonsContainer from "../../components/ShoppingList/ButtonsContainer/ButtonsContainer";
import ShoppingButtons from "../../components/ShoppingList/ShoppingButtons/ShoppingButtons";
import ShoppingContainer from "../../components/ShoppingList/ShoppingContainer/ShoppingContainer";
import ShoppingDetails from "../../components/ShoppingList/ShoppingDetails/ShoppingDetails";
import ShoppingEdit from "../../components/ShoppingList/ShoppingEdit/ShoppingEdit";
import ShoppingListContainer from "../../components/ShoppingList/ShoppingListContainer/ShoppingListContainer";
import ShoppingView from "../../components/ShoppingList/ShoppingView/ShoppingView";

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

const inputFields = [
  { name: "Produkt*", id: "product" },
  { name: "Ilość", id: "quantity" },
  {
    name: "Kategoria",
    id: "category",
    type: "select",
    options: [
      { value: "fruits", text: "Owoce" },
      { value: "vegitables", text: "Warzywa" },
    ],
  },
  { name: "Uwagi", id: "remarks" },
];

function ShoppingList() {
  const [listView, setListView] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const breakingPoint = 1024;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <Layout>
      {width < breakingPoint ? (
        <>
          {listView ? (
            <ShoppingView>
              <ShoppingListContainer>
                <ButtonsContainer list={listView} setListView={setListView} />
                {mockedData["listCategories"].map((category) => (
                  <ShoppingDetails
                    data={category}
                    key={category.name}
                  ></ShoppingDetails>
                ))}
              </ShoppingListContainer>
              <ShoppingButtons display />
            </ShoppingView>
          ) : (
            <ShoppingEdit>
              <ButtonsContainer list={listView} setListView={setListView} />
              <FormContainer>
                <FormImage cart />
                <Form inputFields={inputFields} />
              </FormContainer>
              <ShoppingButtons />
            </ShoppingEdit>
          )}
        </>
      ) : (
        <ShoppingContainer>
          <ShoppingView>
            <ShoppingListContainer>
              <ButtonsContainer list={listView} setListView={setListView} />
              {mockedData["listCategories"].map((category) => (
                <ShoppingDetails
                  data={category}
                  key={category.name}
                ></ShoppingDetails>
              ))}
            </ShoppingListContainer>
            <ShoppingButtons display />
          </ShoppingView>
          <ShoppingEdit>
            <ButtonsContainer list={listView} setListView={setListView} />
            <FormContainer>
              <FormImage cart />
              <Form inputFields={inputFields} />
            </FormContainer>
            <ShoppingButtons />
          </ShoppingEdit>
        </ShoppingContainer>
      )}
    </Layout>
  );
}

export default ShoppingList;

// TODO: render Content or edit based on props
// Details html tag for each category of list => product list inside
