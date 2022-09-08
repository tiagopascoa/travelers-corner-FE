import React from "react";
//Styles
import S from "./styles";
//Components
import ForgotPasswordForm from "../../components/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  return (
    <S.CoverImageContainer>
      <S.LandingLayout>
        <S.FormWrapper>
          <S.TitleContainer>
            <S.Title>Forgot Password</S.Title>
            <S.Paragraph>
              You will receive an email to reset your password!
            </S.Paragraph>
          </S.TitleContainer>
          <ForgotPasswordForm />
          <S.Paragraph>
            Back to{" "}
            <S.Link to="/login">Login!</S.Link>
          </S.Paragraph>
        </S.FormWrapper>
      </S.LandingLayout>
    </S.CoverImageContainer>
  );
};

export default ForgotPasswordPage;
