import { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../../context/FirebaseContext";
import { deleteSingleUser, logout } from "../../../firebase";
import Button from "../../common/Button/Button";

function AccountModal({ openModal, setOpenModal }) {
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();
  function handleClose() {
    setOpenModal(false);
  }

  async function handleDelAcc() {
    setOpenModal(false);
    await deleteSingleUser(currentUser.uid);
    logout();
    history.push("/");
  }
  return (
    <div className={`modal ${openModal ? "modal--open" : ""} `}>
      <div className="modal__content">
        <h3 className="modal__header">Czy na pewno chcesz usunąć konto?</h3>
        <div className="modal__buttons">
          <Button source="--dont" clickFunc={handleClose}>
            Nie, nie chce usuwać konta
          </Button>
          <Button source="--alert" clickFunc={handleDelAcc}>
            Tak, usuń konto
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AccountModal;
