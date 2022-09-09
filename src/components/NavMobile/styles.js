import styled from "styled-components/macro";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const styles = {
  MobileNavContainer: styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    background: #28527a;
    transition: 0ms.1s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  `,
  CloseIcon: styled(FaTimes)`
    color: #ffffff;
  `,
  Icon: styled.div`
    position: absolute;
    top: 1.8rem;
    right: 1.2rem;
    background: transparent;
    font-size: 2.5rem;
    cursor: pointer;
    outline: none;
  `,
  MobileNavMenu: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  `,
  MobileNavLink: styled(Link)`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #ffffff;
    cursor: pointer;
    @media screen and (max-width: 300px) {
      font-size: 1.5rem;
    }
  `,
  LogoutText: styled.span`
  font-family: "Open Sans Semibold600", sans-serif;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #ffffff;
  cursor: pointer;
  @media screen and (max-width: 300px) {
    font-size: 1.5rem;
  }
`,
  MobileNaveItem: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
      color: #000000;
      transform: 0.2s ease-in-out;
    }
  `,
  WelcomeContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,
  ProfileName: styled.span`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 2rem;
    color: #ffffff;
    @media screen and (max-width: 300px) {
      font-size: 1.5rem;
    }
  `,
};

export default styles;
