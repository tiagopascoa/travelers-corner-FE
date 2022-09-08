import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import BallonImage from "../../assets/images/ballons_cover.jpg";

const styles = {
  CoverImageContainer: styled.div`
    background-image: url(${BallonImage});
    background-size: cover;
    background-position: center;
    min-height: calc(100vh - 6rem);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  LandingLayout: styled.div`
    max-width: 1100px;
    width: 100%;
    height: 100%;
    /* margin-top: 6rem; */
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  FormWrapper: styled.div`
    background: rgba(255, 255, 255, 0.79);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.4px);
    -webkit-backdrop-filter: blur(7.4px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 1.5rem;
    min-width: 35%;
    margin: 1rem;
    @media screen and (max-width: 480px) {
    width: 100%;
    
  }
  `,
  TitleContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Title: styled.h1`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 2rem;
    color: #28527a;
  `,
  Paragraph: styled.p`
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    color: #28527a;
  `,
  Link: styled(Link)`
    font-family: "Open Sans Semibold600", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #28527a;
    text-decoration: underline;
  `,
};

export default styles;
