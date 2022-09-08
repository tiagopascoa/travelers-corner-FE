//Styles
import S from "./styles";

export const FormGroup = (props) => {
  const { labelText, children, errorMessage, profileForm } = props;
  return (
    <S.FormGroupWrapper>
      <S.Label profileForm={profileForm}>{labelText}</S.Label>
      {children}
      <S.SubmitError>{errorMessage}</S.SubmitError>
    </S.FormGroupWrapper>
  );
};