import styled from "styled-components/macro";
import { FaRegComments } from "react-icons/fa";

const styles = {
  TravelPostPage: styled.div`
    min-height: calc(100vh - 6rem);
    background-color: #ebedf0;
    display: flex;
    justify-content: center;
  `,
  TravelPostPageLayout: styled.div`
    width: 100%;
    padding: 1rem;
    max-width: 800px;
  `,
  PageCard: styled.div`
    background-color: #ffffff;
    box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px,
      rgb(0 0 0 / 30%) 0px 1px 3px 0px;
    /* border: 1px solid rgba(0, 0, 0, 0.125); */
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;
  `,
  CommentsContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  CommentsTitleContainer: styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.125);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  `,
  CommentsTitle: styled.h2`
    font-family: "Open Sans", sans-serif;
    font-size: 1.5rem;
    color: #28527a;
  `,
  CommentsIcon: styled(FaRegComments)`
    color: #28527a;
    width: 1.7rem;
    height: 1.7rem;
  `,
};

export default styles;
