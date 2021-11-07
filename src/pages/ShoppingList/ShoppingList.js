import { useCallback, useState } from "react";
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
      id: "fruits",
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
      id: "vegitables",
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
  const [listData, setListData] = useState(mockedData);
  const [formData, setFormData] = useState(null);
  const breakingPoint = 1024;

  const addItemToArray = useCallback(
    (item) => {
      if (item !== null) {
        item.id = item.product;
        let newList = { ...listData };
        newList["listCategories"].forEach((category) => {
          if (category.id === item.category) {
            console.log("This element should be add to " + category.name);
            category["list"].push(item);
          }
        });
        setFormData(null);
        setListData(newList);
      }
    },
    [formData]
  );

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    addItemToArray(formData);
  }, [formData, addItemToArray]);

  return (
    <Layout>
      {width < breakingPoint ? (
        <>
          {listView ? (
            <>
              <ShoppingListView
                mockedData={listData}
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
                setFormData={setFormData}
              />
              <ShoppingButtons />
            </>
          )}
        </>
      ) : (
        <ShoppingContainer>
          <ShoppingListView
            mockedData={listData}
            listView={listView}
            setListView={setListView}
          />
          <ShoppingButtons display />
          <ShoppingListEdit
            inputFields={inputFields}
            listView={listView}
            setListView={setListView}
            setFormData={setFormData}
          />
          <ShoppingButtons />
        </ShoppingContainer>
      )}
    </Layout>
  );
}

export default ShoppingList;

// Reducer to list menagments ? -> formData, listForm!!!!

// Details html tag for each category of list => product list inside
