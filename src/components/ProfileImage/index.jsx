import React from "react";
//Styles
import S from "./styles";
//Assets
import avatarImage from "../../assets/images/avatar.png";

const ProfileImage = (props) => {
  const { image, size, handleClick , cursor } = props;

  return (
    <S.Container
      image={image || avatarImage}
      size={size}
      onClick={handleClick}
      cursor={cursor}
    />
  );
};

export default ProfileImage;
