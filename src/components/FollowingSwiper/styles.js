import styled from "styled-components/macro";
import { HiOutlineExternalLink } from "react-icons/hi";

const styles = {
  SwiperContainer: styled.div`
    width: 100%;
    & .swiper-pagination {
      display: flex;
      justify-content: center;
    }
    & .swiper-wrapper {
      margin-bottom: ${(props) => props.margin};
    }
    & .swiper-pagination-bullet-active {
      background: #28527a !important;
      height: 0.5rem !important;
      width: 0.5rem !important;
    }
    & .swiper-pagination-bullet {
      background: #28527a !important;
      height: 0.5rem !important;
      width: 0.5rem !important;
    }
  `,
  UserCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: 10rem;
    width: 100%;
    cursor: grab;
    @media screen and (max-width: 480px) {
      height: 8rem;
    }
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
