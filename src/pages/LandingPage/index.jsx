import React from "react";
import { CoverImageContainer, IntroLayout } from "./styles";
import LandingMessage from "../../components/LandingMessage";

const LandingPage = () => {
  return (
    <CoverImageContainer
      className="cover-image-container
    "
    >
      <IntroLayout>
        <LandingMessage />
      </IntroLayout>
    </CoverImageContainer>
  );
};

export default LandingPage;
