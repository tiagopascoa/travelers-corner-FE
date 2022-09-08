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
import { newTravelPostApi, uploadFile } from "../../api/apiEndpoints";
import { useAuthContext } from "../../hooks/useAuthContext";

const newPostSchema = yup.object().shape({
  city: yup.string().required("City is a required field."),
  country: yup.string().required("Country is a required field."),
  tags: yup.string().required("Tags is a required field."),
  description: yup.string().required("Description is a required field."),
  photo: yup
    .mixed()
    .test("required", "Photo is required.", (value) => value?.length > 0)
    .test("type", "Unsupported file formate (try jpg, jpeg, png).", (value) => {
      return (
        (value && value[0]?.type === "image/jpg") ||
        (value && value[0]?.type === "image/jpeg") ||
        (value && value[0]?.type === "image/png")
      );
    }),
});

const postFormDefaultValues = {
  city: "",
  country: "",
  description: "",
  tags: "",
  imageUrl: "",
};

const NewPostModalForm = ({
  showModal,
  setShowModal,
  title,
  fetchTravelPosts,
}) => {
  const [fileUploadLoading, setFileUploadLoading] = useState(false);
  const [newPostLoading, setNewPostLoading] = useState(false);
  const { user } = useAuthContext();
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newPostSchema),
    defaultValues: postFormDefaultValues,
  });

  const { ref, ...rest } = register("photo");
  const fileNameOnWatch = watch("photo");

  useEffect(() => {
    if (fileNameOnWatch) {
      setFileName(fileNameOnWatch[0]?.name);
    }
  }, [fileNameOnWatch]);

  useEffect(() => {
    reset(postFormDefaultValues);
  }, [reset]);

  const handleClickCancelBtn = () => {
    reset();
    setFileName("");
    setShowModal((prev) => !prev);
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  //Handle submit Form, create Venue
  const submitForm = async (newPostFormData) => {
    /* console.log("newPostFormData: ", newPostFormData); */
    //First upload Image to cloudinary
    const uploadData = new FormData();
    uploadData.append("image", newPostFormData.photo[0]);
    let fileUploadResponse = [];
    try {
      setFileUploadLoading(true);
      fileUploadResponse = await uploadFile(uploadData, user.token);
    } catch (error) {
      console.log("fileUploadError: ", error);
    } finally {
      setFileUploadLoading(false);
    }
    //Then signup
    try {
      setNewPostLoading(true);
      await newTravelPostApi(
        {
          city: newPostFormData.city,
          country: newPostFormData.country,
          description: newPostFormData.description,
          tags: newPostFormData.tags.trim().split(/\s*,\s*/),
          imageUrl: fileUploadResponse.data.fileUrl,
        },
        user.token
      );
    } catch (error) {
      console.log("newPostError: ", error);
    } finally {
      setNewPostLoading(false);
    }
    reset();
    setShowModal((prev) => !prev);
    fetchTravelPosts();
  };

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} title={title}>
        <S.Form onSubmit={handleSubmit(submitForm)}>
          <S.InputsWrapper>
            <FormGroup labelText={"City"} errorMessage={errors.city?.message}>
              <S.Input
                type="text"
                name="city"
                placeholder="Lisbon"
                {...register("city")}
                errormargin={errors.city?.message ? +true : +false}
              />
            </FormGroup>
            <FormGroup
              labelText={"Country"}
              errorMessage={errors.country?.message}
            >
              <S.Input
                type="text"
                name="country"
                placeholder="Portugal"
                {...register("country")}
                errormargin={errors.country?.message ? +true : +false}
              />
            </FormGroup>
            <FormGroup labelText={"Tags"} errorMessage={errors.tags?.message}>
              <S.Input
                type="text"
                name="tags"
                placeholder="lisbon, summer, fun (separeted by commas)"
                {...register("tags")}
                errormargin={errors.tags?.message ? +true : +false}
              />
            </FormGroup>
            <FormGroup
              labelText={"Description"}
              errorMessage={errors.description?.message}
            >
              <S.TextAreaInput
                type="text"
                name="description"
                placeholder="Amazing times with my friends in Lisbon!"
                {...register("description")}
                errormargin={errors.description?.message ? +true : +false}
              />
            </FormGroup>
            <FormGroup labelText={"Photo"} errorMessage={errors.photo?.message}>
              <S.FileInputWrapper
                errorMargin={errors.photo?.message ? true : false}
              >
                <S.CustomFileInput onClick={handleFileInputClick}>
                  Choose File
                </S.CustomFileInput>
                <S.FileInput
                  type="file"
                  {...rest}
                  name="photo"
                  ref={(e) => {
                    ref(e);
                    fileInputRef.current = e;
                  }}
                />
                {fileName && <S.FileName>{fileName}</S.FileName>}
              </S.FileInputWrapper>
            </FormGroup>
          </S.InputsWrapper>
          {fileUploadLoading || newPostLoading ? (
            <LoaderSpinner />
          ) : (
            <S.ButtonsContainer>
              <S.CancelButton onClick={handleClickCancelBtn}>
                Cancel
              </S.CancelButton>
              <S.SubmitInput type="submit" id="submit" value="Submit" />
            </S.ButtonsContainer>
          )}
        </S.Form>
      </Modal>
    </>
  );
};

export default NewPostModalForm;
