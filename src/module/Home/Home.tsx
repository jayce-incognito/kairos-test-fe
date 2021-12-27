import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import HomeSections from './features/Section';
import HomeHeader from './features/Header';
import HomeFooter from './features/Footer';
import { IHomeLanguage } from './Home.interface';
import { translateByFieldSelector } from '../Setting';

declare global {
    interface Window {
        ReactNativeWebView: any;
    }
}

const Styled = styled.div``;

const Home = () => {
    const homeLanguage: IHomeLanguage = useSelector(translateByFieldSelector)('home');
    return (
        <Styled className="home-container">
            <HomeHeader />
            <HomeSections />
            <HomeFooter />
        </Styled>
    );
};

export default React.memo(Home);
