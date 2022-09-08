import { useState, useEffect } from "react";
//Styles
import S from "./styles";
//Tools
import { useParams } from "react-router-dom";
//Components
import FullPost from "../../components/FullPost";
import LoaderSpinner from "../../components/LoaderSpinner";
import WeatherForecast from "../../components/WeatherForecast";
import Comments from "../../components/Comments";
//Api
import { getPost } from "../../api/apiEndpoints";
//Context
import { useAuthContext } from "../../hooks/useAuthContext";

const TravelPostPage = () => {
  const { postId } = useParams();
  const { user } = useAuthContext();
  const [post, setPost] = useState(null);
  const [postIsLoading, setPostIsLoading] = useState(true);
  const [postFetchError, setPostFetchError] = useState(null);
  const [postCoordinates, setPostCoordinates] = useState({
    lat: 0,
    long: 0,
  });
  const [geoCodeError, setGeoCodeError] = useState(false);

  //effect to getpost by id
  useEffect(() => {
    if (postId && user) {
      setPostFetchError(null);
      const fetchPost = async () => {
        try {
          const postResponse = await getPost(postId, user?.token);
          setPost(postResponse.data);
        } catch (error) {
          const { response } = error;
          const { request, ...errorObject } = response;
          setPostFetchError(errorObject.data.message);
          console.log(errorObject.data.error);
          console.log("error: ", error);
        } finally {
          setPostIsLoading(false);
        }
      };
      fetchPost();
    }
  }, [postId, user]);

  useEffect(() => {
    if (post) {
      const google = window.google;
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode(
        { address: `${post.city}, ${post.country}` },
        (results, status) => {
          if (status === "OK") {
            const lat = results[0].geometry.location.lat();
            const lng = results[0].geometry.location.lng();
            /* console.log(lat, lng); */
            setPostCoordinates({
              lat: lat,
              long: lng,
            });
          } else {
            console.log(
              "Geocode was not successful for the following reason: " + status
            );
            setGeoCodeError(true);
          }
        }
      );
    }
  }, [post]);

  return (
    <S.TravelPostPage>
      <S.TravelPostPageLayout>
        <S.PageCard>
          {!postIsLoading ? (
            <>
              <FullPost post={post} userId={user.userId} />
              <WeatherForecast
                postCoordinates={postCoordinates}
                city={post?.city}
                geoCodeError={geoCodeError}
              />
              <S.CommentsContainer>
                <S.CommentsTitleContainer>
                  <S.CommentsIcon />
                  <S.CommentsTitle>Comments</S.CommentsTitle>
                </S.CommentsTitleContainer>
                <Comments post={post} user={user} setPost={setPost} />
              </S.CommentsContainer>
            </>
          ) : (
            <LoaderSpinner />
          )}
        </S.PageCard>
      </S.TravelPostPageLayout>
    </S.TravelPostPage>
  );
};

export default TravelPostPage;
