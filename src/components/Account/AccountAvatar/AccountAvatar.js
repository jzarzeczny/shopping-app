import NoAvatar from "../../../images/noAvatar.svg";

function AccountAvatar() {
  return (
    <>
      <div className="avatar__image__container">
        <img className="avatar__image" src={NoAvatar} alt="Avatar"></img>
        <button className="avatar__upload" />
      </div>
    </>
  );
}

export default AccountAvatar;
