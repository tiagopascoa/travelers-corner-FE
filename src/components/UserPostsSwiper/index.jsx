//Styles
import S from "./styles";
//Tools
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//Swiper
import Slider from "react-slick";

const UserPosts = ({
  userPosts,
  notLoggedUserProfile,
  screenSize,
  userProfileName,
}) => {
  const navigate = useNavigate();

  const setSwiperMargin = () => {
    if (screenSize <= 480 && userPosts.length > 1) {
      return true;
    } else if (screenSize <= 768 && userPosts.length > 2) {
      return true;
    } else if (screenSize > 768 && userPosts.length > 4) {
      return true;
    } else {
      return false;
    }
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleClickLocation = (postId) => {
    navigate(`/travel-post/${postId}`);
  };

  return userPosts.length > 0 ? (
    <S.SwiperContainer margin={setSwiperMargin() ? "45px" : "0"}>
      <Slider {...settings}>
        {userPosts.map((post) => {
          return (
            <div key={post._id}>
              <S.UserPostCard>
                <S.ImageContainer>
                  <S.Image src={post.imageUrl} />
                </S.ImageContainer>
                <S.LocationContainer>
                  <S.LocationIncon />
                  <S.Location onClick={() => handleClickLocation(post._id)}>
                    {post.city}, {post.country}
                  </S.Location>
                </S.LocationContainer>
              </S.UserPostCard>
            </div>
          );
        })}
      </Slider>
    </S.SwiperContainer>
  ) : notLoggedUserProfile ? (
    <S.EmptySateText>
      {userProfileName} didn't post anything yet.
    </S.EmptySateText>
  ) : (
    <S.EmptySateText>
      You can create your first post directly from the{" "}
      <Link to="/feed">feed page</Link>.
    </S.EmptySateText>
  );
};

export default UserPosts;
