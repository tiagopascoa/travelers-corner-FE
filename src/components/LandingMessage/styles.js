import styled from "styled-components/macro";
import { IoMdPhotos } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { TiWeatherPartlySunny } from "react-icons/ti";

const styles = {
  PhotoIcon: styled(IoMdPhotos)`
    color: #28527a;
    width: 4rem;
    height: 4rem;
    @media screen and (max-width: 480px) {
      width: 3rem;
      height: 3rem;
    }
  `,
  WeatherIcon: styled(TiWeatherPartlySunny)`
    color: #28527a;
    width: 4rem;
    height: 4rem;
    @media screen and (max-width: 480px) {
      width: 3rem;
      height: 3rem;
    }
  `,
  LikeIcon: styled(AiFillLike)`
    color: #28527a;
    width: 4rem;
    height: 4rem;
    @media screen and (max-width: 480px) {
      width: 3rem;
      height: 3rem;
    }
  `,
  IntroMessageContainer: styled.div`
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.79);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(7.4px);
    -webkit-backdrop-filter: blur(7.4px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    max-width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    padding: 1.5rem;
    @media screen and (max-width: 480px) {
        gap: 1.5rem;
        max-width: 100%;
        margin: 1rem;
    }
  `,
  TitleContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  `,
  IntroTitle: styled.h1`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 2.5rem;
    color: #28527a;
    @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    @media screen and (max-width: 480px) {
      font-size: 1.8rem;
    }
  `,
  IntroTitleBrand: styled.span`
    font-family: "Pacifico", cursive;
    font-size: 3rem;
    color: #28527a;
    font-weight: normal;
    padding-left: 0.5rem;
    text-align: center;
    @media screen and (max-width: 480px) {
      font-size: 2rem;
      padding: 0;
    }
  `,
  IntroMessage: styled.p`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 1.5rem;
    color: #28527a;
    padding-bottom: 0.5rem;
    text-align: center;
    @media screen and (max-width: 480px) {
      font-size: 1.2rem;
    }
  `,
  IconAndDescriptionContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 33%;
  `,
  IconDescription: styled.p`
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    color: #28527a;
    text-align: center;
    @media screen and (max-width: 480px) {
      font-size: 0.7rem;
    }
  `,
  GetStartedButton: styled.button`
    font-family: "Open Sans Semibold600", sans-serif;
    font-size: 1rem;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    background-color: #28527a;
    border: 3px solid transparent;
    border-radius: 15px;
    padding: 0.5rem;
    width: 10rem;
    &:hover {
      transition: all 0.2s ease-in-out;
      background-color: transparent;
      color: #28527a;
      border: 3px solid #28527a;
    }
  `,
};

export default styles;
