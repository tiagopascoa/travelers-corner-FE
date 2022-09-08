import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const styles = {
  PostDetailsContainer: styled.div`
    display: flex;
    gap: 1.5rem;
    /* padding: 1rem; */
    flex-direction: column;
  `,
  ImageContainer: styled.div`
    width: 100%;
  `,
  PostImage: styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 1rem;
  `,
  PostInfoContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 40%;
    width: 100%;
  `,
  Title: styled.h1`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 1.5rem;
    color: #28527a;
    text-align: center;
  `,
  InfoWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Labels: styled.span`
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    font-weight: bold;
    color: #28527a;
  `,
  Description: styled.p`
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    color: #28527a;
    display: flex;
    gap: ${({ tags }) => (tags ? "0.5rem" : "0")};
    text-decoration: ${({ link }) => (link ? "underline" : "none")};
    cursor: ${({ link }) => (link ? "pointer" : "default")};
  `,
  DescriptionLink: styled(Link)`
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    color: #28527a;
    display: flex;
    
  `,
  Tag: styled.span`
    font-family: "Open Sans", sans-serif;
    color: #28527a;
    font-size: 1rem;
  `,
};

export default styles;
