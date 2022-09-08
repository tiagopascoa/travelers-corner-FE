//Styles
import S from "./styles";
//Tools
import { useNavigate } from "react-router-dom";
//Hooks
import { useLogout } from "../../../hooks/useLogout";

const NavDropdown = ({ setDropdown }) => {
  const { logout } = useLogout();
  const navigate = useNavigate();

  const handleClickLogOut = () => {
    logout();
    setDropdown(false);
    navigate("/");
  };

  return (
    <S.DropdownContainer>
      <S.DropdownLink to="/my-profile">
        <S.ProfileIcon />
        My Profile
      </S.DropdownLink>
      <S.DropDownItemContainer onClick={handleClickLogOut}>
        <S.LogoutIcon />
        <S.DropDownItem>Logout</S.DropDownItem>
      </S.DropDownItemContainer>
    </S.DropdownContainer>
  );
};

export default NavDropdown;
