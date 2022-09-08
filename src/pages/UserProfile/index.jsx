import React from "react";
//Styles
import S from "./styles";
//Components
import UserProfileCard from "../../components/Profile/UserProfileCard";

const UserProfile = () => {
  return (
    <S.ProfilePage>
      <S.ProfilePageLayout>
        <UserProfileCard />
      </S.ProfilePageLayout>
    </S.ProfilePage>
  );
};

export default UserProfile;
