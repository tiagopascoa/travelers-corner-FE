import React from "react";
//Styles
import S from "./styles";
//Components
import ResetPasswordForm from "../../components/ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <S.CoverImageContainer>
      <S.LandingLayout>
        <S.FormWrapper>
          <S.TitleContainer>
            <S.Title>Reset Password</S.Title>
          </S.TitleContainer>
          <ResetPasswordForm />
          <S.Paragraph>
            Back to <S.Link to="/login">Login!</S.Link>
          </S.Paragraph>
        </S.FormWrapper>
      </S.LandingLayout>
    </S.CoverImageContainer>
  );
};

export default ResetPasswordPage;
