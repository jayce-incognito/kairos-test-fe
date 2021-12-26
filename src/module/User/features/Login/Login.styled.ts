import styled from 'styled-components';
import { COLORS } from 'src/styles';

export const Styled = styled.div`
    &.login-page {
        position: relative;
        width: 100%;
        height: 100%;
    }
    &.login-page form {
        padding: 24px;
        max-width: 414px;
        margin: auto;
        min-width: 320px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 30px;
        border: solid 1px ${COLORS.lightGrey21};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 60%;
        min-height: 500px;
    }
    &.login-page button.btn-container {
        margin-top: 10px;
        width: 100%;
    }
`;
