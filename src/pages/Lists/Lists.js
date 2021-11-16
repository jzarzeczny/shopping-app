import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Form from "../../components/common/Form/Form";
import NoData from "../../components/common/NoData/NoData";
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

  console.log(shoppingLists);

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
          {shoppingLists && shoppingLists.length > 0 ? (
            shoppingLists.map((singleList) => (
              <SingleList singleList={singleList} key={singleList.id} />
            ))
          ) : (
            <NoData>Nie masz jeszcze listy, stwórz nową.</NoData>
          )}
        </GroupOfLists>
      </ListsContainer>
    </Layout>
  );
}

export default Lists;
