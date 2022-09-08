import styled from "styled-components/macro";

const styles = {
  ButtonsContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  `,
  Button: styled.button`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 1rem;
    width: 100%;
    color: #ffffff;
    cursor: pointer;
    background-color: #28527a;
    border: 3px solid transparent;
    border-radius: 7px;
    padding: 0.5rem;
    &:hover {
      transition: all 0.2s ease-in-out;
      background-color: transparent;
      color: #28527a;
      border: 3px solid #28527a;
    }
  `,
};

export default styles;
