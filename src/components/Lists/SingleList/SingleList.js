import EditIcon from "../../../images/icons/edit.svg";

function SingleList({ singleList }) {
  return (
    <div className="lists__single">
      <h3 className="lists__name">{singleList.name}</h3>
      <i>
        <img src={EditIcon} alt="edit"></img>
      </i>
    </div>
  );
}

export default SingleList;
