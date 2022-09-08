import React, { useRef, useEffect, useCallback } from "react";
//Styles
import S from "./styles";

const Modal = ({
  showModal,
  setShowModal,
  title,
  subTitle,
  maxWidth,
  children,
}) => {
  const modalRef = useRef();

  //Close with ESC
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <S.Background onClick={closeModal} ref={modalRef}>
          <S.ModalWrapper showModal={showModal} maxWidth={maxWidth}>
            <S.CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
            <S.ModalContent>
              <S.TitleContainer>
                <S.Title>{title}</S.Title>
                <S.SubTitle>{subTitle}</S.SubTitle>
              </S.TitleContainer>
              {children}
            </S.ModalContent>
          </S.ModalWrapper>
        </S.Background>
      ) : null}
    </>
  );
};

export default Modal;
