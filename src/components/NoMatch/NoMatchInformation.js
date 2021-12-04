import { Link } from "react-router-dom";

function NoMatchInformation() {
  return (
    <div className="noMatch__information">
      Znalazłeś się w złym miejscu!
      <br />
      Powrót do
      <Link to="/"> strony głównej.</Link>
    </div>
  );
}

export default NoMatchInformation;
