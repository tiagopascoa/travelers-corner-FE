import React from "react";
//Styles
import S from "./styles";

// components
const LoaderSpinner = (props) => {
  const { width, height, color } = props;

  return (
    <S.SpinnerContainer>
      <S.Spinner
        viewBox="0 0 50 50"
        width={width}
        height={height}
        color={color}
      >
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </S.Spinner>
    </S.SpinnerContainer>
  );
};

export default LoaderSpinner;
