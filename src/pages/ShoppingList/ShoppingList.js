import { useCallback, useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Layout from "../../components/Layout/Layout";
import ShoppingListView from "../../components/ShoppingList/ShoppingListView/ShoppingListView";
import ShoppingButtons from "../../components/ShoppingList/ShoppingButtons/ShoppingButtons";
import ShoppingContainer from "../../components/ShoppingList/ShoppingContainer/ShoppingContainer";
import ShoppingListEdit from "../../components/ShoppingList/ShoppingListEdit/ShoppingListEdit";
import { useParams } from "react-router";
import { getUserCategories } from "../../firebase";
import { AuthContext } from "../../context/FirebaseContext";
import { useLists, useListsDisplatch } from "../../context/ListContext";

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
  const [formData, setFormData] = useState(null);
  const [categories, setCategories] = useState(null);

  const breakingPoint = 1024;
  const { currentUser } = useContext(AuthContext);

  let params = useParams();

  const dispatch = useListsDisplatch();
  const list = useLists().filter((list) => list.id === params.id);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    if (formData === null) return;
    dispatch({ type: "addToList", element: formData, id: params.id });
    setFormData(null);
  }, [formData, dispatch]);

  useEffect(() => {
    if (currentUser === null) return;

    getUserCategories(currentUser.uid).then((data) =>
      setCategories(updateInputFields(data.category))
    );
  }, [currentUser, dispatch]);
  return (
    <Layout>
      {width < breakingPoint ? (
        <>
          {listView ? (
            <>
              <ShoppingListView
                listData={list}
                listView={listView}
                setListView={setListView}
              />
              <ShoppingButtons display listData={list} />
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
          {list && (
            <ShoppingListView
              listData={list}
              listView={listView}
              setListView={setListView}
            />
          )}

          <ShoppingButtons display listData={list} />
          {categories && (
            <ShoppingListEdit
              inputFields={categories}
              listView={listView}
              setListView={setListView}
              setFormData={setFormData}
            />
          )}
          <ShoppingButtons />
        </ShoppingContainer>
      )}
    </Layout>
  );
}

export default ShoppingList;

// Reducer to list menagments ? -> formData, listForm!!!!

// Details html tag for each category of list => product list inside
