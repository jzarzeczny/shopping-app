function AccountInformation() {
  return (
    <div className="account__information">
      <div className="form__control">
        <label htmlFor="nicknameInfo">Twoje imię</label>
        <input
          disabled
          className="form__input"
          id="nicknameInfo"
          placeholder="NickPlaceHolder"
        />
      </div>
      <div className="form__control">
        <label htmlFor="emailInfo">Twój email</label>
        <input
          disabled
          className="form__input"
          id="emailInfo"
          placeholder="EmailPlaceHolder"
        />
      </div>
    </div>
  );
}

export default AccountInformation;
