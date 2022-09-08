import React, { useState } from "react";
//Styles
import S from "./styles";
//Components
import ProfileImage from "../ProfileImage";
import NavDropdown from "./NavDropdown";
/* import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg"; */
//Hooks
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = ({ toggle }) => {
  const [dropdown, setDropdown] = useState(false);
  const { user } = useAuthContext();

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <>
      <S.Nav>
        <S.NavbarContainer>
          <S.NavBrandWrapper>
            {/* <LogoIcon style={{width: "3rem", height: "auto"}}/> */}
            <S.BrandText to={!user ? "/" : "/feed"}>
              Travelers Corner
            </S.BrandText>
          </S.NavBrandWrapper>
          <S.MobileIcon onClick={toggle}>
            <S.HamburguerIcon />
          </S.MobileIcon>
          <S.NavMenu>
            {!user ? (
              <>
                <S.NavItem>
                  <S.NavLinks to="/login">Login</S.NavLinks>
                </S.NavItem>
                <S.NavItem>
                  <S.NavLinks to="/signup-step1">Sign Up</S.NavLinks>
                </S.NavItem>
              </>
            ) : (
              <S.ProfileNavItem
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                /* onClick={() => setDropdown(!dropdown)} */
              >
                <ProfileImage image={user.imageUrl} />
                <S.ProfileName>Welcome, {user.firstName}</S.ProfileName>
                <S.ArrowDown />
                {/* <NavDropdown setDropdown={setDropdown} /> */}
                {dropdown && <NavDropdown setDropdown={setDropdown} />}
              </S.ProfileNavItem>
            )}
          </S.NavMenu>
        </S.NavbarContainer>
      </S.Nav>
    </>
  );
};

export default Navbar;
