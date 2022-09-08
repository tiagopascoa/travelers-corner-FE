import React from "react";
//Styles
import { customThemeStyles, S } from "./styles";
import ReactWeather, { useOpenWeather } from "react-open-weather";

const WeatherForecast = ({ postCoordinates, city, geoCodeError }) => {
  const wheaterKey = process.env.REACT_APP_WHEATER_API_KEY;

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: wheaterKey,
    lat: postCoordinates.lat,
    lon: postCoordinates.long,
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });

  return geoCodeError ? (
    <S.EmptySateText>
      We can't provide a weather forecast for this city 😢
    </S.EmptySateText>
  ) : (
    <S.WheaterWrapper>
      <ReactWeather
        className="weather"
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel={city}
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        showForecast
        theme={customThemeStyles}
      />
    </S.WheaterWrapper>
  );
};

export default WeatherForecast;
