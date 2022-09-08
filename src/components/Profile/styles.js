import styled from "styled-components/macro";
import { MdLocationOn } from "react-icons/md";
import { IoMdImages } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { TbHeartBroken } from "react-icons/tb";
import { TbHeart } from "react-icons/tb";

const styles = {
  //icons
  PostsIcon: styled(IoMdImages)`
    color: #28527a;
    width: 2.2rem;
    height: 2.2rem;
  `,
  FollowingIcon: styled(FaUserCircle)`
    /* color: #28527a; */
    width: 2rem;
    height: 2rem;
  `,
  HeartIcon: styled(TbHeart)`
    /* color: #28527a; */
    width: 1.5rem;
    height: 1.5rem;
  `,
  HeartBrokenIcon: styled(TbHeartBroken)`
    /* color: #28527a; */
    width: 1.5rem;
    height: 1.5rem;
  `,
  //elements
  ProfileCardContainer: styled.div`
    background-color: #ffffff;
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px,
      rgb(0 0 0 / 30%) 0px 1px 3px 0px;
    /* border: 1px solid rgba(0, 0, 0, 0.125); */
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    gap: 2rem;
  `,
  Profile: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 2rem;
    border-bottom: 1px solid #28527a;
    padding-bottom: 2rem;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  `,
  ContactInfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 0.5rem;
    @media screen and (max-width: 768px) {
      gap: 1rem;
    }
  `,
  NameAndEmailContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `,
  Name: styled.h1`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 1.5rem;
    color: #28527a;
  `,
  Email: styled.span`
    font-family: "Open Sans", sans-serif;
    color: #28527a;
    font-size: 1rem;
  `,
  LocationContainer: styled.div`
    display: flex;
    align-items: flex-end;
    gap: 0.2rem;
  `,
  LocationIncon: styled(MdLocationOn)`
    color: #28527a;
    font-size: 1.2rem;
  `,
  Location: styled.span`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 1rem;
    color: #28527a;
  `,
  ButtonsContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: ${({ modalGap }) => (modalGap ? "2rem" : "none")};
  `,
  Button: styled.button`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 1rem;
    line-height: 1px;
    width: 100%;
    color: #ffffff;
    cursor: pointer;
    background-color: #28527a;
    border: 3px solid transparent;
    border-radius: 7px;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    &:hover {
      transition: all 0.2s ease-in-out;
      background-color: transparent;
      color: #28527a;
      border: 3px solid #28527a;
    }
  `,
  EditProfileButton: styled.button`
    all: unset;
    font-family: "Open Sans", sans-serif;
    color: #28527a;
    font-size: 1.2rem;
    cursor: pointer;
    text-decoration: underline;
  `,
  DeleteProfileButton: styled.button`
    all: unset;
    font-family: "Open Sans", sans-serif;
    color: #d11a2a;
    font-size: 1.2rem;
    cursor: pointer;
    text-decoration: underline;
  `,
  PostsAndUsersContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    padding-bottom: 2rem;
    border-bottom: ${({ following }) =>
      following ? "none" : "1px solid #28527a"};
  `,
  TitleContainer: styled.div`
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
  `,
  Title: styled.h2`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 1.5rem;
    color: #28527a;
  `,
  PostsWrapper: styled.div``,
};

export default styles;
