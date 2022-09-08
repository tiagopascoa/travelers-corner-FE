import styled from "styled-components/macro";

const styles = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    width: 75%;
    gap: 1.5rem;
    @media screen and (max-width: 480px) {
      width: 100%;
    }
  `,
  Input: styled.input`
    border: 1px solid #28527a;
    border-radius: 10px;
    height: 2.5rem;
    margin-bottom: ${({ errormargin }) => (true ? "0.5rem" : null)};
    background: transparent;
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    color: #28527a;
    padding: 0 0.5rem;
    outline: none;
  `,
  TextAreaInput: styled.textarea`
    border: 1px solid #28527a;
    border-radius: 10px;
    margin-bottom: ${({ errormargin }) => (errormargin ? "0.5rem" : null)};
    background: transparent;
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    color: #28527a;
    padding: 0.5rem;
    outline: none;
    height: 7rem;
    resize: vertical;
    min-height: 1.5rem;
    max-height: 7rem;
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
    border-radius: 15px;
    padding: 0.5rem;
    &:hover {
      transition: all 0.2s ease-in-out;
      background-color: transparent;
      color: #28527a;
      border: 3px solid #28527a;
    }
  `,
  CancelButton: styled.button`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 1rem;
    width: 100%;
    color: #ffffff;
    cursor: pointer;
    background-color: #28527a;
    border: 3px solid transparent;
    border-radius: 15px;
    padding: 0.5rem;
    &:hover {
      transition: all 0.2s ease-in-out;
      background-color: transparent;
      color: #28527a;
      border: 3px solid #28527a;
    }
  `,
  ButtonsContainer: styled.div`
    display: flex;
    gap: 1rem;
  `,
  FileInputWrapper: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: ${({ errorMargin }) => (errorMargin ? "0.5rem" : null)};
  `,
  FileInput: styled.input`
    display: none;
  `,
  CustomFileInput: styled.label`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid #28527a;
    border-radius: 7px;
    height: 2rem;
    background: transparent;
    font-family: "Open Sans", sans-serif;
    font-size: 0.8rem;
    color: #28527a;
    padding: 0 0.5rem;
    outline: none;
    cursor: pointer;
  `,
  FileName: styled.p`
    font-family: "Open Sans", sans-serif;
    font-size: 0.8rem;
    color: #28527a;
  `,
};

export default styles;
