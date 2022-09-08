import React, { useState } from "react";
//Styles
import S from "./styles";
//Tools
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//Components
import { FormGroup } from "../AuthFormGroup";
import LoaderSpinner from "../LoaderSpinner";
//Api
import { forgotPasswordApi } from "../../api/apiEndpoints";

const forgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email.")
    .required("Email is a required field."),
});

const ForgotPasswordForm = () => {
  const [serverError, setServerError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [forgotPasswordResponse, setForgotPasswordResponse] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit = async (forgotPasswordFormData) => {
    /* console.log("forgotPasswordFormData: ", forgotPasswordFormData); */
    setIsLoading(true);
    setServerError(null);
    try {
      const response = await forgotPasswordApi({
        email: forgotPasswordFormData.email,
      });
      setForgotPasswordResponse(response.data.message);
      reset();
      return response;
    } catch (error) {
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
        <FormGroup labelText={"Email"} errorMessage={errors.email?.message}>
          <S.Input
            type="text"
            name="email"
            {...register("email")}
            errorMargin={errors.email?.message ? true : false}
          />
        </FormGroup>
      </S.InputsWrapper>
      {serverError && <S.SubmitError>{serverError}</S.SubmitError>}
      {forgotPasswordResponse && (
        <S.SubmitSuccess>{forgotPasswordResponse}</S.SubmitSuccess>
      )}
      {isLoading ? (
        <LoaderSpinner />
      ) : (
        <S.SubmitInput type="submit" value="Login" />
      )}
    </S.Form>
  );
};

export default ForgotPasswordForm;
