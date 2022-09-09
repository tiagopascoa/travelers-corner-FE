import React, { useContext } from "react";
//Styles
import S from "./styles";
//Tools
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//Components
import { FormGroup } from "../AuthFormGroup";
//Context
import { GeneralContext } from "../../context/GeneralContext";

const signUpSchema = yup.object().shape({
  firstName: yup.string().required("First name is a required field."),
  lastName: yup.string().required("Last name is a required field."),
  homeCity: yup.string().required("City is a required field."),
  homeCountry: yup.string().required("Country is a required field."),
});

const SignUpForm1 = () => {
  const { formStep1Data, setFormStep1Data } = useContext(GeneralContext);
  const navigate = useNavigate();
  /* console.log("formStep1Data: ", formStep1Data); */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      firstName: formStep1Data.firstName,
      lastName: formStep1Data.lastName,
      homeCity: formStep1Data.homeCity,
      homeCountry: formStep1Data.homeCountry,
    },
  });

  const onSubmit = async (signupForm1Data) => {
    console.log(signupForm1Data);
    setFormStep1Data(signupForm1Data);
    navigate("/signup-step2");
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.FormStepsContainer>
        <S.StepsCount>Step 1 of 2</S.StepsCount>
      </S.FormStepsContainer>
      <S.InputsWrapper>
        <FormGroup
          labelText={"First name"}
          errorMessage={errors.firstName?.message}
        >
          <S.Input
            type="text"
            name="firstName"
            {...register("firstName")}
            errorMargin={errors.firstName?.message ? true : false}
          />
        </FormGroup>
        <FormGroup
          labelText={"Last name"}
          errorMessage={errors.lastName?.message}
        >
          <S.Input
            type="text"
            name="lastName"
            {...register("lastName")}
            errorMargin={errors.lastName?.message ? true : false}
          />
        </FormGroup>
        <FormGroup labelText={"City"} errorMessage={errors.lastName?.message}>
          <S.Input
            type="text"
            name="homeCity"
            {...register("homeCity")}
            errorMargin={errors.homeCity?.message ? true : false}
          />
        </FormGroup>
        <FormGroup
          labelText={"Country"}
          errorMessage={errors.homeCountry?.message}
        >
          <S.Input
            type="text"
            name="homeCountry"
            {...register("homeCountry")}
            errorMargin={errors.homeCountry?.message ? true : false}
          />
        </FormGroup>
      </S.InputsWrapper>
      <S.SubmitInput type="submit" value="Next" />
    </S.Form>
  );
};

export default SignUpForm1;
