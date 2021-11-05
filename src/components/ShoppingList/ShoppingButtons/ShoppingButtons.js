import Button from "../../common/Button/Button";

function ShoppingButtons({ display }) {
  return (
    <div className="shopping__buttons--action">
      {display ? (
        <>
          <Button source="--danger">Usuń</Button>
          <Button>Zapisz</Button>
        </>
      ) : (
        <>
          <Button source="--danger">Wyczyść</Button>
          <Button>Dodaj</Button>
        </>
      )}
    </div>
  );
}

export default ShoppingButtons;
