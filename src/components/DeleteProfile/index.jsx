import { useState } from "react";
import S from "./styles";
//Components
import Modal from "../Modal";
import LoaderSpinner from "../LoaderSpinner";
//Api
import { deleteProfile } from "../../api/apiEndpoints";
//Hooks
import { useLogout } from "../../hooks/useLogout";

const DeleteProfileModal = ({ showModal, setShowModal, user }) => {
  const { logout } = useLogout();
  const [deleteProfileError, setDeleteProfileError] = useState(null);
  const [deleteProfileLoading, setDeleteProfileLoading] = useState(false);

  const handleClickCancelBtn = () => {
    setShowModal((prev) => !prev);
  };

  const handleClickConfirm = async () => {
    setDeleteProfileLoading(true);
    try {
      //Delete user profile and posts
      await deleteProfile({ userId: user.userId }, user.token);
      setDeleteProfileLoading(false);
      logout();
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response; // take everything but 'request'
      setDeleteProfileError(errorObject.data.error);
      console.log(errorObject.data.error);
    }
  };

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        title={"Are you sure you want to delete your profile?"}
        subTitle={
          "All your personal information and your travel posts will be deleted. This action is irreversible!"
        }
        maxWidth={"770px"}
      >
        {deleteProfileLoading ? (
          <LoaderSpinner />
        ) : (
          <S.ButtonsContainer modalGap>
            <S.Button onClick={handleClickCancelBtn}>Cancel</S.Button>
            <S.Button onClick={handleClickConfirm}>Confirm</S.Button>
          </S.ButtonsContainer>
        )}
      </Modal>
    </>
  );
};

export default DeleteProfileModal;
