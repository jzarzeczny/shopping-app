import { useCallback, useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Layout from "../../components/Layout/Layout";
import ShoppingListView from "../../components/ShoppingList/ShoppingListView/ShoppingListView";
import ShoppingButtons from "../../components/ShoppingList/ShoppingButtons/ShoppingButtons";
import ShoppingContainer from "../../components/ShoppingList/ShoppingContainer/ShoppingContainer";
import ShoppingListEdit from "../../components/ShoppingList/ShoppingListEdit/ShoppingListEdit";
import { useParams } from "react-router";
import { getSingleList } from "../../firebase";
import { AuthContext } from "../../context/FirebaseContext";

// To achive belove data structure, there are two possible way

// Add the listCategories fetched from DB to orginally created list OR
// Get more data from the form in order to determine what categories does user have
// First things first, need to create Categories first + implement it!

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
  const [listData, setListData] = useState(null);
  const [formData, setFormData] = useState(null);

  const breakingPoint = 1024;
  const { currentUser } = useContext(AuthContext);

  let params = useParams();

  const addItemToArray = useCallback(
    (item) => {
      console.log("Im adding to array");

      if (item !== null) {
        console.log(item);
        item.id = item.product;
        let newList = { ...listData };
        console.log(newList);
        if (newList["listCategories"].length > 0) {
          newList["listCategories"].forEach((category) => {
            console.log("in for each loop");
            if (category.id === item.category) {
              console.log("in if statment");
              category["list"].push(item);
            } else {
              console.log("im in else statment ");
              newList[item.category] = [];
              newList[item.category].push(item);
              console.log(newList);
            }
          });
        } else {
          // newList["listCategories"][item.category].push(item);
        }
        setFormData(null);
        setListData(newList);
      }
    },
    [formData]
  );

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    addItemToArray(formData);
  }, [formData, addItemToArray]);

  useEffect(() => {
    if (currentUser) {
      getSingleList(currentUser.uid).then((data) =>
        setListData(data["lists"].filter((list) => list.id === params.id)[0])
      );
    }
  }, [currentUser]);

  return (
    <Layout>
      {width < breakingPoint ? (
        <>
          {listView ? (
            <>
              <ShoppingListView
                listData={listData}
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
          {listData && (
            <ShoppingListView
              listData={listData}
              listView={listView}
              setListView={setListView}
            />
          )}

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
