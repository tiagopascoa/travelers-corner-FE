import styled from "styled-components/macro";

export const S = {
  WheaterWrapper: styled.div`
    /* padding: 1rem; */
    & .css-172uml7 .rw-container-right {
      background-color: transparent;
    }
    & .css-172uml7 .rw-container-main {
      border-radius: 1rem;
    }
  `,
  EmptySateText: styled.label`
    font-family: "Open Sans", sans-serif;
    color: #28527a;
    font-size: 0.9rem;
    text-align: center;
    line-height: 1.6rem;
  `,
};

export const customThemeStyles = {
  fontFamily: "Helvetica, sans-serif",
  gradientStart: "#28527A",
  gradientMid: "#466A8D",
  gradientEnd: "#7A94AD",
  locationFontColor: "#FFF",
  todayTempFontColor: "#FFF",
  todayDateFontColor: "#FFF",
  todayRangeFontColor: "#FFF",
  todayDescFontColor: "#FFF",
  todayInfoFontColor: "#FFF",
  todayIconColor: "#FFF",
  forecastBackgroundColor: "#FFF",
  forecastSeparatorColor: "#DDD",
  forecastDateColor: "#777",
  forecastDescColor: "#777",
  forecastRangeColor: "#777",
  forecastIconColor: "#28527A",
};
