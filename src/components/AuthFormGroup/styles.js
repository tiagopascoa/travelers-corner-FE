import styled from "styled-components/macro";

const styles = {
  FormGroupWrapper: styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
  `,
  Label: styled.label`
    font-family: "Open Sans Semibold600", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: #28527a;
    padding-bottom: 0.2rem;
  `,
  SubmitError: styled.p`
    font-family: "Open Sans", sans-serif;
    font-size: 0.8rem;
    color: #ff3333;
    /* padding-top: 0.5rem; */
  `,
};

export default styles;
