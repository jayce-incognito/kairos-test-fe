import React from 'react';
import styled from 'styled-components';
import TopFooter from './Footer.top';
import BottomFooter from './Footer.bottom';

const Styled = styled.footer`
    &.footer-container {
        background: #f3f9ff;
    }
`;

const Footer = () => {
    return (
        <Styled className="footer-container">
            <TopFooter />
            <BottomFooter />
        </Styled>
    );
};

export default React.memo(Footer);
