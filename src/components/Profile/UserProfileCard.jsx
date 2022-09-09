import { useState, useEffect } from "react";
//Styles
import S from "./styles";
//Tools
import { useParams } from "react-router-dom";
//Components
import ProfileImage from "../ProfileImage";
import { useAuthContext } from "../../hooks/useAuthContext";
import UserPostsSwiper from "../UserPostsSwiper";
import LoaderSpinner from "../LoaderSpinner";
import FollowingSwiper from "../FollowingSwiper";
//Api
import {
  getUser,
  addToFollowing,
  removeFromFollowing,
} from "../../api/apiEndpoints";
import { getUserTravelPosts } from "../../api/apiEndpoints";

const UserProfileCard = () => {
  const { userId: profileUserId } = useParams();
  const { user, dispatch } = useAuthContext();
  const [userProfile, setUserProfile] = useState("");
  const [userProfileFetchError, setUserProfileFetchError] = useState(false);
  const [userProfileLoading, setUserProfileLoading] = useState(null);
  const [userPostsFetchError, setUserPostsFetchError] = useState(false);
  const [userPostsLoading, setUserPostsLoading] = useState(null);
  const [addUserToFollowingLoading, setAddUserToFollowingLoading] =
    useState(false);
  const [addUserToFollowingError, setAddUserToFollowingError] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [isFollowing, setIsFollowing] = useState(null);
  const [shouldFetchUserOrPosts, setShouldFetchUserOrPosts] = useState(true);
  const [removeUserFromFollowingLoading, setRemoveUserFromFollowingLoading] =
    useState(false);
  const [removeUserFromFollowingError, setRemoveUserFromFollowingError] =
    useState(null);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  //TODO handling api errors

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (profileUserId && user && shouldFetchUserOrPosts) {
      setUserProfileLoading(true);
      setUserProfileFetchError(false);
      const fetchUser = async () => {
        try {
          const userResponse = await getUser(profileUserId, user.token);
          setUserProfile(userResponse.data);
        } catch (error) {
          const { response } = error;
          const { request, ...errorObject } = response; // take everything but 'request'
          setUserProfileFetchError(errorObject.data.message);
          console.log(errorObject.data.error);
          console.log("error: ", error);
        } finally {
          setUserProfileLoading(false);
        }
      };
      fetchUser();
    }
  }, [profileUserId, user, shouldFetchUserOrPosts]);

  useEffect(() => {
    if (profileUserId && user && shouldFetchUserOrPosts) {
      setUserPostsLoading(true);
      setUserPostsFetchError(false);
      const fetchUserPosts = async () => {
        try {
          const postsResponse = await getUserTravelPosts(
            profileUserId,
            user.token
          );
          setUserPosts(postsResponse.data);
        } catch (error) {
          const { response } = error;
          const { request, ...errorObject } = response; // take everything but 'request'
          setUserPostsFetchError(errorObject.data.error);
          console.log(errorObject.data.error);
          console.log("error: ", error);
        } finally {
          setUserPostsLoading(false);
        }
      };
      fetchUserPosts();
    }
  }, [profileUserId, user, shouldFetchUserOrPosts]);

  //Map logged user object and check if following array contains the user _id of the profile user
  useEffect(() => {
    if (user && userProfile) {
      const checkIfUserIsFollowing = () => {
        if (user.following) {
          const isFollowing = user.following.some(
            (followingUserId) => followingUserId === userProfile._id
          );
          return isFollowing;
        }
      };
      setIsFollowing(checkIfUserIsFollowing());
    }
  }, [user, userProfile]);

  const handleAddUserToFollowing = async () => {
    setShouldFetchUserOrPosts(false);
    try {
      setAddUserToFollowingLoading(true);
      const response = await addToFollowing(
        { userId: user.userId, userToFollowId: profileUserId },
        user.token
      );
      dispatch({
        type: "EDIT_USER",
        payload: {
          ...user,
          following: response.data.user.following,
        },
      });
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response; // take everything but 'request'
      setAddUserToFollowingError(errorObject.data.error);
      console.log(errorObject.data.error);
    } finally {
      setAddUserToFollowingLoading(false);
    }
  };

  const handleRomooveUserFromFollowing = async () => {
    setShouldFetchUserOrPosts(false);
    try {
      setRemoveUserFromFollowingLoading(true);
      const response = await removeFromFollowing(
        { userId: user.userId, userToUnfollowId: profileUserId },
        user.token
      );
      dispatch({
        type: "EDIT_USER",
        payload: {
          ...user,
          following: response.data.user.following,
        },
      });
    } catch (error) {
      const { response } = error;
      const { request, ...errorObject } = response; // take everything but 'request'
      setRemoveUserFromFollowingError(errorObject.data.error);
      console.log(errorObject.data.error);
    } finally {
      setRemoveUserFromFollowingLoading(false);
    }
  };

  return (
    <S.ProfileCardContainer>
      {userProfileLoading ? (
        <LoaderSpinner />
      ) : (
        <S.Profile>
          <ProfileImage image={userProfile?.imageUrl} size={15} />
          <S.ContactInfoContainer>
            <S.NameAndEmailContainer>
              <S.Name>
                {userProfile.firstName} {userProfile.lastName}
              </S.Name>
              {/* <S.Email>{userProfile.email}</S.Email> */}
              <S.LocationContainer>
                <S.LocationIncon />
                <S.Location>
                  {userProfile.homeCity}, {userProfile.homeCountry}
                </S.Location>
              </S.LocationContainer>
            </S.NameAndEmailContainer>

            {addUserToFollowingLoading || removeUserFromFollowingLoading ? (
              <LoaderSpinner />
            ) : isFollowing ? (
              <S.ButtonsContainer>
                <S.Button onClick={handleRomooveUserFromFollowing}>
                  <S.HeartBrokenIcon />
                  Unfollow
                </S.Button>
              </S.ButtonsContainer>
            ) : (
              <S.ButtonsContainer>
                <S.Button onClick={handleAddUserToFollowing}>
                  <S.HeartIcon />
                  Follow
                </S.Button>
              </S.ButtonsContainer>
            )}
          </S.ContactInfoContainer>
        </S.Profile>
      )}

      <S.PostsAndUsersContainer>
        <S.TitleContainer>
          <S.Title>{/* {userProfile.firstName}'s  */}Posts</S.Title>
        </S.TitleContainer>
        {userPostsLoading ? (
          <LoaderSpinner />
        ) : (
          <UserPostsSwiper
            userId={profileUserId}
            userPosts={userPosts}
            notLoggedUserProfile={true}
            userProfileName={userProfile.firstName}
            screenSize={screenSize}
          />
        )}
      </S.PostsAndUsersContainer>
      {!userProfile || userProfileLoading ? (
        <LoaderSpinner />
      ) : (
        <S.PostsAndUsersContainer following>
          <S.TitleContainer>
            <S.Title>Following</S.Title>
          </S.TitleContainer>
          <FollowingSwiper
            following={userProfile?.following}
            notLoggedUserProfile={true}
            screenSize={screenSize}
            userProfileName={userProfile.firstName}
          />
        </S.PostsAndUsersContainer>
      )}
    </S.ProfileCardContainer>
  );
};

export default UserProfileCard;
