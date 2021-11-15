import { useCallback, useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Layout from "../../components/Layout/Layout";
import ShoppingListView from "../../components/ShoppingList/ShoppingListView/ShoppingListView";
import ShoppingButtons from "../../components/ShoppingList/ShoppingButtons/ShoppingButtons";
import ShoppingContainer from "../../components/ShoppingList/ShoppingContainer/ShoppingContainer";
import ShoppingListEdit from "../../components/ShoppingList/ShoppingListEdit/ShoppingListEdit";
import { useParams } from "react-router";
import { getSingleList, getUserCategories } from "../../firebase";
import { AuthContext } from "../../context/FirebaseContext";

const updateInputFields = (categories) => {
  return [
    { name: "Produkt*", id: "product" },
    {
      name: "Kategoria",
      id: "category",
      type: "select",
      options: categories,
    },

    { name: "Ilość", id: "quantity" },
    { name: "Uwagi", id: "remarks" },
  ];
};

function ShoppingList() {
  const [listView, setListView] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [listData, setListData] = useState(null);
  const [formData, setFormData] = useState(null);
  const [categories, setCategories] = useState(null);

  const breakingPoint = 1024;
  const { currentUser } = useContext(AuthContext);

  let params = useParams();

  const addItemToArray = useCallback(
    (item) => {
      if (item === null) return;
      item.id = item.product;
      let newList = { ...listData };

      function checkOfElementIsInList(arr, el) {
        const newArray = arr.filter((arrEl) => arrEl.name === el.category);
        if (newArray.length === 0) {
          return false;
        } else return true;
      }
      if (checkOfElementIsInList(newList.listCategories, item)) {
        newList.listCategories.forEach((elements) => {
          if (elements.name === item.category) {
            elements.list.push(item);
          }
        });
        return;
      } else {
        newList.listCategories.push({
          name: item.category,
          id: item.category,
          list: [item],
        });
      }

      setFormData(null);
      setListData(newList);
    },
    [listData]
  );

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    addItemToArray(formData);
  }, [formData, addItemToArray]);

  useEffect(() => {
    if (currentUser === null) return;

    getSingleList(currentUser.uid).then((data) =>
      setListData(data["lists"].filter((list) => list.id === params.id)[0])
    );
    getUserCategories(currentUser.uid).then((data) =>
      setCategories(updateInputFields(data.category))
    );
  }, [currentUser]);

  console.log(listData);

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
              <ShoppingButtons display listData={listData} />
            </>
          ) : (
            <>
              <ShoppingListEdit
                inputFields={categories}
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
          {categories && (
            <ShoppingListEdit
              inputFields={categories}
              listView={listView}
              setListView={setListView}
              setFormData={setFormData}
            />
          )}
          <ShoppingButtons listData={listData} />
        </ShoppingContainer>
      )}
    </Layout>
  );
}

export default ShoppingList;

// Reducer to list menagments ? -> formData, listForm!!!!

// Details html tag for each category of list => product list inside
