import { useState, useEffect } from "react";
//Styles
import S from "./styles";
//Components
import ProfileImage from "../ProfileImage";
import { useAuthContext } from "../../hooks/useAuthContext";
import UserPostsSwiper from "../UserPostsSwiper";
import LoaderSpinner from "../LoaderSpinner";
import EditProfileModalForm from "../EditProfileModalForm";
import DeleteProfileModal from "../DeleteProfile";
import FollowingSwiper from "../FollowingSwiper";
//Api
import { getUserTravelPosts, getUser } from "../../api/apiEndpoints";

const MyProfileCard = () => {
  const { user: userContext } = useAuthContext();
  const [userPostsFetchError, setUserPostsFetchError] = useState(null);
  const [userPostsLoading, setUserPostsLoading] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showDeleteProfileModal, setShowDeleteProfileModal] = useState(false);
  const [userProfile, setUserProfile] = useState("");
  const [userProfileLoading, setUserProfileLoading] = useState(false);
  const [userProfileFetchError, setUserProfileFetchError] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  //TODO handling api errors

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (userContext) {
      setUserProfileLoading(true);
      setUserProfileFetchError(false);
      const fetchUser = async () => {
        try {
          const userResponse = await getUser(
            userContext.userId,
            userContext.token
          );
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
  }, [userContext]);

  useEffect(() => {
    if (userContext) {
      setUserPostsLoading(true);
      setUserPostsFetchError(false);
      const fetchUserPosts = async () => {
        try {
          const response = await getUserTravelPosts(
            userContext.userId,
            userContext.token
          );
          setUserPosts(response.data);
          return response;
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
  }, [userContext]);

  const handleClickEditProfile = () => {
    setShowEditProfileModal((prev) => !prev);
  };

  const handleClickDeleteProfile = () => {
    setShowDeleteProfileModal((prev) => !prev);
  };

  return (
    <S.ProfileCardContainer>
      {userProfileLoading ? (
        <LoaderSpinner />
      ) : (
        <S.Profile>
          <ProfileImage image={userProfile.imageUrl} size={15} />
          <S.ContactInfoContainer>
            <S.NameAndEmailContainer>
              <S.Name>
                {userProfile.firstName} {userProfile.lastName}
              </S.Name>
              <S.Email>{userProfile.email}</S.Email>
              <S.LocationContainer>
                <S.LocationIncon />
                <S.Location>
                  {userProfile.homeCity}, {userProfile.homeCountry}
                </S.Location>
              </S.LocationContainer>
            </S.NameAndEmailContainer>
            <S.ButtonsContainer>
              <S.EditProfileButton onClick={handleClickEditProfile}>
                Edit Profile
              </S.EditProfileButton>
              <S.DeleteProfileButton onClick={handleClickDeleteProfile}>
                Delete Profile
              </S.DeleteProfileButton>
            </S.ButtonsContainer>
          </S.ContactInfoContainer>
        </S.Profile>
      )}
      <S.PostsAndUsersContainer>
        <S.TitleContainer>
          {/* <S.PostsIcon /> */}
          <S.Title>My Posts</S.Title>
        </S.TitleContainer>
        {userPostsLoading ? (
          <LoaderSpinner />
        ) : (
          <UserPostsSwiper userPosts={userPosts} screenSize={screenSize} />
        )}
      </S.PostsAndUsersContainer>
      {!userProfile || userProfileLoading ? (
        <LoaderSpinner />
      ) : (
        <S.PostsAndUsersContainer following>
          <S.TitleContainer>
            {/* <S.FollowingIcon /> */}
            <S.Title>Following</S.Title>
          </S.TitleContainer>
          <FollowingSwiper
            following={userProfile?.following}
            screenSize={screenSize}
          />
        </S.PostsAndUsersContainer>
      )}

      <EditProfileModalForm
        showModal={showEditProfileModal}
        setShowModal={setShowEditProfileModal}
        title={"Edit Profile"}
        profileFormDefaultValues={userContext}
      />
      <DeleteProfileModal
        showModal={showDeleteProfileModal}
        setShowModal={setShowDeleteProfileModal}
        user={userContext}
      />
    </S.ProfileCardContainer>
  );
};

export default MyProfileCard;
