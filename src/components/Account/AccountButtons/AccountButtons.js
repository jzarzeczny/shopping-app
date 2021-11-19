import Button from "../../common/Button/Button";

function AccountButtons() {
  return (
    <div className="account__buttons">
      <Button source="--alert">Usuń konto</Button>
      <Button>Edytuj</Button>
    </div>
  );
}

export default AccountButtons;
