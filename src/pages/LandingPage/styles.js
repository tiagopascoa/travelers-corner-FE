import styled from "styled-components/macro";
import BallonImage from "../../assets/images/ballons_cover.jpg";

export const CoverImageContainer = styled.div`
  background-image: url(${BallonImage});
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 6rem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IntroLayout = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
