import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Layout from "../../components/Layout/Layout";
import ShoppingListView from "../../components/ShoppingList/ShoppingListView/ShoppingListView";
import ShoppingButtons from "../../components/ShoppingList/ShoppingButtons/ShoppingButtons";
import ShoppingContainer from "../../components/ShoppingList/ShoppingContainer/ShoppingContainer";
import ShoppingListEdit from "../../components/ShoppingList/ShoppingListEdit/ShoppingListEdit";

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
  {
    name: "Kategoria",
    id: "category",
    type: "select",
    options: [
      { value: "fruits", text: "Owoce" },
      { value: "vegitables", text: "Warzywa" },
    ],
  },

  { name: "Ilość", id: "quantity" },
  { name: "Uwagi", id: "remarks" },
];

function ShoppingList() {
  const [listView, setListView] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [addFormData, setAddFormData] = useState(null);
  const breakingPoint = 1024;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  console.log(addFormData);

  return (
    <Layout>
      {width < breakingPoint ? (
        <>
          {listView ? (
            <>
              <ShoppingListView
                mockedData={mockedData}
                listView={listView}
                setListView={setListView}
              />
              <ShoppingButtons display />
            </>
          ) : (
            <>
              <ShoppingListEdit
                inputFields={inputFields}
                listView={listView}
                setListView={setListView}
                setAddFormData={setAddFormData}
              />
              <ShoppingButtons />
            </>
          )}
        </>
      ) : (
        <ShoppingContainer>
          <ShoppingListView
            mockedData={mockedData}
            listView={listView}
            setListView={setListView}
          />
          <ShoppingButtons display />
          <ShoppingListEdit
            inputFields={inputFields}
            listView={listView}
            setListView={setListView}
            setAddFormData={setAddFormData}
          />
          <ShoppingButtons />
        </ShoppingContainer>
      )}
    </Layout>
  );
}

export default ShoppingList;

// Details html tag for each category of list => product list inside
