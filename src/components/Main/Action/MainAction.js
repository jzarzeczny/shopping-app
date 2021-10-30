import { useHistory } from "react-router";
import Button from "../../common/Button/Button";

function MainAction() {
  const history = useHistory();
  return (
    <div className="main__action">
      <h1 className="main__action__header">
        Z Nami organizacja Twojej listy zakupów będzie prostrza niż
        kiedykolwiek.
      </h1>
      <Button clickFunc={() => history.push("/register")} source="--action">
        Dołącz teraz!
      </Button>
    </div>
  );
}

export default MainAction;
