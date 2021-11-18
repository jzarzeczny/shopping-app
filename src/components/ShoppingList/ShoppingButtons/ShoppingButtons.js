import Button from "../../common/Button/Button";
import { delateSingleList, updateSingleList } from "../../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../../context/FirebaseContext";
import { useHistory } from "react-router";

function ShoppingButtons({ display, listData }) {
  const { currentUser } = useContext(AuthContext);
  let history = useHistory();
  function sendDataToDB() {
    try {
      updateSingleList(currentUser.uid, listData);
    } catch {
      console.log("Update failed");
    }
  }

  async function delateDataFromDB() {
    try {
      await delateSingleList(currentUser.uid, listData);
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
