import React from 'react';
import { ENVS } from 'src/configs';
import styled from 'styled-components';

const Styled = styled.div`
    &.section-container {
        /* border: solid; */
    }
    &.section-odd-container {
        background: #f4f4f4;
    }
    &.section-container .main-title {
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 65px;
        text-align: center;
        letter-spacing: 0.01em;
        color: #181949;
        text-transform: uppercase;
        margin-top: 2%;
    }
    &.section-container .section-content {
        justify-content: space-evenly;
        min-height: 400px;
    }
    .content {
        /* border: solid; */
    }
    .content .title-content {
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 44px;
        text-align: center;
        text-transform: uppercase;
        color: #181949;
    }
    .sub-content .title-sub-content {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        color: #666666;
        margin: 16px 0;
    }

    .sub-content .btn-sub-content {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #ffffff;
        background: #181949;
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 16px;
    }
    .flex-wrap {
        justify-content: space-evenly;
    }
    .wrap-item {
        flex: 1 0 calc(100% / 3);
        max-width: calc(100% / 3);
    }
`;

interface IDescContent {
    desc: string;
    btnDesc: string;
}

interface IProps {
    icon: React.FunctionComponent;
    titleContent: string;
    title: React.FunctionComponent;
    descContents: IDescContent[];
    index: number;
}

const Section = (props: IProps & any) => {
    const { icon, titleContent, title, descContents, index } = props;
    const isOddItem = React.useMemo(() => index % 2 !== 0, []);
    return (
        <Styled className={`section-container ${isOddItem ? 'section-odd-container' : ''}`}>
            {title && <p className="main-title">{title}</p>}
            <div className={`section-content flex ${isOddItem ? 'flex-reverse' : ''}`}>
                {icon && (
                    <div className="section-content-icon">
                        <img src={`${ENVS.REACT_APP_DOMAIN_URL}/images/${icon}`} alt="" />,
                    </div>
                )}
                <div className="content">
                    <p className="title-content center-text">{titleContent}</p>
                    <div className={`sub-content-items ${descContents.length > 1 ? 'flex-wrap' : ''}`}>
                        {descContents.map((item: IDescContent, index: any, array: string | any[]) => (
                            <div
                                className={`sub-content flex-center-vertical ${array.length > 1 ? 'wrap-item' : ''}`}
                                key={item.desc}
                            >
                                <p className="title-sub-content">{item.desc}</p>
                                <button className="btn-sub-content" type="button">
                                    {item.btnDesc}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Styled>
    );
};

export default React.memo(Section);
