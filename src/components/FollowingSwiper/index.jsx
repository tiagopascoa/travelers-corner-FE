//Styles
import S from "./styles";
//Tools
import { useNavigate } from "react-router-dom";
//Components
import ProfileImage from "../ProfileImage";
//Swiper
import Slider from "react-slick";

const FollowingSwiper = ({
  following,
  notLoggedUserProfile,
  screenSize,
  userProfileName,
}) => {
  const navigate = useNavigate();

  const setSwiperMargin = () => {
    if (screenSize <= 480 && following.length > 2) {
      return true;
    } else if (screenSize <= 768 && following.length > 3) {
      return true;
    } else if (screenSize > 768 && following.length > 4) {
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
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleCLickUserName = (userId) => {
    navigate(`/user-profile/${userId}`);
  };

  return following.length > 0 ? (
    <S.SwiperContainer margin={setSwiperMargin() ? "45px" : "0"}>
      <Slider {...settings}>
        {following.map((user) => {
          return (
            <div key={user._id} style={{width: "400px"}}>
              <S.UserCard>
                <ProfileImage
                  image={user.imageUrl}
                  size={screenSize <= 480 && following.length > 1 ? 6 : 8}
                />
                <S.NameContainer onClick={() => handleCLickUserName(user._id)}>
                  <S.LinkIcon />
                  <S.Name>
                    {user.firstName}, {user.lastName}
                  </S.Name>
                </S.NameContainer>
              </S.UserCard>
            </div>
          );
        })}
      </Slider>
    </S.SwiperContainer>
  ) : notLoggedUserProfile ? (
    <S.EmptySateText>
      {userProfileName} is not following anyone.
    </S.EmptySateText>
  ) : (
    <S.EmptySateText>
      Visit other users profile and start following them!
    </S.EmptySateText>
  );
};

export default FollowingSwiper;
