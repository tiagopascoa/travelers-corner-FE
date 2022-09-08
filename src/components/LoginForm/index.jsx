import React, { useState } from "react";
//Styles
import S from "./styles";
//Icons
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { IconContext } from "react-icons";
//Tools
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//Components
import { FormGroup } from "../AuthFormGroup";
import LoaderSpinner from "../LoaderSpinner";
//API
import { useLogin } from "../../hooks/useLogin";

const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email.")
    .required("Email is a required field."),
  password: yup.string().min(4).max(15).required(),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, serverError, isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = async (loginFormData) => {
    /* console.log("loginFormData: ", loginFormData); */
    await login({
      email: loginFormData.email,
      password: loginFormData.password,
    });
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
      </S.InputsWrapper>
      {serverError && <S.SubmitError>{serverError}</S.SubmitError>}
      {isLoading ? (
        <LoaderSpinner />
      ) : (
        <S.SubmitInput type="submit" value="Login" />
      )}
    </S.Form>
  );
};

export default LoginForm;
