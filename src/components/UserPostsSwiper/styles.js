import styled from "styled-components/macro";
import { MdLocationOn } from "react-icons/md";

const styles = {
  SwiperContainer: styled.div`
    width: 100%;
    & .slick-slide > div {
      margin: 0 10px;
    }
    & .slick-list {
      margin: 0 -10px;
    }
    & .slick-track {
      margin-left: unset;
    }
    & .slick-dots {
      bottom: -35px;
    }
    & .slick-dots li button:before {
      font-size: 10px;
    }
    & .slick-dots li button:before {
      color: #28527a;
    }
    & .slick-dots li.slick-active button:before {
      opacity: 1;
      color: #28527a;
    }
    margin-bottom: ${(props) => props.margin};
  `,
  UserPostCard: styled.div`
    display: flex;
    flex-direction: column;
    /* gap: 1.5rem; */
    height: 10rem;
    width: 100%;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px 0px; */
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 1rem;
    cursor: grab;
    @media screen and (max-width: 768px) {
      height: 15rem;
    }
  `,
  ImageContainer: styled.div`
    height: 60%;
    width: 100%;
  `,
  Image: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  `,
  LocationContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #28527a;
    gap: 0.1rem;
    width: fit-content;
    margin: auto;
    cursor: pointer;
  `,
  LocationIncon: styled(MdLocationOn)`
    color: #28527a;
    font-size: 0.8rem;
  `,
  Location: styled.span`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 0.7rem;
    color: #28527a;
    max-width: 110px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
      color: #28527a;
      max-width: 150px;
    }
  `,
  EmptySateText: styled.label`
    font-family: "Open Sans", sans-serif;
    color: #28527a;
    font-size: 1rem;
    text-align: center;
    line-height: 1.6rem;
  `,
};

export default styles;
