import React, { useState, useEffect, useRef, useContext } from "react";
//Styles
import S from "./styles";
//Icons
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { IconContext } from "react-icons";
//Tools
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//Components
import { FormGroup } from "../AuthFormGroup";
import LoaderSpinner from "../LoaderSpinner";
//Hooks
import { useSignup } from "../../hooks/useSignup";
//Api
import { uploadFile } from "../../api/apiEndpoints";
//Context
import { GeneralContext } from "../../context/GeneralContext";

const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email.")
    .required("Email is a required field."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters.")
    .required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  profilePicture: yup
    .mixed()
    .test(
      "required",
      "Profile picture is required.",
      (value) => value.length > 0
    )
    .test("type", "Unsupported file formate (try jpg, jpeg, png).", (value) => {
      return (
        (value && value[0]?.type === "image/jpg") ||
        (value && value[0]?.type === "image/jpeg") ||
        (value && value[0]?.type === "image/png")
      );
    }),
});

const SignUpForm2 = () => {
  const { formStep1Data } = useContext(GeneralContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fileUploadLoading, setFileUploadLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const { signup, serverError, isLoading } = useSignup();
  const [emptyForm1FieldsError, setEmptyForm1FieldsError] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });
  const { ref, ...rest } = register("profilePicture");

  useEffect(() => {
    const subscription = watch((value) =>
      setFileName(value.profilePicture[0]?.name)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleClickPrev = () => {
    navigate("/signup-step1");
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const onSubmit = async (signupForm2Data) => {
    if (!formStep1Data) {
      setEmptyForm1FieldsError(true);
    } else {
      const uploadData = new FormData();
      uploadData.append("image", signupForm2Data.profilePicture[0]);
      let fileUploadResponse = [];
      try {
        //First upload Image to cloudinary
        setFileUploadLoading(true);
        fileUploadResponse = await uploadFile(uploadData);
        //Then signup
        await signup({
          firstName: formStep1Data.firstName,
          lastName: formStep1Data.lastName,
          homeCity: formStep1Data.homeCity,
          homeCountry: formStep1Data.homeCountry,
          email: signupForm2Data.email,
          password: signupForm2Data.password,
          imageUrl: fileUploadResponse.data.fileUrl,
        });
      } catch (error) {
        console.log("fileUploadError: ", error);
      } finally {
        setFileUploadLoading(false);
      }
    }
  };
  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.FormStepsContainer>
        <S.BackButton onClick={handleClickPrev}>Back</S.BackButton>
        <S.StepsCount>Step 2 of 2</S.StepsCount>
      </S.FormStepsContainer>
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
        <FormGroup
          labelText={"Profile Picture"}
          errorMessage={errors.profilePicture?.message}
        >
          <S.FileInputWrapper
            errorMargin={errors.profilePicture?.message ? true : false}
          >
            <S.CustomFileInput onClick={handleFileInputClick}>
              Choose File
            </S.CustomFileInput>
            <S.FileInput
              type="file"
              {...rest}
              name="profilePicture"
              ref={(e) => {
                ref(e);
                fileInputRef.current = e;
              }}
            />
            {fileName && <S.FileName>{fileName}</S.FileName>}
          </S.FileInputWrapper>
        </FormGroup>
      </S.InputsWrapper>
      {serverError ? (
        <S.SubmitError>{serverError}</S.SubmitError>
      ) : emptyForm1FieldsError ? (
        <S.SubmitError>Step 1 fields are empty!</S.SubmitError>
      ) : null}
      {isLoading || fileUploadLoading ? (
        <LoaderSpinner />
      ) : (
        <S.SubmitInput type="submit" value="Sign Up" />
      )}
    </S.Form>
  );
};

export default SignUpForm2;
