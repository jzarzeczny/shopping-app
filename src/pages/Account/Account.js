import { useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react/cjs/react.development";
import AccountAvatar from "../../components/Account/AccountAvatar/AccountAvatar";
import AccountButtons from "../../components/Account/AccountButtons/AccountButtons";
import AccountContainer from "../../components/Account/AccountContainer/AccountContainer";
import AccountInformation from "../../components/Account/AccountInformation/AccountInformation";
import AccountModal from "../../components/Account/AccountModal/AccountModal";
import Layout from "../../components/Layout/Layout";
import { AuthContext } from "../../context/FirebaseContext";
import { getUserData } from "../../firebase";

function Account() {
  const [openModal, setOpenModal] = useState(false);
  const [editInfo, setEditInfo] = useState(false);
  const [userData, setUserData] = useState(null);
  const { currentUser } = useContext(AuthContext);

  function editInformations() {
    if (!editInfo) {
      setEditInfo(true);
    }
  }
  useEffect(() => {
    if (!currentUser) return;
    getUserData(currentUser.uid).then((data) => setUserData(data));
  }, [currentUser, editInfo]);

  return (
    <Layout>
      <AccountContainer>
        <AccountAvatar />
        {userData && (
          <AccountInformation
            editInfo={editInfo}
            userData={userData}
            setEditInfo={setEditInfo}
          />
        )}

        <AccountButtons
          setOpenModal={setOpenModal}
          editInfo={editInfo}
          setEditInfo={setEditInfo}
          editInformations={editInformations}
        />

        <AccountModal openModal={openModal} setOpenModal={setOpenModal} />
      </AccountContainer>
    </Layout>
  );
}

export default Account;
