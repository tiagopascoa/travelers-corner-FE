import styled, { css } from "styled-components/macro";

const containerScrollbar = css`
  /* Track */
  ::-webkit-scrollbar {
    background: #f3f4f8;
    width: 6px;
    border-radius: 5px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #28527a;
    border-radius: 5px;
  }
  /* Handle on hover */
  /* ::-webkit-scrollbar-thumb:hover {
    background: #466A8D;
    cursor: pointer;
  } */
`;

const styles = {
  CommentsContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
  `,
  NewCommentContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,
  PostedComments: styled.div`
    max-height: 15rem;
    overflow-y: auto;
    ${containerScrollbar}
  `,
  Form: styled.form`
    background-color: #ebedf0;
    flex-grow: 1;
    border-radius: 1.25rem;
    display: flex;
    min-height: 2rem;
    padding: 0.5rem 1rem;
    align-items: center;
    &:hover {
      background-color: #d4d4d4;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
  `,
  CommentInput: styled.input`
    width: 100%;
    min-height: inherit;
    background: transparent;
    border: none;
    outline: none;
    font-family: "Open Sans", sans-serif;
    font-size: 0.9rem;
    color: #28527a;
  `,
  SubmitInput: styled.input`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 0.9rem;

    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    background-color: #28527a;
    border: 3px solid transparent;
    border-radius: 7px;
    padding: 0.3rem;
    /* &:hover {
      transition: all 0.2s ease-in-out;
      background-color: #ffffff;
      color: #28527a;
      border: 3px solid #28527a;
    } */
  `,
  CommentWrapper: styled.div`
    display: flex;
    gap: 0.5rem;
    padding: 0.3rem 1rem;
  `,
  NameAndDateContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  `,
  UserName: styled.span`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 0.8rem;
    color: #28527a;
    text-decoration: underline;
    cursor: pointer;
    @media screen and (max-width: 480px) {
      font-size: 0.8rem;
    }
  `,
  Date: styled.span`
    font-family: "Open Sans", sans-serif;
    color: rgb(119, 119, 119);
    font-size: 0.6rem;
  `,
  CommentTextContainer: styled.div`
    background-color: #ebedf0;
    padding: 0.5rem;
    border-radius: 7px;
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 0.8rem;
    color: #000000;
  `,
  EmptySateText: styled.label`
    font-family: "Open Sans", sans-serif;
    color: #28527a;
    font-size: 0.9rem;
    text-align: center;
    line-height: 1.6rem;
    display: flex;
    justify-content: center;
  `,
  SubmitError: styled.p`
    font-family: "Open Sans", sans-serif;
    font-size: 0.8rem;
    color: #ff3333;
    text-align: center;
  `,
};

export default styles;
