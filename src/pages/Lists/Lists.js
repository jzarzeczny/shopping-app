import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Form from "../../components/common/Form/Form";
import NoData from "../../components/common/NoData/NoData";
import Layout from "../../components/Layout/Layout";
import ListsContainer from "../../components/Lists/Container/ListsContainer";
import GroupOfLists from "../../components/Lists/GroupOfLists/GroupOfLists";
import SingleList from "../../components/Lists/SingleList/SingleList";
import { AuthContext } from "../../context/FirebaseContext";
import { useLists, useListsDisplatch } from "../../context/ListContext";
import { revisedRandId } from "../../utils/idGenerator";

const inputFields = [{ name: "Nowa Lista", id: "newList" }];

function Lists() {
  const [listFormData, setListFormData] = useState(null);

  const { currentUser } = useContext(AuthContext);

  const lists = useLists();
  const dispatch = useListsDisplatch();
  console.log(lists);
  // Add list to lits

  useEffect(() => {
    if (currentUser && listFormData) {
      console.log(listFormData);
      dispatch({
        type: "addList",
        name: listFormData.newList,
        id: revisedRandId(),
        listCattegories: [],
        user: currentUser.uid,
      });
    }
  }, [listFormData]);
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
          {lists && lists.length > 0 ? (
            lists.map((singleList) => (
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
