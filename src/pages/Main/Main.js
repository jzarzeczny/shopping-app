import React, { useContext } from "react";
import Logo from "../../components/common/Logo/Logo";
import Layout from "../../components/Layout/Layout";
import MainAction from "../../components/Main/Action/MainAction";
import MainContainer from "../../components/Main/MainContainer";
import MainImage from "../../components/Main/MainImage/MainImage";
import { AuthContext } from "../../context/FirebaseContext";

export default function Main() {
  const { currentUser } = useContext(AuthContext);

  return (
    <Layout>
      <MainContainer>
        <Logo source="main" />
        <MainImage />
        <MainAction />
      </MainContainer>
    </Layout>
  );
}
