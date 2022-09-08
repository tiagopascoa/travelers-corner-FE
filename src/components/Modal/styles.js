import styled from "styled-components/macro";
import { MdClose } from "react-icons/md";

const styles = {
  Background: styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `,
  ModalWrapper: styled.div`
    padding: 3rem 2rem;
    width: 100%;
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "35rem")};
    background: #ffffff;
    border-radius: 10px;
    position: relative;
    max-height: 100vh;
    overflow-y: auto;
    margin: 1rem;
  `,
  ModalContent: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  `,
  CloseModalButton: styled(MdClose)`
    cursor: pointer;
    position: absolute;
    color: #28527a;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
  `,
  TitleContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `,
  Title: styled.h1`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 1.5rem;
    color: #28527a;
    text-align: center;
  `,
  SubTitle: styled.h2`
    font-family: "Open Sans", sans-serif;
    color: #28527a;
    font-size: 0.8rem;
    text-align: center;
    
  `,
};

export default styles;
