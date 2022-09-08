import styled from "styled-components/macro";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";

const styles = {
  CardContainer: styled.div`
    min-height: 30rem;
    width: 100%;
    background-color: #ffffff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    /* border: 1px solid rgba(0, 0, 0, 0.125); */
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
  `,
  Header: styled.div``,
  UserInfoRow: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
  `,
  NameAndDateContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,
  UserName: styled.span`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 1rem;
    color: #28527a;
    text-decoration: underline;
    cursor: pointer;
    @media screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  `,
  Date: styled.span`
    font-family: "Open Sans", sans-serif;
    color: #000000;
    font-size: 0.7rem;
    @media screen and (max-width: 480px) {
      font-size: 0.6rem;
    }
  `,
  LocationContainer: styled.div`
    display: flex;
    margin-left: auto;
    gap: 0.1rem;
  `,
  LocationIncon: styled(MdLocationOn)`
    color: #28527a;
  `,
  Location: styled.span`
    font-family: "Open Sans Semibold600", sans-serif;
    color: #28527a;
    font-size: 1rem;
    @media screen and (max-width: 480px) {
      font-size: 0.8rem;
      max-width: 165px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

  `,
  ImageContainer: styled.div`
    /* background-image: url("http://placekitten.com/g/200/300");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 10rem; */
    cursor: pointer;
  `,
  Image: styled.img`
    width: 100%;
    height: 20rem;
    object-fit: cover;
  `,
  Body: styled.div``,
  TagsContainer: styled.div`
    display: flex;
    gap: 0.5rem;
    padding: 1rem;
  `,
  Tag: styled.span`
    font-family: "Open Sans", sans-serif;
    color: #28527a;
    font-size: 1rem;
  `,
  LikesContainer: styled.div`
    display: flex;
    align-items: flex-end;
    gap: 0.2rem;
    padding: 0 1rem 1rem 1rem;
    cursor: pointer;
    width: fit-content;
  `,
  LikeIconOutline: styled(AiOutlineLike)`
    color: #28527a;
    width: 1.5rem;
    height: 1.5rem;
  `,
  LikeIconFilled: styled(AiTwotoneLike)`
    color: #28527a;
    width: 1.5rem;
    height: 1.5rem;
  `,
  LikeCount: styled.span`
    font-family: "Open Sans", sans-serif;
    color: #28527a;
    font-size: 1rem;
  `,
  CommentsContainer: styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin: 0 1rem;
    padding: 1rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    cursor: pointer;
  `,
  CommentsIcon: styled(FaRegComments)`
    color: #28527a;
    width: 1.5rem;
    height: 1.5rem;
  `,
  CommentsText: styled.span`
    font-family: "Open Sans", sans-serif;
    color: #28527a;
    font-size: 1rem;
  `,
};

export default styles;
