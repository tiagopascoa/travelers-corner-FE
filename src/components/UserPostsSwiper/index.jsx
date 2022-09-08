//Styles
import S from "./styles";
//Tools
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//Swiper
import SwiperCore, { Pagination /* , Navigation */ } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
SwiperCore.use([Pagination /* , Navigation */]);

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

  const handleClickLocation = (postId) => {
    navigate(`/travel-post/${postId}`);
  };

  return userPosts.length > 0 ? (
    <S.SwiperContainer margin={setSwiperMargin() ? "45px" : "0"}>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        /* onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)} */
        pagination={{ clickable: true }}
        /* navigation={true} */
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
          },
        }}
      >
        {userPosts.map((post) => {
          return (
            <SwiperSlide key={post._id}>
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
            </SwiperSlide>
          );
        })}
      </Swiper>
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
