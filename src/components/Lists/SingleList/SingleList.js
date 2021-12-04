import { Link } from "react-router-dom";
import { BinIcon } from "../../../images/icons";
import EditIcon from "../../../images/icons/edit.svg";

function SingleList({ singleList, source, onClickHandler }) {
  return (
    <div className="lists__single">
      <h3 className="lists__name">{singleList.name}</h3>
      <i className="lists__button">
        {source === "category" ? (
          <img
            src={BinIcon}
            alt="bin"
            onClick={() => onClickHandler(singleList.id)}
          />
        ) : (
          <Link
            to={{
              pathname: `${"shoppinglist/" + singleList.id}`,
              state: { listName: singleList.name },
            }}
          >
            <img src={EditIcon} alt="edit" />
          </Link>
        )}
      </i>
    </div>
  );
}

export default SingleList;
