import Form from "../../components/common/Form/Form";
import Layout from "../../components/Layout/Layout";
import ListsContainer from "../../components/Lists/Container/ListsContainer";
import GroupOfLists from "../../components/Lists/GroupOfLists/GroupOfLists";
import SingleList from "../../components/Lists/SingleList/SingleList";

const inputFields = [{ name: "Nowa kategoria", id: "category" }];

const categoriesMock = [
  { name: "ABCD", id: 1 },
  { name: "EFGH", id: 2 },
];

function Categories() {
  return (
    <Layout>
      <ListsContainer>
        <Form inputFields={inputFields} source="lists" button="Dodaj" />
        <GroupOfLists>
          {categoriesMock.map((singleList, id) => (
            <SingleList source="category" singleList={singleList} key={id} />
          ))}
        </GroupOfLists>
      </ListsContainer>
    </Layout>
  );
}

export default Categories;
