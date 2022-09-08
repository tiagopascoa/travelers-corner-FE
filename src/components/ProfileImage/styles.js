import styled, { css } from 'styled-components'

const styles = {
    Container: styled.div`
        border-radius: 50%;
        background: ${({ image }) => `url(${image})`};
        background-size: cover;

        ${({ size }) => {
            if (size) {
                return css`
                    height: ${size}rem;
                    width: ${size}rem;
                    border: 2px solid #28527a;
                `
            }
            return css`
                height: 3.5rem;
                width: 3.5rem;
                border: 2px solid #28527a;
            `
        }}
    `,
}

export default styles