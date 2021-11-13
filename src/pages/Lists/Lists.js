import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Form from "../../components/common/Form/Form";
import Layout from "../../components/Layout/Layout";
import ListsContainer from "../../components/Lists/Container/ListsContainer";
import GroupOfLists from "../../components/Lists/GroupOfLists/GroupOfLists";
import SingleList from "../../components/Lists/SingleList/SingleList";
import { AuthContext } from "../../context/FirebaseContext";
import { getLists, pushNewList } from "../../firebase";
import { revisedRandId } from "../../utils/idGenerator";

const inputFields = [{ name: "Nowa Lista", id: "newList" }];

function Lists() {
  const [listFormData, setListFormData] = useState(null);
  const [shoppingLists, setShoppingLists] = useState(null);

  const { currentUser } = useContext(AuthContext);

  // Delate a category from list of categories

  // Add list to lits
  useEffect(() => {
    if (currentUser && listFormData) {
      pushNewList(currentUser.uid, {
        name: listFormData.newList,
        id: revisedRandId(),
        listCategories: [],
      }).then(
        getLists(currentUser.uid).then((data) => {
          setShoppingLists(data.lists);
        })
      );
    }
  }, [listFormData]);
  // Get list data from FB
  useEffect(() => {
    if (currentUser === null) return;

    getLists(currentUser.uid).then((data) => {
      setShoppingLists(data.lists);
    });
  }, [currentUser]);

  return (
    <Layout>
      <ListsContainer>
        <Form
          inputFields={inputFields}
          dataGetter={setListFormData}
          source="lists"
          button="Dodaj"
        />
        <GroupOfLists>
          {shoppingLists ? (
            shoppingLists.map((singleList) => (
              <SingleList singleList={singleList} key={singleList.id} />
            ))
          ) : (
            <h3>Nie masz jeszcze listy, stwórz nową.</h3>
          )}
        </GroupOfLists>
      </ListsContainer>
    </Layout>
  );
}

export default Lists;
