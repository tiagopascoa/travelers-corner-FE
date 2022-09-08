import styled from "styled-components";

const styles = {
  Spinner: styled.svg`
    animation: rotate 1s linear infinite;
    width: ${({ width }) => width || 35}px;
    height: ${({ height }) => height || 35}px;

    & .path {
      stroke: ${({ color }) => color || "#28527a"};
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes dash {
      0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
      }
      100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
      }
    }
  `,
  SpinnerContainer: styled.div`
    display: flex;
    justify-content: center;
  `,
};

export default styles;
