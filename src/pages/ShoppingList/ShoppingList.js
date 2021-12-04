import { useContext, useState } from "react";
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
      required: true,
      options: categories,
    },

    { name: "Ilość", id: "quantity", required: false },
    { name: "Uwagi", id: "remarks", required: false },
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
  const lists = useLists();
  const singleList = lists.filter((list) => list.id === params.id)[0];

  useEffect(() => {
    if (formData === null) return;
    dispatch({ type: "addToList", element: formData, id: params.id });
    setFormData(null);
  }, [formData, dispatch]);

  useEffect(() => {
    if (currentUser === null) return;

    getUserCategories(currentUser.uid).then((data) => {
      console.log(data.category);
      setCategories(updateInputFields(data.category));
    });
  }, [currentUser, dispatch]);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <Layout>
      {width < breakingPoint ? (
        <>
          {listView ? (
            <>
              {singleList && (
                <>
                  <ShoppingListView
                    listData={singleList}
                    listView={listView}
                    setListView={setListView}
                  />
                  <ShoppingButtons display listData={singleList} />
                </>
              )}
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
          {singleList && (
            <ShoppingListView
              listData={singleList}
              listView={listView}
              setListView={setListView}
            />
          )}

          <ShoppingButtons display listData={singleList} />
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
