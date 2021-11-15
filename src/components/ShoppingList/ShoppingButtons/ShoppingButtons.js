import Button from "../../common/Button/Button";
import { updateSingleList } from "../../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../../context/FirebaseContext";

function ShoppingButtons({ display, listData }) {
  const { currentUser } = useContext(AuthContext);
  function sendDataToDB() {
    try {
      // console.log(listData);

      console.log("Updating list");
      updateSingleList(currentUser.uid, listData);
    } catch {
      console.log("Update failed");
    }
  }
  return (
    <div className="shopping__buttons--action">
      {display ? (
        <>
          <Button source="--danger">Usuń</Button>

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
