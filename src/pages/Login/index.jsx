import React from "react";
//Styles
import S from "./styles";
//Components
import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  return (
    <S.CoverImageContainer>
      <S.LandingLayout>
        <S.FormWrapper>
          <S.TitleContainer>
            <S.Title>Login</S.Title>
          </S.TitleContainer>
          <LoginForm />
          <S.LinksContainer>
            <S.Link to="/forgot-password">Forgot your password?</S.Link>
            <S.Paragraph>
              Don't have an account?{" "}
              <S.Link to="/signup-step1">Sign Up!</S.Link>
            </S.Paragraph>
          </S.LinksContainer>
        </S.FormWrapper>
      </S.LandingLayout>
    </S.CoverImageContainer>
  );
};

export default LoginPage;
