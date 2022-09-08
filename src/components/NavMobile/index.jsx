import React from "react";
//Styles
import S from "./styles";
//Components
import ProfileImage from "../ProfileImage";
//Tools
import { useNavigate } from "react-router-dom";
//Hooks
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const NavMobile = ({ toggle, isOpen }) => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const navigate = useNavigate();

  const handleClickLogOut = () => {
    logout();
    navigate("/");
  };

  return (
    <S.MobileNavContainer isOpen={isOpen}>
      <S.Icon onClick={toggle}>
        <S.CloseIcon />
      </S.Icon>
      <S.MobileNavMenu>
        {!user ? (
          <>
            <S.MobileNavLink to="login" onClick={toggle}>
              Login
            </S.MobileNavLink>
            <S.MobileNavLink to="/signup-step1" onClick={toggle}>
              Signup
            </S.MobileNavLink>
          </>
        ) : (
          <>
            <S.WelcomeContainer>
              <ProfileImage image={user.imageUrl} size={4.5} />
              <S.ProfileName>Welcome, {user.firstName}</S.ProfileName>
            </S.WelcomeContainer>
            <S.MobileNavLink to="/my-profile" onClick={toggle}>
              My Profile
            </S.MobileNavLink>
            <S.MobileNavLink to="#" onClick={handleClickLogOut}>
              Logout
            </S.MobileNavLink>
          </>
        )}
      </S.MobileNavMenu>
    </S.MobileNavContainer>
  );
};

export default NavMobile;
