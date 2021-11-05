import { BinIcon } from "../../../images/icons";
import EditIcon from "../../../images/icons/edit.svg";

function SingleList({ singleList, source }) {
  return (
    <div className="lists__single">
      <h3 className="lists__name">{singleList.name}</h3>
      <i>
        {source === "category" ? (
          <img src={BinIcon} alt="bin" />
        ) : (
          <img src={EditIcon} alt="edit" />
        )}
      </i>
    </div>
  );
}

export default SingleList;
