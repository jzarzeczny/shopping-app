import Button from "../../common/Button/Button";

function AccountButtons({ setOpenModal, editInfo, editInformations }) {
  function openModal() {
    setOpenModal(true);
  }

  return (
    <div className="account__buttons">
      <Button source="--alert" clickFunc={openModal}>
        Usuń konto
      </Button>

      {editInfo ? (
        <Button form="userForm" clickFunc={editInformations}>
          Zapisz
        </Button>
      ) : (
        <Button clickFunc={editInformations}>Edytuj</Button>
      )}
    </div>
  );
}

export default AccountButtons;
