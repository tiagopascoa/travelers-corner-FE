import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const styles = {
  LogoutIcon: styled(MdLogout)`
    width: 1.5rem;
    height: 2rem;
  `,
  ProfileIcon: styled(CgProfile)`
    width: 1.5rem;
    height: 2rem;
  `,
  DropdownContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    z-index: 10;
    background: #ffffff;
    /* border: 1px solid #e5e4e2; */
    border: 1px solid rgba(0, 0, 0, 0.125);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    top: 5rem;
    right: -0.1rem;
  `,
  DropDownItemContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    padding: 0.5rem 1rem;
    width: 100%;
    gap: 0.5rem;
    color: #28527a;
    cursor: pointer;
    :hover {
      background: #28527a;
      color: #ffffff;
      border-radius: 0 0 5px 5px;
    }
  `,
  DropdownLink: styled(Link)`
    cursor: pointer;
    padding: 0.5rem 1rem;
    text-decoration: none;
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 1.2rem;
    color: #28527a;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    &:hover {
      color: #ffffff;
      background-color: #28527a;
      border-radius: 5px 5px 0 0;
    }
    &:focus,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  `,
  DropDownItem: styled.span`
    cursor: pointer;
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 1.2rem;
  `,
};

export default styles;
