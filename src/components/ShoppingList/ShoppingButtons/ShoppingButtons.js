import Button from "../../common/Button/Button";
import { updateSingleList } from "../../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../../context/FirebaseContext";
import { useHistory } from "react-router";
import { useListsDisplatch } from "../../../context/ListContext";

function ShoppingButtons({ display, listData }) {
  const { currentUser } = useContext(AuthContext);
  let history = useHistory();

  const dispatch = useListsDisplatch();
  function sendDataToDB() {
    try {
      updateSingleList(currentUser.uid, listData);
    } catch {
      console.log("Update failed");
    }
  }

  async function delateDataFromDB() {
    try {
      dispatch({
        type: "delateList",
        user: currentUser.uid,
        listToDel: listData,
      });
      history.push("/lists");
    } catch {
      console.log("Delate failed");
    }
  }

  return (
    <div className="shopping__buttons--action">
      {display ? (
        <>
          <Button clickFunc={delateDataFromDB} source="--danger">
            Usuń
          </Button>

          <Button clickFunc={sendDataToDB}>Zapisz</Button>
        </>
      ) : (
        <>
          <Button form="form--edit" source="--danger">
            Wyczyść
          </Button>
          <Button form="form--edit" type="submit">
            Dodaj
          </Button>
        </>
      )}
    </div>
  );
}

export default ShoppingButtons;
