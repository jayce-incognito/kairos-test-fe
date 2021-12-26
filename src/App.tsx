import React from 'react';
import './reset.scss';
import { GlobalStyled } from 'src/styles';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import MainRoute from 'src/module/MainRoute';
import { themeSelector } from './module/Setting';
import withApp from './App.enhance';
import { TooltipContainer } from './module/Tooltip';
import { Toast } from './components/Toast';

const history = createBrowserHistory(); // Instead of createBrowserHistory();

const Styled = styled.div`
    &.app-container {
        width: 100%;
        height: 100%;
    }
`;

const App: React.FunctionComponent = () => {
    const theme = useSelector(themeSelector);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyled />
            <Styled theme={theme} className="app-container">
                <Router history={history}>
                    <MainRoute />
                    <Toast />
                </Router>
            </Styled>
            <TooltipContainer />
        </ThemeProvider>
    );
};

export default withApp(React.memo(App));
