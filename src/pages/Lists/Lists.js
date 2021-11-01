import Form from "../../components/common/Form/Form";
import Layout from "../../components/Layout/Layout";
import ListsContainer from "../../components/Lists/Container/ListsContainer";
import GroupOfLists from "../../components/Lists/GroupOfLists/GroupOfLists";
import SingleList from "../../components/Lists/SingleList/SingleList";

const inputFields = [{ name: "Nowa Lista", id: "newList" }];

const GroupOfListMock = [
  { name: "First" },
  { name: "Second" },
  { name: "Third" },
  { name: "Fourth" },
];

function Lists() {
  return (
    <Layout>
      <ListsContainer>
        <Form inputFields={inputFields} button="Dodaj" />
        <GroupOfLists>
          {GroupOfListMock.map((singleList, id) => (
            <SingleList singleList={singleList} key={id} />
          ))}
        </GroupOfLists>
      </ListsContainer>
    </Layout>
  );
}

export default Lists;
