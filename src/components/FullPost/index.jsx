import React from "react";
//Styles
import S from "./styles";
//Tools
import { useNavigate } from "react-router-dom";

const FullPost = ({ post, userId }) => {
  const navigate = useNavigate();

  const handleClickUserName = (postUserId) => {
    if (userId !== postUserId) {
      navigate(`/user-profile/${postUserId}`);
    } else {
      navigate(`/my-profile`);
    }
  };

  return (
    <S.PostDetailsContainer>
      <S.ImageContainer>
        <S.PostImage src={post.imageUrl} alt="destination" />
      </S.ImageContainer>
      <S.PostInfoContainer>
        <S.Title>
          {post.city}, {post.country}
        </S.Title>
        <S.InfoWrapper>
          <S.Labels>Description</S.Labels>
          <S.Description>{post.description}</S.Description>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.Labels>Tags</S.Labels>
          <S.Description tags>
            {post.tags.map((tag, index) => {
              return <S.Tag key={index}>#{tag}</S.Tag>;
            })}
          </S.Description>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.Labels>Posted by</S.Labels>
          <S.Description
            onClick={() => handleClickUserName(post.user._id)}
            link
          >
            {post.user.firstName} {post.user.lastName}
          </S.Description>
        </S.InfoWrapper>
        <S.InfoWrapper>
          <S.Labels>Date</S.Labels>
          <S.Description>{post.createdAt.slice(0, 10)}</S.Description>
        </S.InfoWrapper>
      </S.PostInfoContainer>
    </S.PostDetailsContainer>
  );
};

export default FullPost;
