import Button from "../../common/Button/Button";

function AccountButtons({ setOpenModal }) {
  function openModal() {
    setOpenModal(true);
  }
  return (
    <div className="account__buttons">
      <Button source="--alert" clickFunc={openModal}>
        Usuń konto
      </Button>
      <Button>Edytuj</Button>
    </div>
  );
}

export default AccountButtons;
