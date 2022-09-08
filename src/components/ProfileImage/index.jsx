import React from "react";
//Styles
import S from "./styles";
//Assets
import avatarImage from "../../assets/images/avatar.png";

const ProfileImage = (props) => {
  const { image, size } = props;
  return <S.Container image={image || avatarImage} size={size} />;
};

export default ProfileImage;
