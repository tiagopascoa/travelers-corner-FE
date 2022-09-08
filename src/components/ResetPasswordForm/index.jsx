import React, { useState } from "react";
//S
import S from "./styles";
//Icons
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { IconContext } from "react-icons";
//Tools
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useParams } from "react-router-dom";
//Components
import { FormGroup } from "../AuthFormGroup";
import LoaderSpinner from "../LoaderSpinner";
//Api
import { resetPasswordApi } from "../../api/apiEndpoints";

const resetPassword = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters.")
    .required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const ResetPassword = () => {
  const { resetPasstoken } = useParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [resetPasswordResponse, setResetPasswordResponse] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(resetPassword),
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (resetPasswordFormData) => {
    /* console.log("resetPasswordFormData: ", resetPasswordFormData); */
    setIsLoading(true);
    setServerError(null);
    try {
      const response = await resetPasswordApi({
        password: resetPasswordFormData.password,
        token: resetPasstoken,
      });
      setResetPasswordResponse(response.data.message);
      reset();
    } catch (error) {
      console.log("error: ", error);
      const { response } = error;
      const { request, ...errorObject } = response; // take everything but 'request'
      setServerError(errorObject.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.InputsWrapper>
        <FormGroup
          labelText={"Password"}
          errorMessage={errors.password?.message}
        >
          <S.Input
            type={showPassword ? "text" : "password"}
            name="password"
            {...register("password")}
            errorMargin={errors.password?.message ? true : false}
          />
          <IconContext.Provider value={{ size: 25, color: "#28527a" }}>
            <S.IconWrapper onClick={handleShowPassword}>
              {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
            </S.IconWrapper>
          </IconContext.Provider>
        </FormGroup>
        <FormGroup
          labelText={"Confirm password"}
          errorMessage={errors.confirmPassword?.message}
        >
          <S.Input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            {...register("confirmPassword")}
            errorMargin={errors.confirmPassword?.message ? true : false}
          />
          <IconContext.Provider value={{ size: 25, color: "#28527a" }}>
            <S.IconWrapper onClick={handleShowConfirmPassword}>
              {showConfirmPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
            </S.IconWrapper>
          </IconContext.Provider>
        </FormGroup>
      </S.InputsWrapper>
      {serverError && <S.SubmitError>{serverError}</S.SubmitError>}
      {resetPasswordResponse && (
        <S.SubmitSuccess>{resetPasswordResponse}</S.SubmitSuccess>
      )}
      {isLoading ? (
        <LoaderSpinner />
      ) : (
        <S.SubmitInput type="submit" value="Login" />
      )}
    </S.Form>
  );
};

export default ResetPassword;
