import styled from "styled-components/macro";

const styles = {
  FeedSection: styled.div`
    height: 100%;
    min-height: calc(100vh - 6rem);
    background-color: #ebedf0;
    display: flex;
    justify-content: center;
  `,
  FeedLayout: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    padding: 1rem;
    max-width: 800px;
  `,
  PostsContainer: styled.div`
    display: flex;
    flex-direction: column-reverse;
    gap: 1.5rem;
  `,
};

export default styles;
