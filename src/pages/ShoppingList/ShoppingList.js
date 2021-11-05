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
import ShoppingHeader from "../../components/ShoppingList/ShoppingHeader/ShoppingHeader";
import ShoppingListContainer from "../../components/ShoppingList/ShoppingListContainer/ShoppingListContainer";
import ShoppingSection from "../../components/ShoppingList/ShoppingSection/ShoppingSection";

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
              <ShoppingButtons display />
            </ShoppingSection>
          ) : (
            <ShoppingSection>
              <ButtonsContainer list={listView} setListView={setListView} />
              <FormContainer>
                <FormImage cart />
                <Form inputFields={inputFields} />
              </FormContainer>
              <ShoppingButtons />
            </ShoppingSection>
          )}
        </>
      ) : (
        <ShoppingContainer>
          <ShoppingSection>
            <ShoppingHeader />
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
          <ShoppingButtons display />

          <ShoppingSection edit>
            <ShoppingHeader edit />
            <ButtonsContainer list={listView} setListView={setListView} />
            <FormContainer source="edit">
              <FormImage cart />
              <Form inputFields={inputFields} />
            </FormContainer>
          </ShoppingSection>
          <ShoppingButtons />
        </ShoppingContainer>
      )}
    </Layout>
  );
}

export default ShoppingList;

// Details html tag for each category of list => product list inside
