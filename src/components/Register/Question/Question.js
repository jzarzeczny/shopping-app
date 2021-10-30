import { Link } from "react-router-dom";

function Question() {
  return (
    <p className="register__question">
      Masz juz konto? <Link to="/login">Zaloguj się</Link>
    </p>
  );
}

export default Question;
