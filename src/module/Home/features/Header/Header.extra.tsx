import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Tabs, { Tab } from 'src/components/Core/Tabs';
import { ENVS } from 'src/configs';
import homeRoute from 'src/module/Home/Home.route';

const Styled = styled.div`
    &.home-header-extra {
        height: 80vh;
        min-height: 600px;
        display: flex;
        flex-direction: row;
    }
    .home-banner {
        flex: 1 0 40%;
        max-width: 40%;
        height: 100%;
        padding: 2%;
        display: flex;
        flex-direction: column;
    }
    .home-banner .banner-title {
        font-style: normal;
        font-weight: 700;
        font-size: 56px;
        line-height: 76px;
        letter-spacing: 0.01em;
        color: #181949;
    }
    .bottom-home-banner {
        align-items: center;
        flex: 1;
    }
    .home-link {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        display: flex;
        align-items: center;
        color: #181949;
        > img {
            margin-right: 12px;
        }
    }
    .home-main {
        flex: 1 0 60%;
        max-width: 60%;
        background: url(${ENVS.REACT_APP_DOMAIN_URL}/images/bg1.svg);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        flex-direction: column;
        display: flex;
        flex-direction: column;
    }
    .sub-menu {
        height: 36px;
        background: #181949;
        padding-right: 15%;
        justify-content: flex-end;
    }
    .sub-menu-item {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #ffffff;
        margin-left: 10%;
        position: relative;
        padding-right: 16px;
        ::after {
            position: absolute;
            content: '';
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 6px solid #f3f3f3;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
        }
    }
    .sub-menu-2 {
        height: 36px;
        padding-right: 15%;
        justify-content: space-between;
        padding-left: 5%;
    }
    .sub-menu-item-2 {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #ffffff;
    }
    .main-tabs {
        display: flex;
        flex-direction: row;
        flex: 1;
    }
    .tabs {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .tab-list {
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translateX(-50%);
        min-width: 200px;
        justify-content: space-between;
    }
    .tab-content {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: row;
        width: 50%;
        min-width: 400px;
        justify-content: space-between;
    }
    .tab-child-title {
        font-style: normal;
        font-weight: 700;
        font-size: 64px;
        line-height: 87px;
        text-align: center;
        color: #cfe5ff;
    }
    .tab-child-desc {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 27px;
        text-align: center;
        color: #ffffff;
    }
`;

const HeaderExtra = () => {
    const Banner = React.memo(() => {
        return (
            <div className="home-banner">
                <div className="top-home-banner flex-jcb">
                    <div className="banner">
                        <img src={`${ENVS.REACT_APP_DOMAIN_URL}/images/logo.svg`} alt="" />
                    </div>
                    <Link to={homeRoute.path} className="home-link flex">
                        <img src={`${ENVS.REACT_APP_DOMAIN_URL}/images/home-icon.svg`} alt="" />
                        Home
                    </Link>
                </div>
                <div className="bottom-home-banner flex">
                    <p className="banner-title">
                        Asia IT
                        <br />
                        Market Place
                    </p>
                </div>
            </div>
        );
    });

    const Main = React.memo(() => {
        const subMenuFactories = React.useMemo(() => {
            return [
                {
                    title: 'EN',
                },
                {
                    title: 'Company',
                },
                {
                    title: 'Partner Market Place',
                },
            ];
        }, []);
        const subMenu2Factories = React.useMemo(() => {
            return [
                {
                    title: 'Auto Homepage',
                },
                {
                    title: 'Sales',
                },
                {
                    title: 'CRM',
                },
                {
                    title: 'Electronic office',
                },
                {
                    title: 'Cloud ERP',
                },
                {
                    title: 'SSL',
                },
            ];
        }, []);
        const tabNowFactories = React.useMemo(() => {
            return [
                {
                    title: '6',
                    desc: (
                        <>
                            different
                            <br />
                            IT Software
                            <br />
                            Networks
                        </>
                    ),
                },
                {
                    title: '32',
                    desc: 'partners',
                },
                {
                    title: '4',
                    desc: 'countries',
                },
            ];
        }, []);
        return (
            <div className="home-main">
                <div className="sub-menu flex">
                    {subMenuFactories.map(({ title }) => (
                        <div key={title} className="sub-menu-item pointer">
                            {title}
                        </div>
                    ))}
                </div>
                <div className="sub-menu-2 flex">
                    {subMenu2Factories.map(({ title }) => (
                        <div key={title} className="sub-menu-item-2 pointer">
                            {title}
                        </div>
                    ))}
                </div>
                <div className="main-tabs">
                    <Tabs>
                        <Tab label="Now" tabID="0">
                            {tabNowFactories.map(({ title, desc }) => (
                                <div className="tab-child" key={title}>
                                    <p className="tab-child-title">{title}</p>
                                    <p className="tab-child-desc">{desc}</p>
                                </div>
                            ))}
                        </Tab>
                        <Tab label="Now" tabID="1">
                            <p>content of tab 2</p>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    });
    return (
        <Styled className="home-header-extra">
            <Banner />
            <Main />
        </Styled>
    );
};

export default React.memo(HeaderExtra);
