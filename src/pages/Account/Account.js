import { useState } from "react";
import AccountAvatar from "../../components/Account/AccountAvatar/AccountAvatar";
import AccountButtons from "../../components/Account/AccountButtons/AccountButtons";
import AccountContainer from "../../components/Account/AccountContainer/AccountContainer";
import AccountInformation from "../../components/Account/AccountInformation/AccountInformation";
import AccountModal from "../../components/Account/AccountModal/AccountModal";
import Layout from "../../components/Layout/Layout";

function Account() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Layout>
      <AccountContainer>
        <AccountAvatar />
        <AccountInformation />
        <AccountButtons setOpenModal={setOpenModal} />
        <AccountModal openModal={openModal} setOpenModal={setOpenModal} />
      </AccountContainer>
    </Layout>
  );
}

export default Account;
