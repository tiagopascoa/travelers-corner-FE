import styled from "styled-components/macro";
import { HiOutlineExternalLink } from "react-icons/hi";

const styles = {
  SwiperContainer: styled.div`
    width: 100%;
    margin-bottom: ${(props) => props.margin};
    /* & .slick-slide > div {
      margin: 0 10px;
    }
    & .slick-list {
      margin: 0 -10px;
    } */
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
  `,
  UserCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    cursor: grab;
  `,
  LinkIcon: styled(HiOutlineExternalLink)`
    color: #28527a;
    font-size: 0.8rem;
  `,
  NameContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #28527a;
    gap: 0.1rem;
    width: fit-content;
    margin: auto;
    cursor: pointer;
  `,
  Name: styled.span`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 0.7rem;
    color: #28527a;
    max-width: 6rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
