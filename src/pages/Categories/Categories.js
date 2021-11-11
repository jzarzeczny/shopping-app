import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Form from "../../components/common/Form/Form";
import Layout from "../../components/Layout/Layout";
import ListsContainer from "../../components/Lists/Container/ListsContainer";
import GroupOfLists from "../../components/Lists/GroupOfLists/GroupOfLists";
import SingleList from "../../components/Lists/SingleList/SingleList";
import { AuthContext } from "../../context/FirebaseContext";
import { pushNewCategory, getUserCategories } from "../../firebase";

const inputFields = [{ name: "Nowa kategoria", id: "category" }];

function Categories() {
  const [getCategories, setGetCategories] = useState(null);
  const [userCategories, setUserCategories] = useState(null);
  const { currentUser } = useContext(AuthContext);
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
    if (currentUser) {
      getUserCategories(currentUser.uid).then((data) => {
        setUserCategories(data.category);
      });
    }
  }, [currentUser]);
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
