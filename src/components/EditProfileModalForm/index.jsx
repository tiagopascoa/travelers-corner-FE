import { useState, useRef, useEffect } from "react";
//Styles
import S from "./styles";
//Tools
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//Components
import Modal from "../Modal";
import { FormGroup } from "../AuthFormGroup";
import LoaderSpinner from "../LoaderSpinner";
//Api
import { updateProfile, uploadFile } from "../../api/apiEndpoints";
import { useAuthContext } from "../../hooks/useAuthContext";

const EditProfileModalForm = ({
  showModal,
  setShowModal,
  title,
  profileFormDefaultValues,
}) => {
  const { user, dispatch } = useAuthContext();
  const [fileUploadLoading, setFileUploadLoading] = useState(false);
  const [editProfileLoading, setEditProfileLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const editProfileSchema = yup.object().shape({
    email: yup
      .string()
      .email("Must be a valid email.")
      .required("Email is a required field."),
    firstName: yup.string().required("First name is a required field."),
    lastName: yup.string().required("Last name is a required field."),
    homeCity: yup.string().required("City is a required field."),
    homeCountry: yup.string().required("Country is a required field."),
    profilePicture: fileName
      ? yup
          .mixed()
          .test(
            "type",
            "Unsupported file formate (try jpg, jpeg, png).",
            (value) => {
              return (
                (value && value[0]?.type === "image/jpg") ||
                (value && value[0]?.type === "image/jpeg") ||
                (value && value[0]?.type === "image/png")
              );
            }
          )
      : yup.mixed().notRequired(),
  });
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editProfileSchema),
    defaultValues: profileFormDefaultValues,
  });

  const { ref, ...rest } = register("profilePicture");
  const fileNameOnWatch = watch("profilePicture");

  useEffect(() => {
    if (fileNameOnWatch) {
      setFileName(fileNameOnWatch[0]?.name);
    }
  }, [fileNameOnWatch]);

  useEffect(() => {
    reset(profileFormDefaultValues);
  }, [profileFormDefaultValues, reset]);

  const handleClickCancelBtn = () => {
    reset();
    setFileName("");
    setShowModal((prev) => !prev);
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  //Handle submit Form, create Venue
  const submitForm = async (editProfileFormData) => {
    /* console.log("newPostFormData: ", editProfileFormData); */
    const uploadData = new FormData();
    uploadData.append("image", editProfileFormData.profilePicture[0]);
    let fileUploadResponse = [];
    try {
      //First upload Image to cloudinary (if new image is uploaded)
      if (fileName) {
        setFileUploadLoading(true);
        fileUploadResponse = await uploadFile(uploadData);
      }
      //Then update profile
      setEditProfileLoading(true);
      const editProfileResponse = await updateProfile(
        {
          userId: user.userId,
          firstName: editProfileFormData.firstName,
          lastName: editProfileFormData.lastName,
          homeCity: editProfileFormData.homeCity,
          homeCountry: editProfileFormData.homeCountry,
          email: editProfileFormData.email,
          imageUrl: fileName ? fileUploadResponse.data.fileUrl : user.imageUrl,
        },
        user.token
      );
      //Update context with new user profile
      dispatch({
        type: "EDIT_USER",
        payload: {
          ...user,
          firstName: editProfileResponse.data.user.firstName,
          lastName: editProfileResponse.data.user.lastName,
          homeCity: editProfileResponse.data.user.homeCity,
          homeCountry: editProfileResponse.data.user.homeCountry,
          email: editProfileResponse.data.user.email,
          imageUrl: editProfileResponse.data.user.imageUrl,
        },
      });
    } catch (error) {
      console.log("fileUploadError: ", error);
    } finally {
      setFileUploadLoading(false);
      setEditProfileLoading(false);
    }
    reset();
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} title={title}>
        <S.Form onSubmit={handleSubmit(submitForm)}>
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
            <FormGroup
              labelText={"City"}
              errorMessage={errors.lastName?.message}
            >
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
            <FormGroup labelText={"Email"} errorMessage={errors.email?.message}>
              <S.Input
                type="text"
                name="email"
                {...register("email")}
                errorMargin={errors.email?.message ? true : false}
              />
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
          {fileUploadLoading || editProfileLoading ? (
            <LoaderSpinner />
          ) : (
            <S.ButtonsContainer>
              <S.CancelButton onClick={handleClickCancelBtn}>
                Cancel
              </S.CancelButton>
              <S.SubmitInput type="submit" id="submit" value="Update" />
            </S.ButtonsContainer>
          )}
        </S.Form>
      </Modal>
    </>
  );
};

export default EditProfileModalForm;
