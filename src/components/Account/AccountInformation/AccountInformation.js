import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/FirebaseContext";
import { updateUserData } from "../../../firebase";

function AccountInformation({ editInfo, userData, setEditInfo }) {
  const { currentUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const response = await updateUserData(currentUser.uid, data);
    console.log(response);
    reset();
    setEditInfo(false);
  }

  return (
    <form id="userForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="account__information">
        <div className="form__control">
          <label htmlFor="nicknameInfo">Twoje imię</label>
          <input
            disabled={`${editInfo ? "" : "disabled"}`}
            className="form__input"
            id="nicknameInfo"
            {...register("nickname", { required: true })}
            placeholder={userData.nickname}
          />
          {errors["nicknameInfo"] && (
            <span className="form__error">To pole jest wymagane</span>
          )}
        </div>

        <div className="form__control">
          <label htmlFor="emailInfo">Twój email</label>
          <input
            type="email"
            disabled={`${editInfo ? "" : "disabled"}`}
            className="form__input"
            id="emailInfo"
            {...register("email", { required: true })}
            placeholder={userData.email}
          />
          {errors["nicknameInfo"] && (
            <span className="form__error">To pole jest wymagane</span>
          )}
        </div>
      </div>
    </form>
  );
}

export default AccountInformation;
