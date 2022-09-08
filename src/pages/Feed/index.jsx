import React, { useState, useEffect, useCallback } from "react";
//Styles
import S from "./styles";
//Components
import PostCard from "../../components/PostCard";
import NewPostPrompt from "../../components/NewPostPrompt";
import NewPostModalForm from "../../components/NewPostModalForm";
import LoaderSpinner from "../../components/LoaderSpinner";
//Api
import { getAllTravelPosts } from "../../api/apiEndpoints";
//Hooks
import { useAuthContext } from "../../hooks/useAuthContext";

const TravelersFeed = () => {
  const { user } = useAuthContext();
  const [showAddPostModal, setShowAddPostModal] = useState(false);
  const [travelPostsFetchError, setTravelPostsFetchError] = useState(false);
  const [travelPostsLoading, setTravelPostsLoading] = useState(null);
  const [travelPosts, setTravelPosts] = useState([]);

  const fetchTravelPosts = useCallback(async () => {
    setTravelPostsLoading(true);
    setTravelPostsFetchError(false);
    try {
      const response = await getAllTravelPosts(user.token);
      setTravelPosts(response.data);
      return response;
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response; // take everything but 'request'
      setTravelPostsFetchError(errorObject.data.error);
      console.log(errorObject.data.error);
    } finally {
      setTravelPostsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchTravelPosts();
    }
  }, [fetchTravelPosts, user]);

  return (
    <>
      <S.FeedSection>
        <S.FeedLayout>
          <NewPostPrompt
            setShowAddPostModal={setShowAddPostModal}
            showAddPostModal={showAddPostModal}
            user={user}
          />
          {travelPostsLoading ? (
            <LoaderSpinner width={"4rem"} height={"4rem"}/>
          ) : (
            <S.PostsContainer>
              {travelPosts.map((post) => {
                return <PostCard key={post._id} post={post} user={user} travelPosts={travelPosts} setTravelPosts={setTravelPosts}/>;
              })}
            </S.PostsContainer>
          )}
        </S.FeedLayout>
      </S.FeedSection>
      <NewPostModalForm
        showModal={showAddPostModal}
        setShowModal={setShowAddPostModal}
        title={`New Travel Post`}
        fetchTravelPosts={fetchTravelPosts}
      />
    </>
  );
};

export default TravelersFeed;
