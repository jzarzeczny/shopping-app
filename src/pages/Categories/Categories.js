import { useCallback, useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Form from "../../components/common/Form/Form";
import Layout from "../../components/Layout/Layout";
import ListsContainer from "../../components/Lists/Container/ListsContainer";
import GroupOfLists from "../../components/Lists/GroupOfLists/GroupOfLists";
import SingleList from "../../components/Lists/SingleList/SingleList";
import { AuthContext } from "../../context/FirebaseContext";
import {
  pushNewCategory,
  getUserCategories,
  updateUserCategories,
} from "../../firebase";

const inputFields = [{ name: "Nowa kategoria", id: "category" }];

function Categories() {
  const [getCategories, setGetCategories] = useState(null);
  const [userCategories, setUserCategories] = useState(null);
  const { currentUser } = useContext(AuthContext);

  // Filter out the field from db
  const delateElementFromCategoryList = useCallback(
    (id) => {
      const newList = userCategories.filter((category) => category.id !== id);
      updateUserCategories(currentUser.uid, { category: newList });
    },
    [userCategories]
  );

  useEffect(() => {
    if (getCategories) {
      // Send category to FB
      pushNewCategory(currentUser.uid, {
        name: getCategories.category,
        id: getCategories.category,
      });
      setGetCategories(null);
    }
  }, [getCategories]);

  useEffect(() => {
    if (currentUser === null) return;

    getUserCategories(currentUser.uid).then((data) => {
      setUserCategories(data.category);
    });
  }, [currentUser, getCategories]);

  console.log(userCategories);
  return (
    <Layout>
      <ListsContainer>
        <Form
          inputFields={inputFields}
          dataGetter={setGetCategories}
          source="lists"
          button="Dodaj"
        />
        <GroupOfLists>
          {userCategories ? (
            userCategories.map((singleList) => (
              <SingleList
                source="category"
                singleList={singleList}
                key={singleList.id}
                onClickHandler={delateElementFromCategoryList}
              />
            ))
          ) : (
            <h3>Dodaj kategorię</h3>
          )}
        </GroupOfLists>
      </ListsContainer>
    </Layout>
  );
}

export default Categories;
