import AccountAvatar from "../../components/Account/AccountAvatar/AccountAvatar";
import AccountContainer from "../../components/Account/AccountContainer/AccountContainer";
import AccountInformation from "../../components/Account/AccountInformation/AccountInformation";
import Layout from "../../components/Layout/Layout";

function Account() {
  return (
    <Layout>
      <AccountContainer>
        <AccountAvatar />
        <AccountInformation />
      </AccountContainer>
    </Layout>
  );
}

export default Account;
