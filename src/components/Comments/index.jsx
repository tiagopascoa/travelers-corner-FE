import React, { useEffect, useRef } from "react";
//Styles
import S from "./styles";
//Tools
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//Components
import ProfileImage from "../ProfileImage";
import LoaderSpinner from "../LoaderSpinner";
//Api
import { newComment } from "../../api/apiEndpoints";

const commentSchema = yup.object().shape({
  comment: yup.string().required("Comment can't be empty."),
});

const Comments = ({ post, user, setPost }) => {
  const bottomRef = useRef(null);
  const [commentLoading, setCommentLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(commentSchema),
  });

  useEffect(() => {
    // scroll to bottom every time new post is added
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [post]);

  const onSubmit = async (commentFormData) => {
    /* console.log("commentFormData: ", commentFormData); */
    try {
      setCommentLoading(true);
      const response = await newComment(
        { postId: post._id, comment: commentFormData.comment },
        user.token
      );
      console.log("response: ", response);
      //find last index of response.data.comments and update object comment.user with user data
      const lastCommentIndex = response.data.comments.length - 1;
      response.data.comments[lastCommentIndex].user = user;
      setPost(response.data);
      setCommentLoading(false);
    } catch (error) {
      console.log("error: ", error);
    } finally {
      setCommentLoading(false);
    }
    reset();
  };

  return (
    <S.CommentsContainer>
      <S.PostedComments>
        {post.comments.length > 0 ? (
          post.comments.map((comment) => {
            return (
              <S.CommentWrapper key={comment._id}>
                <div>
                  <ProfileImage image={comment.user.imageUrl} size={3} />
                </div>
                <S.NameAndDateContainer>
                  <S.UserName
                    onClick={() => {} /* handleClickUserName(post.user._id) */}
                  >
                    {comment.user.firstName} {comment.user.lastName}
                  </S.UserName>
                  <S.CommentTextContainer>
                    {comment.comment}
                  </S.CommentTextContainer>
                  <S.Date>{comment.createdAt.slice(0, 10)}</S.Date>
                </S.NameAndDateContainer>
                <div ref={bottomRef} />
              </S.CommentWrapper>
            );
          })
        ) : (
          <S.EmptySateText>
            This post doesn't have any comments yet. Be the first to comment!
          </S.EmptySateText>
        )}
      </S.PostedComments>

      <S.NewCommentContainer>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.CommentInput
            type="text"
            placeholder="Comment this post..."
            name="comment"
            {...register("comment")}
          />
          {commentLoading ? (
            <LoaderSpinner />
          ) : (
            <S.SubmitInput type="submit" value="Send" />
          )}
        </S.Form>
        <S.SubmitError>{errors.comment?.message}</S.SubmitError>
      </S.NewCommentContainer>
    </S.CommentsContainer>
  );
};

export default Comments;
