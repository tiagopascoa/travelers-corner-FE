import styled from "styled-components/macro";

const styles = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem 0;
  `,
  Input: styled.input`
    border: 1px solid #28527a;
    border-radius: 10px;
    height: 2.5rem;
    margin-bottom: ${({ errorMargin }) => (errorMargin ? "0.5rem" : null)};
    background: transparent;
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    color: #28527a;
    padding: 0 0.5rem;
    outline: none;
  `,
  InputsWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  IconWrapper: styled.div`
    position: absolute;
    right: 10px;
    top: 30px;
    cursor: pointer;
  `,
  SubmitInput: styled.input`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 1rem;
    width: 100%;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
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
  SubmitError: styled.p`
    font-family: "Open Sans", sans-serif;
    font-size: 0.8rem;
    color: #ff3333;
    text-align: center;
  `,
  SubmitSuccess: styled.p`
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    color: #43a047;
    text-align: center;
  `,
};

export default styles;
