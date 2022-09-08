import styled from "styled-components/macro";
import { IoMdImages } from "react-icons/io";

const styles = {
  NewPostContainer: styled.div`
    width: 100%;
    background-color: #ffffff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    /* border: 1px solid rgba(0, 0, 0, 0.125); */
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
  `,
  ProfileAndPromptRow: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    /* padding: 1rem 1rem 0.5rem 1rem; */
  `,
  PromptContainer: styled.div`
    background-color: #ebedf0;
    flex-grow: 1;
    border-radius: 1.25rem;
    display: flex;
    min-height: 2.7rem;
    padding: 0.5rem 1rem;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #d4d4d4;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
  `,
  PromptText: styled.p`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 1rem;
    color: #28527a;
    @media screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  `,
  NewPostIconRow: styled.div`
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    padding-top: 0.5rem;
  `,
  NewPostIconWrapper: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: fit-content;
    cursor: pointer;
    transition: transform 0.1s;
    &:hover {
      -ms-transform: scale(1.05); /* IE 9 */
      -webkit-transform: scale(1.05); /* Safari 3-8 */
      transform: scale(1.05);
    }
  `,
  NewPostIcon: styled(IoMdImages)`
    color: #28527a;
    width: 3rem;
    height: 3rem;
  `,
  NewPostText: styled.span`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 1rem;
    color: #28527a;
  `,
};

export default styles;
