import React from "react";
//Styles
import S from "./styles";
//Components
import ProfileImage from "../ProfileImage";

const NewPostPrompt = ({ setShowAddPostModal, user }) => {
  const handleNewPostClick = () => {
    setShowAddPostModal((prev) => !prev);
  };

  return (
    <S.NewPostContainer>
      <S.ProfileAndPromptRow>
        <div>
          <ProfileImage image={user?.imageUrl} />
        </div>
        <S.PromptContainer onClick={handleNewPostClick}>
          <S.PromptText>
            Hey {user?.firstName}, Ready to start sharing your travels?
          </S.PromptText>
        </S.PromptContainer>
      </S.ProfileAndPromptRow>
      <S.NewPostIconRow>
        <S.NewPostIconWrapper onClick={handleNewPostClick}>
          <S.NewPostIcon />
          <S.NewPostText>+ New Post</S.NewPostText>
        </S.NewPostIconWrapper>
      </S.NewPostIconRow>
    </S.NewPostContainer>
  );
};

export default NewPostPrompt;
