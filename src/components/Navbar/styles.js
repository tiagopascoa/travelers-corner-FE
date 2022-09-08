import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const styles = {
  HamburguerIcon: styled(FaBars)`
    color: #ffffff;
  `,

  Nav: styled.nav`
    background: #28527a;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 900px) {
      transition: 0.8s all ease;
    }
  `,

  NavbarContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
    z-index: 1;
    width: 100%;
    padding: 0 1rem;
    max-width: 1100px;
  `,

  MobileIcon: styled.div`
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      position: absolute;
      top: 0px;
      right: -20px;
      transform: translate(-100%, 60%);
      font-size: 2.5rem;
      cursor: pointer;
      color: #fff;
    }
    @media screen and (max-width: 320px) {
      top: 10px;
      right: -18px;
      font-size: 2rem;
    }
  `,

  NavMenu: styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style: none;
    text-align: center;
    @media screen and (max-width: 768px) {
      display: none;
    }
  `,

  NavBrandWrapper: styled.div``,

  BrandText: styled(Link)`
    font-family: "Pacifico", cursive;
    font-size: 2.5rem;
    color: #ffffff;
    text-decoration: none;
    @media screen and (max-width: 380px) {
      font-size: 2rem;
    }
    @media screen and (max-width: 320px) {
      font-size: 1.7rem;
    }
  `,

  NavItem: styled.li`
    height: 6rem;
    display: flex;
    align-items: center;
  `,
  NavLinks: styled(Link)`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 1.5rem;
    color: #ffffff;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    border: 3px solid #ffffff;
    border-radius: 15px;
    padding: 0.5rem;
    width: 10rem;
    &:hover {
      transition: all 0.2s ease-in-out;
      background: rgba(255, 255, 255, 0.79);
      backdrop-filter: blur(7.4px);
      -webkit-backdrop-filter: blur(7.4px);
      color: #28527a;
    }
  `,

  ProfileNavItem: styled.li`
    height: 6rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    cursor: pointer;
  `,
  ProfileName: styled.span`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 1.2rem;
    color: #ffffff;
  `,
  ArrowDown: styled(FiChevronDown)`
    color: #ffffff;
    height: 1.5rem;
    width: 1.5rem;
  `,
};

export default styles;
