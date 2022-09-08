import React from "react";
//Styles
import S from "./styles";
//Tools
import { useNavigate } from "react-router-dom";
//Components
import ProfileImage from "../ProfileImage";
//Api
import { newLike, deleteLike } from "../../api/apiEndpoints";

const PostCard = ({ post, user, travelPosts, setTravelPosts }) => {
  const navigate = useNavigate();

  const handleClickUserName = (userId) => {
    if (userId !== user.userId) {
      navigate(`/user-profile/${userId}`);
    } else {
      navigate(`/my-profile`);
    }
  };

  const handleRedirectToPost = (postId) => {
    navigate(`/travel-post/${postId}`);
  };

  const handleClickNewLike = async (postId) => {
    try {
      const newLikeResponse = await newLike({ postId }, user.token);
      setTravelPosts(
        travelPosts.map((post) =>
          post._id === postId
            ? { ...post, likes: newLikeResponse.data.post.likes }
            : post
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickDeleteLike = async (postId) => {
    try {
      const deleteLikeResponse = await deleteLike({ postId }, user.token);
      setTravelPosts(
        travelPosts.map((post) =>
          post._id === postId
            ? { ...post, likes: deleteLikeResponse.data.post.likes }
            : post
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  //Check if current user already liked the post
  const isLiked = post.likes.some((userId) => userId === user.userId);

  return (
    <S.CardContainer>
      <S.Header>
        <S.UserInfoRow>
          <ProfileImage image={post.user.imageUrl} />
          <S.NameAndDateContainer>
            <S.UserName onClick={() => handleClickUserName(post.user._id)}>
              {post.user.firstName} {post.user.lastName}
            </S.UserName>
            <S.Date>{post.createdAt.slice(0, 10)}</S.Date>
          </S.NameAndDateContainer>
          <S.LocationContainer>
            <S.LocationIncon />
            <S.Location>
              {post.city}, {post.country}
            </S.Location>
          </S.LocationContainer>
        </S.UserInfoRow>
        <S.ImageContainer>
          <S.Image
            src={post.imageUrl}
            alt="destination"
            onClick={() => handleRedirectToPost(post._id)}
          />
        </S.ImageContainer>
      </S.Header>
      <S.Body>
        <S.TagsContainer>
          {post.tags.map((tag, index) => {
            return <S.Tag key={index}>#{tag}</S.Tag>;
          })}
        </S.TagsContainer>

        {isLiked ? (
          <S.LikesContainer
            onClick={() => {
              handleClickDeleteLike(post._id);
            }}
          >
            <S.LikeIconFilled />
            <S.LikeCount>
              {post.likes.length === 1
                ? `You like this post!`
                : post.likes.length === 2
                ? `You and 1 more like!`
                : `You and ${post.likes.length - 1} more likes!`}
            </S.LikeCount>
          </S.LikesContainer>
        ) : (
          <S.LikesContainer
            onClick={() => {
              handleClickNewLike(post._id);
            }}
          >
            <S.LikeIconOutline />
            <S.LikeCount>{post.likes.length} Likes</S.LikeCount>
          </S.LikesContainer>
        )}
        <S.CommentsContainer onClick={() => handleRedirectToPost(post._id)}>
          <S.CommentsIcon />
          <S.CommentsText>Comments</S.CommentsText>
        </S.CommentsContainer>
      </S.Body>
    </S.CardContainer>
  );
};

export default PostCard;
