import Button from "../../common/Button/Button";

function ShoppingButtons({ display, listData }) {
  return (
    <div className="shopping__buttons--action">
      {display ? (
        <>
          <Button source="--danger">Usuń</Button>

          <Button>Zapisz</Button>
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
