import React from "react";
//Styles
import S from "./styles";

const SignUpPage = ({ signupFormStep }) => {
  return (
    <S.CoverImageContainer>
      <S.LandingLayout>
        <S.FormWrapper>
          <S.TitleContainer>
            <S.Title>Sign Up</S.Title>
          </S.TitleContainer>
          {signupFormStep}
          <S.Paragraph>
            Already have an account? <S.Link to="/login">Login!</S.Link>
          </S.Paragraph>
        </S.FormWrapper>
      </S.LandingLayout>
    </S.CoverImageContainer>
  );
};

export default SignUpPage;
