//Styles
import S from "./styles";
//Tools
import { useNavigate } from "react-router-dom";

const LandingMessage = () => {
  const navigate = useNavigate();
  const handleClickGetStarted = () => {
    navigate("/login");
  };
  return (
    <S.IntroMessageContainer>
      <S.TitleContainer>
        <S.IntroTitle>
          Welcome to the
          <S.IntroTitleBrand>Travelers Corner</S.IntroTitleBrand>
        </S.IntroTitle>
        <S.IntroMessage>
          Get inspired and share your journey!
        </S.IntroMessage>
      </S.TitleContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          alignItems: "flex-start",
        }}
      >
        <S.IconAndDescriptionContainer>
          <S.PhotoIcon />
          <S.IconDescription>
            Post photos and travel highlights
          </S.IconDescription>
        </S.IconAndDescriptionContainer>
        <S.IconAndDescriptionContainer>
          <S.WeatherIcon />
          <S.IconDescription>
            Wheater forecasts at destinations
          </S.IconDescription>
        </S.IconAndDescriptionContainer>
        <S.IconAndDescriptionContainer>
          <S.LikeIcon />
          <S.IconDescription>
            Follow other travelers
          </S.IconDescription>
        </S.IconAndDescriptionContainer>
      </div>
      <div>
        <S.GetStartedButton onClick={handleClickGetStarted}>
          Get Started!
        </S.GetStartedButton>
      </div>
    </S.IntroMessageContainer>
  );
};

export default LandingMessage;
