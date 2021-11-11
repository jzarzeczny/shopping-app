import { Link } from "react-router-dom";
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
          <Link to={`${"shoppinglist/" + singleList.id}`}>
            <img src={EditIcon} alt="edit" />
          </Link>
        )}
      </i>
    </div>
  );
}

export default SingleList;
