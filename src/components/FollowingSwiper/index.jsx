//Styles
import S from "./styles";
//Tools
import { useNavigate } from "react-router-dom";
//Components
import ProfileImage from "../ProfileImage";
//Swiper
import SwiperCore, { Pagination /* , Navigation */ } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
SwiperCore.use([Pagination /* , Navigation */]);

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

  const handleCLickUserName = (userId) => {
    navigate(`/user-profile/${userId}`);
  };
  return following.length > 0 ? (
    <S.SwiperContainer margin={setSwiperMargin() ? "45px" : "0"}>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        /* onSlideChange={() => console.log("slide change")} */
        /* onSwiper={(swiper) => console.log(swiper)} */
        pagination={{ clickable: true }}
        /* navigation={true} */
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
          },
        }}
      >
        {following.map((user) => {
          return (
            <SwiperSlide key={user._id}>
              <S.UserCard>
                <ProfileImage
                  image={user.imageUrl}
                  size={screenSize <= 480 ? 6 : 8}
                />
                <S.NameContainer onClick={() => handleCLickUserName(user._id)}>
                  <S.LinkIcon />
                  <S.Name>
                    {user.firstName}, {user.lastName}
                  </S.Name>
                </S.NameContainer>
              </S.UserCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
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
