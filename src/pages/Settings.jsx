import React from "react";
import PageLayout from "../components/shared/page-layout/PageLayout";
import AccountSettingsWrapper from "../components/shared/account-settings-wrapper/AccountSettingsWrapper";
import { useSelector } from "react-redux";


const Settings = () => {

const userData = useSelector ((state) => state.app.auth.loggedUser.userInfo)

  return (
    <PageLayout>
      <AccountSettingsWrapper userData={userData}/>
    </PageLayout>
  );
};

export default Settings;
